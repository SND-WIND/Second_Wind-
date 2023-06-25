const knex = require("../knex");

class Like {
  constructor({ id, comment }) {
    this.id = id;
    this.comment = comment;
  }

  static async listLikesForPost(post_id) {
    return knex("likes")
      .where("post_id", post_id)
      .groupBy("user_id")
      .count("id AS likeCount")
      .distinct("user_id")
      .countDistinct("user_id AS peopleCount")
      .first();
  }

  static async create({ user_id, post_id, account_type }) {
    try {
      const [like] = await knex("likes")
        .insert({
          user_id,
          post_id,
          account_type,
        })
        .returning("*");
      return like;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  static async delete(id) {
    try {
      const query = "DELETE FROM likes WHERE id = ?";
      await knex.raw(query, [id]);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}

module.exports = Like;

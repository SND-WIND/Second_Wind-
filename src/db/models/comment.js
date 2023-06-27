const knex = require("../knex");

class Comment {
  constructor({ id, comment }) {
    this.id = id;
    this.comment = comment;
  }

  static async list({ post_id }) {
    try {
      const query = `SELECT comments.*,
      CASE
        WHEN comments.account_type = true THEN users.username
          WHEN comments.account_type = false THEN businesses.username
      END AS username,
      CASE
          WHEN comments.account_type = true THEN users.profile_image
          WHEN comments.account_type = false THEN businesses.profile_image
      END AS profile_image
      FROM comments
      LEFT JOIN users ON users.id = comments.user_id AND comments.account_type = true
      LEFT JOIN businesses ON businesses.id = comments.user_id AND comments.account_type = false
      WHERE post_id = ?;`;
      const { rows } = await knex.raw(query, [post_id]);
      return rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async find(id) {
    try {
      const result = await knex.raw(`SELECT * FROM comments WHERE id = ?`, [
        id,
      ]);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async create({ user_id, account_type, post_id, comment }) {
    try {
      const [createdComment] = await knex("comments")
        .insert({
          user_id,
          account_type,
          post_id,
          comment,
        })
        .returning("*");
      return createdComment;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  static async delete(id) {
    try {
      const query = "DELETE FROM comments WHERE id = ?";
      await knex.raw(query, [id]);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  static async deleteAll() {
    return knex.raw("TRUNCATE comments;");
  }

  static async update(id, comment) {
    // dynamic queries are easier if you add more properties
    try {
      // const [updatedComment] = await knex("comments")
      //   .where({ id })
      //   .update({ comment });
      //   //.returning("*");

      // return updatedComment;
      await knex("comments").where({ id }).update({ comment });

      const updatedComment = await knex("comments").where({ id }).first();
      return updatedComment;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = Comment;

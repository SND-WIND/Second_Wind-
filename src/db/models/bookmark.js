const knex = require("../knex");

class Bookmark {
  constructor({ id, caption, image_url }) {
    this.id = id;
    this.caption = caption;
    this.image_url = image_url;
  }

  static async list({ user_id }) {
    console.log(user_id);
    // const query = `SELECT posts.*, users.username, users.profile_image
    //   FROM posts
    //   JOIN users ON user_id = users.id
    //   WHERE user_id <> ?;`;
    // const { rows } = await knex.raw(query, [user_id]);
    // return rows;
  }

  static async find(id) {
    try {
      const result = await knex.raw(`SELECT * FROM posts WHERE id = ?`, [id]);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      return null;
      // const query = "SELECT * FROM users WHERE id = ?";
      // const {
      //   rows: [user],
      // } = await knex.raw(query, [id]);
      // return user ? new User(user) : null;
    }
  }

  static async create({ user_id, post_id }) {
    try {
      const [bookmark] = await knex("posts")
        .insert({
          user_id,
          post_id,
        })
        .returning("*");
      return bookmark;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  static async delete(id) {
    try {
      const query = "DELETE FROM bookmarks WHERE id = ?";
      await knex.raw(query, [id]);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  static async deleteAll() {
    return knex.raw("TRUNCATE bookmarks;");
  }
}

module.exports = Bookmark;

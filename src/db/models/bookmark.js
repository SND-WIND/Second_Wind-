const knex = require("../knex");

class Bookmark {
  constructor({ id, caption, image_url }) {
    this.id = id;
    this.caption = caption;
    this.image_url = image_url;
  }

  static async list({ user_id, account_type }) {
    try {
      const query = `SELECT posts.*, bookmarks.id AS bookmark_id,
        CASE
          WHEN posts.account_type = true THEN users.username
          WHEN posts.account_type = false THEN businesses.username
        END AS username,
        CASE
          WHEN posts.account_type = true THEN users.profile_image
          WHEN posts.account_type = false THEN businesses.profile_image
        END AS profile_image,
        likes.id AS like_id,
        COUNT(likes.id) AS like_count
        FROM bookmarks
        JOIN posts ON bookmarks.post_id = posts.id
        LEFT JOIN users ON users.id = posts.user_id AND posts.account_type = true
        LEFT JOIN businesses ON businesses.id = posts.user_id AND posts.account_type = false
        LEFT JOIN likes ON likes.post_id = posts.id AND likes.user_id = ? AND likes.account_type = ?
        WHERE bookmarks.user_id = ? AND bookmarks.account_type = ?
        GROUP BY posts.id, users.username, businesses.username, users.profile_image, businesses.profile_image, bookmarks.id, likes.id;`;
      const { rows } = await knex.raw(query, [
        user_id,
        account_type,
        user_id,
        account_type,
      ]);
      return rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async find(id) {
    try {
      const result = await knex.raw(`SELECT * FROM bookmarks WHERE id = ?`, [
        id,
      ]);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async create({ user_id, post_id, account_type }) {
    try {
      const [bookmark] = await knex("bookmarks")
        .insert({
          user_id,
          post_id,
          account_type,
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

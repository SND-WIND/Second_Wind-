const knex = require("../knex");

class Post {
  constructor({ id, caption, image_url }) {
    this.id = id;
    this.caption = caption;
    this.image_url = image_url;
  }

  static async list({ user_id, account_type }) {
    try {
      const query = `SELECT posts.*,
        CASE
          WHEN posts.account_type = true THEN users.username
          WHEN posts.account_type = false THEN businesses.username
        END AS username,
        CASE
          WHEN posts.account_type = true THEN users.profile_image
          WHEN posts.account_type = false THEN businesses.profile_image
        END AS profile_image,
        bookmarks.id AS bookmark_id,
        likes.id AS like_id,
        (
          SELECT COUNT(*)
          FROM likes
          WHERE likes.post_id = posts.id
        ) AS like_count
        FROM posts
        LEFT JOIN users ON users.id = posts.user_id AND posts.account_type = true
        LEFT JOIN businesses ON businesses.id = posts.user_id AND posts.account_type = false
        LEFT JOIN bookmarks ON bookmarks.post_id = posts.id AND bookmarks.user_id = ? AND bookmarks.account_type = ?
        LEFT JOIN likes ON likes.post_id = posts.id AND likes.user_id = ? AND likes.account_type = ?
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

  static async listUserPost({ user_id, account_type }) {
    try {
      const query = `SELECT posts.*, 
      CASE
        WHEN posts.account_type = true THEN users.username
        WHEN posts.account_type = false THEN businesses.username
      END AS username,
      CASE
        WHEN posts.account_type = true THEN users.profile_image
        WHEN posts.account_type = false THEN businesses.profile_image
      END AS profile_image,
      bookmarks.id AS bookmark_id,
      likes.id AS like_id,
      (
        SELECT COUNT(*)
        FROM likes
        WHERE likes.post_id = posts.id
      ) AS like_count
      FROM posts
      LEFT JOIN users ON users.id = posts.user_id AND posts.account_type = true
      LEFT JOIN businesses ON businesses.id = posts.user_id AND posts.account_type = false
      LEFT JOIN bookmarks ON bookmarks.post_id = posts.id AND bookmarks.user_id = ? AND bookmarks.account_type = ?
      LEFT JOIN likes ON likes.post_id = posts.id AND likes.user_id = ? AND likes.account_type = ?
      WHERE posts.user_id = ? AND posts.account_type = ?
      GROUP BY posts.id, users.username, businesses.username, users.profile_image, businesses.profile_image, bookmarks.id, likes.id;`;
      const { rows } = await knex.raw(query, [
        user_id,
        account_type,
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
      const result = await knex.raw(`SELECT * FROM posts WHERE id = ?`, [id]);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async create({ user_id, caption, image_url, account_type }) {
    try {
      const [post] = await knex("posts")
        .insert({
          user_id,
          caption,
          image_url,
          account_type,
        })
        .returning("*");
      return post;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  static async delete(id) {
    try {
      const query = "DELETE FROM posts WHERE id = ?";
      await knex.raw(query, [id]);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  static async deleteAll() {
    return knex.raw("TRUNCATE posts;");
  }

  static async update(id, caption) {
    // dynamic queries are easier if you add more properties
    try {
      const [updatedPost] = await knex("posts")
        .where({ id })
        .update({ caption })
        .returning("*");
      return updatedPost;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = Post;

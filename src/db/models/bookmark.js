const knex = require("../knex");

class Bookmark {
  constructor({ id, caption, image_url }) {
    this.id = id;
    this.caption = caption;
    this.image_url = image_url;
  }

  static async list({ user_id, account_type }) {
    try {
      const query = `SELECT
      (bookmarked_item->>'item_id') AS item_id,
      (bookmarked_item->>'account_type') AS account_type,
      (bookmarked_item->>'username') AS username,
      (bookmarked_item->>'profile_image') AS profile_image,
      (bookmarked_item->>'like_id') AS like_id,
      (bookmarked_item->>'like_count') AS like_count,
      (bookmarked_item->>'created_at') AS created_at,
      bookmark_id,
      bookmark_post_type
  FROM (
      SELECT
          CASE
              WHEN bookmarks.post_type = true THEN
                  json_build_object(
                      'item_id', posts.id,
                      'account_type', posts.account_type::text,
                      'username', CASE
                          WHEN posts.account_type = true THEN users.username
                          WHEN posts.account_type = false THEN businesses.username
                      END,
                      'profile_image', CASE
                          WHEN posts.account_type = true THEN users.profile_image
                          WHEN posts.account_type = false THEN businesses.profile_image
                      END,
                      'like_id', likes.id,
                      'like_count', (
                          SELECT COUNT(*)
                          FROM likes
                          WHERE likes.post_id = posts.id
                      ),
                      'created_at', posts.created_at
                  )
              WHEN bookmarks.post_type = false THEN
                  json_build_object(
                      'item_id', jobs.id,
                      'account_type', false::text,
                      'username', NULL,
                      'profile_image', NULL,
                      'like_id', NULL,
                      'like_count', NULL,
                      'created_at', jobs.created_at
                  )
          END AS bookmarked_item,
          bookmarks.id AS bookmark_id,
          bookmarks.post_type AS bookmark_post_type
      FROM
          bookmarks
      LEFT JOIN
          posts ON posts.id = bookmarks.post_id AND bookmarks.post_type = true
      LEFT JOIN
          jobs ON jobs.id = bookmarks.post_id AND bookmarks.post_type = false
      LEFT JOIN
          users ON users.id = posts.user_id AND posts.account_type = true
      LEFT JOIN
          businesses ON businesses.id = posts.user_id AND posts.account_type = false
      LEFT JOIN
          likes ON likes.post_id = posts.id AND likes.user_id = ? AND likes.account_type = ?
      WHERE
          bookmarks.user_id = ? AND bookmarks.account_type = ?
  ) AS result;
  `;
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

  static async create({ user_id, post_id, account_type, post_type }) {
    try {
      const [bookmark] = await knex("bookmarks")
        .insert({
          user_id,
          post_id,
          account_type,
          post_type,
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

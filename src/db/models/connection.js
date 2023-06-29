const knex = require("../knex");

class Connection {
  constructor({ id, comment }) {
    this.id = id;
    this.comment = comment;
  }

  static async list({ userId, userType }) {
    try {
      const query = `SELECT * FROM connections WHERE user_id1 = ? AND account_type1 = ?;`;
      const { rows } = await knex.raw(query, [userId, userType]);
      return rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async listRequest({ userId, userType }) {
    try {
      const query = `SELECT connections.*,
      CASE
          WHEN connections.account_type1 = true THEN users.username
          WHEN connections.account_type1 = false THEN businesses.username
      END AS username,
      CASE
          WHEN connections.account_type1 = true THEN users.profile_image
          WHEN connections.account_type1 = false THEN businesses.profile_image
      END AS profile_image
      FROM connections
      LEFT JOIN users ON users.id = connections.user_id1 AND connections.account_type1 = true
      LEFT JOIN businesses ON businesses.id = connections.user_id1 AND connections.account_type1 = false
      WHERE user_id2 = ? AND account_type2 = ? AND status2 = false;`;
      const { rows } = await knex.raw(query, [userId, userType]);
      return rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async find(id) {
    try {
      const result = await knex.raw(`SELECT * FROM connections WHERE id = ?;`, [
        id,
      ]);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async create({ user_id1, account_type1, user_id2, account_type2 }) {
    try {
      const [createdConnection] = await knex("connections")
        .insert({
          user_id1,
          account_type1,
          status1: true,
          user_id2,
          account_type2,
          status2: false,
        })
        .returning("*");
      return createdConnection;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  static async delete(id) {
    try {
      const query = "DELETE FROM connections WHERE id = ?;";
      await knex.raw(query, [id]);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  static async deleteAll() {
    return knex.raw("TRUNCATE connections;");
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

module.exports = Connection;

const knex = require("../knex");

class Job {
  constructor({ id, description, location, salary, position }) {
    this.id = id;
    this.description = description;
    this.location = location;
    this.salary = salary;
    this.position = position;
    this.job_type = job_type;
    this.link = link;
  }

  static async list({ user_id, account_type }) {
    try {
      const query = `SELECT
      jobs.*,
      businesses.name,
      businesses.username,
      businesses.profile_image,
      bookmarks.id AS bookmark_id
  FROM
      jobs
  JOIN
      businesses ON businesses.id = jobs.business_id
  LEFT JOIN
      bookmarks ON bookmarks.post_id = jobs.id AND bookmarks.post_type = false AND bookmarks.user_id = ? AND bookmarks.account_type = ?;`;
      const result = await knex.raw(query, [user_id, account_type]);
      return result.rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async listBusinessPost({ business_id }) {
    try {
      const query = `SELECT jobs.*, businesses.name, businesses.username, businesses.profile_image
      FROM jobs
      JOIN businesses ON business_id = jobs.business_id
      WHERE business_id <> ?;`;
      const { rows } = await knex.raw(query, [business_id]);
      return rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async search(position) {
    try {
      const query = `SELECT jobs.*, businesses.name, businesses.username, businesses.profile_image
      FROM jobs
      JOIN businesses ON business_id = jobs.business_id
      WHERE 
        jobs.position ILIKE '%' || ? || '%' OR
        jobs.job_type ILIKE '%' || ? || '%' OR
        jobs.location ILIKE '%' || ? || '%' OR
        jobs.description ILIKE '%' || ? || '%';`;
      const { rows } = await knex.raw(query, [
        position,
        position,
        position,
        position,
      ]);
      return rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async find(id) {
    try {
      const result = await knex.raw(`SELECT * FROM jobs WHERE id = ?`, [id]);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  static async create(
    business_id,
    description,
    location,
    salary,
    position,
    job_type,
    link
  ) {
    try {
      const [job] = await knex("jobs")
        .insert({
          business_id,
          description,
          location,
          salary,
          position,
          job_type,
          link,
        })
        .returning("*");
      return job;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  static async delete(id) {
    try {
      const query = "DELETE FROM jobs WHERE id = ?";
      await knex.raw(query, [id]);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  static async deleteAll() {
    return knex.raw("TRUNCATE jobs;");
  }

  static async update(id, description, location, salary, role) {
    // dynamic queries are easier if you add more properties
    const [updatedJob] = await knex("jobs")
      .where({ id })
      .update({ description, location, salary, position, job_type, link })
      .returning("*");
    return updatedJob;
  }
}

module.exports = Job;

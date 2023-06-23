const knex = require("../knex");


class Job {
  constructor({ id, description, location, salary, role }) {
    this.id = id;
    this.description = description;
    this.location = location;
    this.salary = salary;
    this.role = role;
  }


  static async list() {
    const result = await knex.raw("SELECT * FROM jobs");
    return result.rows;
  }


  static async listBusinessPost({ business_id }) {
    const query = `SELECT jobs.*, businesses.username, businesses.profile_image
    FROM jobs
    JOIN businesses ON business_id = users.id
    WHERE business_id <> ?;`;
    const { rows } = await knex.raw(query, [business_id]);
    return rows;
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

  static async create( business_id, description, location, salary, role) {
  static async create( business_id, description, location, salary, role) {
    try {
      const [job] = await knex("jobs")
        .insert({
          business_id,
          description,
          location,
          salary,
          role,
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
      .update({ description, location, salary, role })
      .returning("*");
    return updatedJob;
  }
}


//const testModel = async () => {
    // const user_id = 5;
    //const post_id = 7;
    //const LikeObj = await Like.create({ user_id, post_id});
    //   // const onePost = await Post.find(6);
    //   //const allPosts = await Post.list();
       //const removeJob = await Job.delete(43);
    // //   console.log('like removed', removeLike);
    // const business_id = 9;
    // const description = 'description test 1';
    // const location = 'Staten Island';
    // const salary = 65000;
    // const role = 'Head Chef';
    //console.log(await Job.delete(43))
      //console.log('Job', await Job.create(business_id, description, location, salary, role));
      //console.log("LikeObj", LikeObj);
 //    };
    
 //testModel();

//const testModel = async () => {
    // const user_id = 5;
    //const post_id = 7;
    //const LikeObj = await Like.create({ user_id, post_id});
    //   // const onePost = await Post.find(6);
    //   //const allPosts = await Post.list();
       //const removeJob = await Job.delete(43);
    // //   console.log('like removed', removeLike);
    // const business_id = 9;
    // const description = 'description test 1';
    // const location = 'Staten Island';
    // const salary = 65000;
    // const role = 'Head Chef';
    //console.log(await Job.delete(43))
      //console.log('Job', await Job.create(business_id, description, location, salary, role));
      //console.log("LikeObj", LikeObj);
   //  };
    
 //testModel();
module.exports = Job;
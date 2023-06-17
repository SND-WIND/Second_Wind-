const knex = require("../knex");
const { hashPassword, isValidPassword } = require("../../utils/auth-utils");

class Post {
  constructor({ id, caption, image_url }) {
    this.id = id;
    this.caption = caption;
    this.image_url = image_url;
  }

  static async list() {
    const query = `SELECT posts.*, users.username, users.profile_image
    FROM posts
    JOIN users ON user_id = users.id;`;
    const { rows } = await knex.raw(query);
    return rows;
  }

  static async listUserPost({ user_id }) {
    // const posts = await knex("posts").where("user_id", user_id).returning("*");
    // return posts;
    const query = `SELECT posts.*, users.username, users.profile_image
    FROM posts
    JOIN users ON user_id = users.id
    WHERE user_id = ?;`;
    const { rows } = await knex.raw(query, [user_id]);
    return rows;
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

  static async create({ user_id, caption, image_url }) {
    try {
      const [post] = await knex("posts")
        .insert({
          user_id,
          caption,
          image_url,
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
    return knex.raw("TRUNCATE users;");
  }

  static async update(id, caption) {
    // dynamic queries are easier if you add more properties
    const [updatedPost] = await knex("posts")
      .where({ id })
      .update({ caption })
      .returning("*");
    return updatedPost;
  }
}

const testModel = async () => {
  // const postObj = await Post.create(5, "we outside", "https://example1.com");
  // const onePost = await Post.find(6);
  //const allPosts = await Post.list();
  const removePost = await Post.delete(4);
  console.log(removePost);
};

//testModel();

module.exports = Post;

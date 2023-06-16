const knex = require("../knex");
const { hashPassword, isValidPassword } = require("../../utils/auth-utils");

class Post {
  constructor({ id, caption, image_url }) {
    this.id = id;
    this.caption = caption;
    this.image_url = image_url;
  }

  static async list() {
    const result = await knex.raw("SELECT * FROM posts");
    return result.rows;
    // const query = "SELECT * FROM posts";
    // const { rows } = await knex.raw(query);
    // return rows.map((user) => new User(user));
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
      // const result = await knex.raw(
      //   `
      //    INSERT INTO posts (user_id, caption, image_url)
      //    VALUES (?, ?, ?) RETURNING *`,
      //   [user_id, caption, image_url]
      // );
      // return result.rows[0];
      console.log("model", user_id, caption, image_url);
      const [post] = await knex("posts").insert({
        user_id,
        caption,
        image_url,
      });
      console.log(post);
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

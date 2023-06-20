const knex = require("../knex");
const { hashPassword, isValidPassword } = require("../../utils/auth-utils");

class User {
  #passwordHash = null;

  constructor({ id, username, password }) {
    this.id = id;
    this.username = username;
    this.#passwordHash = password;
  }

  static async list() {
    try{
      const query = "SELECT * FROM users";
    const { rows } = await knex.raw(query);
    return rows.map((user) => new User(user));
    }catch(err){
      console.error(err);
      return null;
    }
  }

  static async find(id) {
    const [user] = await knex("users").where("id", id);
    return user ? new User(user) : null;
  }

  static async findByUsername(username) {
    try{
      const [user] = await knex("users").where("username", username);
    return user ? new User(user) : null;

    }catch(err){
      console.error(err);
      return null;
    }
  }

  static async create({ username, full_name, email, password }) {
    try {
      const passwordHash = await hashPassword(password);
      const [user] = await knex("users")
      .insert({ username, password: passwordHash, full_name, email })
      .returning("*");
      return new User(user);
    } catch (err) {
      console.error(err.detail);
      return null;
    }
  }

  static async delete(id) {
    try {
      const deletedPosts = await knex("posts").delete("*").where("user_id", id);
      console.log(deletedPosts);
      const deletedUser = await knex("users").delete("*").where("id", id);
      console.log(deletedUser);
    } catch(err){
      console.error(err);
      return null;
    }
  }
  
// try{}catch{console.log(err)}
  static async deleteAll() {
    try{
      return knex.raw("TRUNCATE users;");
    }catch(err){
      console.error(err);
      return null;
    }
  }

  update = async (username) => {
    // dynamic queries are easier if you add more properties
    try{
      const [updatedUser] = await knex("users")
      .where({ id: this.id })
      .update({ username })
      .returning("*");
    return updatedUser ? new User(updatedUser) : null;
    }catch(err){
      console.error(err);
      return null;
    }
  };

  isValidPassword = async (password) =>
    isValidPassword(password, this.#passwordHash);
}

module.exports = User;

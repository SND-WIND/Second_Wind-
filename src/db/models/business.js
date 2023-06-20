const knex = require("../knex");
const { hashPassword, isValidPassword } = require("../../utils/auth-utils");

class Business {
  #passwordHash = null;

  constructor({ id, username, password }) {
    this.id = id;
    this.username = username;
    this.#passwordHash = password;
  }

  static async list() {
    try {
      const query = "SELECT * FROM businesses";
      const { rows } = await knex.raw(query);
      return rows.map((business) => new Business(business));
    } catch (err) {
      console.error(err);
      return []; 
    }
  }
  

  static async find(id) {
    try {
      const [business] = await knex("businesses").where("id", id);
      return business ? new Business(business) : null;
    } catch (err) {
      console.error(err);
      return null; 
    }
  }
  

  static async findByUsername(username) {
    try {
      const [business] = await knex("businesses").where("username", username);
      return business ? new Business(business) : null;
    } catch (err) {
      console.error(err);
      // Handle the error or throw it further if necessary
      return null; // Return null or an appropriate value in case of error
    }
  }
  

  static async create({ username, name, email, password }) {
    try {
      const passwordHash = await hashPassword(password);
      const [business] = await knex("businesses")
        .insert({ username, password: passwordHash, name, email })
        .returning("*");
      return new Business(business);
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async deleteAll() {
    try{
      return knex.raw("TRUNCATE businesses;");
    }catch (err){
      console.err(err)
      return null;
    }
  }

  update = async (username) => {
    try {
      // dynamic queries are easier if you add more properties
      const [updatedBusiness] = await knex("businesses")
        .where({ id: this.id })
        .update({ username })
        .returning("*");
      return updatedBusiness ? new Business(updatedBusiness) : null;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  isValidPassword = async (password) =>
    isValidPassword(password, this.#passwordHash);
}

module.exports = Business;

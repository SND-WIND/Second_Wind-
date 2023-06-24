const knex = require("../knex");
const { hashPassword, isValidPassword } = require("../../utils/auth-utils");

class Business {
  #passwordHash = null;

  constructor({ id, username, full_name, email, password }) {
    this.id = id;
    this.username = username;
    this.fullName = full_name;
    this.email = email;
    this.#passwordHash = password;
    this.accountType = "business";
  }

  static async list() {
    const query = "SELECT * FROM businesses";
    const { rows } = await knex.raw(query);
    return rows.map((business) => new Business(business));
  }

  static async find(id) {
    const [business] = await knex("businesses").where("id", id);
    return business ? new Business(business) : null;
  }

  static async findByUsername(username) {
    const [business] = await knex("businesses").where("username", username);
    return business ? new Business(business) : null;
  }

  static async create({ username, name, email, password }) {
    const passwordHash = await hashPassword(password);

    const [business] = await knex("businesses")
      .insert({ username, password: passwordHash, name, email })
      .returning("*");
    return new Business(business);
  }

  static async deleteAll() {
    return knex.raw("TRUNCATE businesses;");
  }

  update = async (username) => {
    // dynamic queries are easier if you add more properties
    const [updatedBusiness] = await knex("businesses")
      .where({ id: this.id })
      .update({ username })
      .returning("*");
    return updatedBusiness ? new Business(updatedBusiness) : null;
  };

  isValidPassword = async (password) =>
    isValidPassword(password, this.#passwordHash);
}

module.exports = Business;

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  return knex.schema.createTable("comments", (table) => {
    table.increments("id").primary();
    table.integer("user_id").notNullable();
    table.boolean("account_type").notNullable();
    table.integer("post_id").notNullable();
    table.foreign("post_id").references("id").inTable("posts");
    table.string("comment");
    table.timestamps(true, true);
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  return knex.schema.dropTable("comments");
};

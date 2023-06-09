/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable("bookmarks", (table) => {
    table.increments("id").primary();
    table.integer("user_id").notNullable();
    table.integer("post_id").notNullable();
    table.foreign("post_id").references("id").inTable("posts");
    table.boolean("account_type").notNullable();
    table.boolean("post_type").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("bookmarks");


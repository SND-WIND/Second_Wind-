/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable("likes", (table) => {
    table.increments().primary();
    table.integer("post_id").notNullable();
    table.foreign("post_id").references("id").inTable("posts");
    table.integer("user_id").notNullable();
    table.foreign("user_id").references("id").inTable("users");
    table.string("type").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("likes");

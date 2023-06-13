/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.createTable("users", (table) => {
    table.increments();
    table.string("username").notNullable().unique();
    table.string("full_name").notNullable();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.string("location");
    table.string("sex");
    table.string("age");
    table.string("status");
    table.string("bio");
    table.string("profile_image");
    table.timestamps(true, true);
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("users");

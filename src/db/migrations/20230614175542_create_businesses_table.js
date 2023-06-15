/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable("businesses", (table) => {
    table.increments().primary();
    table.string("username").notNullable().unique();
    table.string("name").notNullable();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.string("location");
    table.string("ein");
    table.string("business_type");
    table.string("bio");
    table.string("description");
    table.string("profile_image");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("businesses");

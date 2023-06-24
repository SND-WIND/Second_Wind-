/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable("jobs", (table) => {
    table.increments().primary();
    table.integer("business_id").notNullable();
    table.foreign("business_id").references("id").inTable("businesses");
    table.string("description").notNullable();
    table.string("location").notNullable();
    table.integer("salary");
    table.string("role").notNullable();
    table.string("website");
    table.string("link");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable("jobs");
};

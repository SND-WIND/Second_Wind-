/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable("connections", (table) => {
        table.increments().primary();
        table.integer("user_id").notNullable();
        table.foreign("user_id").references("id").inTable("users");
        table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("connections");

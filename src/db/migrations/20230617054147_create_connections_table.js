/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable("connections", (table) => {
        table.increments().primary();
        table.integer("user_id1").notNullable();
        table.boolean("account_type1").notNullable();
        table.boolean("status1").notNullable();
        table.integer("user_id2").notNullable();
        table.boolean("account_type2").notNullable();
        table.boolean("status2").notNullable();
        table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("connections");

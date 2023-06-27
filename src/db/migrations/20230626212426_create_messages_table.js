/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable("messages", function (table) {
    table.increments("id").primary();
    table.integer("sender_id").references("id").inTable("users").notNullable();
    table
      .integer("recipient_id")
      .references("id")
      .inTable("users")
      .notNullable();
    table.text("text").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTable('messages');
};

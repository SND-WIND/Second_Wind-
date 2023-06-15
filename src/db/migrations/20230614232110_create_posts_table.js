/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable("posts", (table) => {
        table.increments('id').primary();
        table.integer('user_id').notNullable();
        table.foreign('user_id').references('id').inTable('users');
        table.string("caption");
        table.string("image_url");
        table.timestamps(true, true);
});
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTable("posts");
};


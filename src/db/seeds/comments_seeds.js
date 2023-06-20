/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex('comments').insert([
    {user_id: 8, post_id: 5, comment: 'I agree'},
    {user_id: 6, post_id: 7, comment: 'As you should'},
    {user_id: 5, post_id: 2, comment: 'I disagree'}
  ]);
};


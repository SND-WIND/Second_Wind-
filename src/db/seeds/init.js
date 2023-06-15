const User = require('../models/user');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
<<<<<<< HEAD
  
=======
  await User.deleteAll();
  // await User.create('cool_cat','Michael Smith' , 'michaelsmith@example.com', '1234');
  // await User.create('l33t-guy', 'Lewis Miller', 'l33t-guy@me.com', '1234');
  // await User.create('wowow', 'Porter Parker', 'wowow@me.com', '1234');
 // await User.create('michaelsmith@example.com', 'Michael Smith', '1234', 'cool_cat');
 await knex('users').insert({
  email: 'example@example.com',
  full_name: 'John Doe',
  password: 'password',
  username: 'johndoe' // Provide a non-null value for the "username" column
});

await knex('users').insert([
  {
    email: 'example3@example.com',
    full_name: 'Alice Johnson',
    password: 'password3',
    username: 'alicejohnson'
  },
  {
    email: 'example4@example.com',
    full_name: 'Mike Davis',
    password: 'password4',
    username: 'mikedavis'
  }
]);

>>>>>>> 6747026d1221c6f9180a8e22de92d168f919d534
};

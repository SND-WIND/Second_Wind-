/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('businesses').del();

  const seedData = [
    { username: 'google', name: 'Google Inc.', email: 'google@gmail.com', password: 'password', location: 'California', ein: '123456789', business_type: 'Technology', bio: 'We are Google', description: 'Google is a multinational technology company that specializes in Internet-related services and products.', profile_image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' },
    { username: 'instacart', name: 'Instacart Inc.', email: 'instacart@gmail.com', password: 'password', location: 'California', ein: '987654321', business_type: 'Retail', bio: 'We are Instacart', description: 'Instacart is an American company that operates a grocery delivery and pick-up service in the United States and Canada.', profile_image: 'https://www.instacart.com/assets/graphics/instacart_bag-5a2f8b9c7f3c9b1c9f2d8d9b6e4d5b8d.svg' },
    { username: 'pdtpartners', name: 'PDT Partners LLC', email: 'pdt@gmail.com', password: 'password', location: 'New York', ein: '2468101214', business_type: 'Finance', bio: 'We are PDT Partners', description: 'PDT Partners is a quantitative investment firm that develops and deploys quantitative, model-driven trading strategies across multiple asset classes.', profile_image: 'https://www.pdtpartners.com/wp-content/uploads/2019/08/PDT-Logo-White-1.png' }
  ];

  await knex('businesses').insert(seedData);
};
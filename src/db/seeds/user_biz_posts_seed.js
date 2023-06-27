const bcrypt = require('bcrypt');

exports.seed = async function(knex) {
    
    await knex('likes').del();
    await knex('comments').del();
    await knex('bookmarks').del();
    await knex('posts').del();
    
    await knex('users').del();
    await knex('businesses').del();
    
    
    

    // Hash password
    
    const hashedPassword = await bcrypt.hash('123', 10);

    // Insert data
    const users = await knex('users').insert([
        {username: 'kevin101', full_name: 'Kevin Barter', email: 'user1@example.com', password: hashedPassword, profile_image: 'https://images.unsplash.com/photo-1625504615927-c14f4f309b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhlYWRzaG90c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'},
        {username: 'JL99', full_name: 'James Lard', email: 'user2@example.com', password: hashedPassword, profile_image: 'https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRzaG90c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'},
        {username: 'einUP', full_name: 'David Ein', email: 'user3@example.com', password: hashedPassword, profile_image: 'https://images.unsplash.com/photo-1591553160979-bbd520182529?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'},
        {username: 'ash_444', full_name: 'Ashley Robertson', email: 'user4@example.com', password: hashedPassword, profile_image: 'https://images.unsplash.com/photo-1606335192038-f5a05f761b3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'},
        {username: 'markgondoit', full_name: 'Mark Hems', email: 'user5@example.com', password: hashedPassword, profile_image: 'https://images.unsplash.com/photo-1598641795816-a84ac9eac40c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NzN8NzYwODI3NzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    ]).returning('*');

    for(let user of users){
        await knex('posts').insert([
            {user_id: user.id, account_type: true, caption: "This is my first post since I got out. It's been a journey and I'm excited for what's ahead. #newbeginnings",  image_url: `https://craiglpc.com/wp-content/uploads/2015/12/New-beginnings.jpg`},
            {user_id: user.id, account_type: true, caption: `Hello everyone so Excited to use this platform and turn my life around`, image_url: `http://example.com/post_image_${user.username}_2.jpg`},
            {user_id: user.id, account_type: false,  caption: `We will rise up!`, image_url: `https://i0.wp.com/www.northcarolinahealthnews.org/wp-content/uploads/2021/07/Re-entry-graphic-3.jpg?fit=1200%2C674&ssl=1`}
        ]);
    }
};
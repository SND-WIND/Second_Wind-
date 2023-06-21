async function createLike(req, res) {
    const {
      db: { Like },
      body: { post_id, user_id },
    } = req;
  
    console.log(post_id, user_id);
    await Like.create({post_id, user_id});
    res.status(201).json({ message: 'Like created successfully' });
    // } catch (error) {
    //   res.status(500).json({ error: 'Unable to create like' });
    // }
  }

module.exports = createLike;
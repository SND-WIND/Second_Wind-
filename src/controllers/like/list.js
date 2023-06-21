//const Like = require('../models/like');
async function listLikes(req, res) {
    //const { post_id } = req.params;
    const { 
    db: { Like },
    params: { post_id },
    } = req;

    try {
      const likes = await Like.listLikesForPost(post_id);
      res.status(200).json(likes);
    } catch (error) {
      res.status(500).json({ error: 'Unable to retrieve likes for the post' });
    }
  }

  module.exports = listLikes
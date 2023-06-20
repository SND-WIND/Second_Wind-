const listComments = async (req, res) => {
    const {
      session,
      db: { Comment },
    } = req;
  
    const comments = await Comment.list();
  
    res.send(comments);
  };
  
  module.exports = listComments;
  
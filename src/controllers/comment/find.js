const findComment = async (req, res) => {
    const {
      session,
      db: { Comment },
    } = req;
    
    const comment = await Comment.find( req.params.id, session.userId);
    console.log(comment);
   
    res.send(comment);
  };
  
  module.exports = findComment;
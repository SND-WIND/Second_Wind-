const updateComment = async (req, res) => {
    const {
      //session,
      db: { Comment },
      params: { id },
      body: { comment },
    } = req;
  
    //if (!isAuthorized(id, session)) return res.sendStatus(403);
  
    const updatedComment= await Comment.update(id, comment);
    res.send(updatedComment);
  };
  
  module.exports = updateComment;
  
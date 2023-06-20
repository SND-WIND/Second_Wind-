const deleteComment = async (req, res) =>  {
   
    const { db: { Comment }, params: { id }} = req;
      try {
        const comment = await Comment.delete(Number(id));
        if (!comment) {
          return res.status(404).json({ message: 'Comment not found' });
        }
        return res.json({ message: 'Comment deleted successfully' });
      } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Failed to delete comment' });
      }
    }
    
     
module.exports = deleteComment;
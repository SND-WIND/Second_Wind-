async function deleteLike(req, res) {
  const {
    db: { Like },
    params: { id},
  } = req;
  
    try {
      const like = await Like.delete(Number(id));
      if (!like) {
        return res.status(404).json({ message: 'Like not found' });
      }
      res.status(200).json({ message: 'Like deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Unable to delete like' });
    }
  }
  
  module.exports = deleteLike;
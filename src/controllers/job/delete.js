const deleteJob = async (req, res) => {
    const {
      db: { Job },
      params: { id },
    } = req;
    try {
      const job = await Job.delete(Number(id));
      if (!job) {
        return res.status(404).json({ message: "Job not found" });
      }
      return res.json({ message: "Job deleted successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to delete job" });
    }
  };
  
  module.exports = deleteJob;
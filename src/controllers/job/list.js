const listJobs = async (req, res) => {
    const {
      session,
      db: { Job },
    } = req;
  
    const user_id = session.userId;
  
    if (!user_id) return res.sendStatus(401);
  
    const jobs = await Job.list({ user_id });
  
    res.send(jobs);
  };
  
  module.exports = listJobs;
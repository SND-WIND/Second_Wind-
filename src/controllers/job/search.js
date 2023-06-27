const searchJobs = async (req, res) => {
  const {
    session,
    db: { Job },
    body: { position },
  } = req;

  const { userId, userType } = session;
  if (!userId || !userType) return res.sendStatus(401);

  const [jobs] = await Job.search(position);
  
  res.send(jobs);
};

module.exports = searchJobs;

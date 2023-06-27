const searchJobs = async (req, res) => {
  const {
    session,
    db: { Job },
    query: { query },
  } = req;

  const { userId, userType } = session;
  if (!userId || !userType) return res.sendStatus(401);

  const jobs = await Job.search(query);

  res.send(jobs);
};

module.exports = searchJobs;

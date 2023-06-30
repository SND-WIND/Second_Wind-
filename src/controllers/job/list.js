const listJobs = async (req, res) => {
  const {
    session,
    db: { Job },
  } = req;

  const { userId, userType } = session;

  if (!userId || !userType) return res.sendStatus(401);

  const jobs = await Job.list({
    user_id: userId,
    account_type: userType === "user",
  });

  res.send(jobs);
};

module.exports = listJobs;

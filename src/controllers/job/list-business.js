const listBusinessPosts = async (req, res) => {
  const {
    session,
    db: { Job },
    params: { id },
  } = req;

  const jobs = await Job.listBusinessPost({ business_id: id });

  res.send(jobs);
};

module.exports = listBusinessPosts;

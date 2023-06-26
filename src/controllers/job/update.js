const updateJob = async (req, res) => {
    const {
      session,
      db: { Job },
      params: { id },
      body: { description, location, salary,position,job_type, link, },
    } = req;
  
    //if (!isAuthorized(id, session)) return res.sendStatus(403);
  
    const updatedJob = await Job.update(id, description, location, salary, position, job_type, link);
    res.send(updatedJob);
  };
  
  module.exports = updateJob;
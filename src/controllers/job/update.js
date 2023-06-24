const updateJob = async (req, res) => {
    const {
      session,
      db: { Job },
      params: { id },
      body: { description, location, salary, role },
    } = req;
  
    //if (!isAuthorized(id, session)) return res.sendStatus(403);
  
    const updatedJob = await Job.update(id, description, location, salary, role);
    res.send(updatedJob);
  };
  
  module.exports = updateJob;
const createJob = async (req, res) => {
    const {
      session,
      db: { Job },
      body: { description, location, salary, role},
    } = req;
  
    const userId = session.userId 
  
    const job = await Job.create({
      user_id: userId,
      description,
      location,
      salary,
      role,
    });
  
    res.send(job);
  };
  
  module.exports = createJob;
  
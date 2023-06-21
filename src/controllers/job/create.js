const createJob = async (req, res) => {
    const {
      session,
      db: { Job },
      body: { description, location, salary, role },
    } = req;
  
    // const userId =
    //   accountType === "Personal" ? session.userId : session.businessId;
  
    const job = await Job.create({
      user_id: userId,
      description,
      location,
      salary,
      role,
      //account_type: accountType,
    });
  
    res.send(job);
  };
  
  module.exports = createJob;
  
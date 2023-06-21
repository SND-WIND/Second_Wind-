const findJob = async (req, res) => {
    const {
      session,
      db: { Job },
    } = req;
    
    const job = await Job.find( req.params.id, session.userId);
    console.log(job);
   
    res.send(job);
  };
  
  module.exports = findJob;
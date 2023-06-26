const createJob = async (req, res) => {
  let {
    session,
    db: { Job },
    body: { description, location, salary, position, job_type, link,},
  } = req;

  console.log("body", description, location, salary, position, job_type, link)
  console.log("session", session.businessId);


  //const userId = session.business_id;
  //console.log(userId);
  const job = await Job.create(
    session.businessId,
    description,
    location,
    salary,
    position,
    job_type,
    link,
  );
console.log(job);
  res.send(job);
};
  
  module.exports = createJob;

  
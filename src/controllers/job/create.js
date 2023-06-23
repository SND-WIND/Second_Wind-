const createJob = async (req, res) => {
  let {
    session,
    db: { Job },
    body: { description, location, salary, role},
  } = req;

  console.log("body", description, location, salary, role)
  console.log("session", session.businessId);


  //const userId = session.business_id;
  //console.log(userId);
  const job = await Job.create(
    session.businessId,
    description,
    location,
    salary,
    role,
  );
console.log(job);
  res.send(job);
};

module.exports = createJob;

  
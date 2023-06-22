const createUser = async (req, res) => {
  const {
    session,
    db: { User },
    body: { username, fullName, email, password },
  } = req;
  
  // TODO: check if username is taken, what should you return?
  const user = await User.create({
    username,
    full_name: fullName,
    email,
    password,
  });

  if (!user) return res.sendStatus(404);

  session.userId = user.id;
  user.type = "user";

  res.send(user);
};

module.exports = createUser;


// // Assuming you're using Express.js
// app.post('/api/create-account', (req, res) => {
//   const { username } = req.body;

//   // Check if the username already exists in your database or any other data source
//   const isUsernameExists = checkIfUsernameExists(username);

//   if (isUsernameExists) {
//     // Send back the "Account already exists" message as the response
//     return res.status(400).json({ message: 'Account already exists' });
//   }

//   // Continue with creating the new account
//   // ...

//   // Send a success response if the account is created successfully
//   return res.status(200).json({ message: 'Account created successfully' });
// });


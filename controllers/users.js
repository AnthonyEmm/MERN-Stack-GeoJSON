const User = require("../models/users");

// Create a user in DB //
const createUser = async (req, res) => {
  try {
    const { email, name, phoneNumber } = req.body;
    const user = await User.create({ email, name, phoneNumber });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Oops! Something went wrong");
  }
};

module.exports = {
  createUser,
};

const Property = require("../models/property");

// Create a property in DB //
const createProperty = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      bedrooms,
      area,
      image,
      images,
      owner,
      availability,
    } = req.body;
    const property = await Property.create({
      title,
      description,
      price,
      bedrooms,
      area,
      image,
      images,
      owner,
      availability,
    });
    res.status(201).json(property);
  } catch (error) {
    console.log(error);
    res.status(500).send("Oops! Something went wrong");
  }
};

// Get all properties from the DB //
const getProperties = async (req, res) => {
  try {
    const property = await Property.find({});
    res.json(property);
  } catch (error) {
    console.log(error);
    res.status(500).send("Oops! No users were found");
  }
};

// Get one property from DB by ID //
const getProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await Property.findById(id).populate("owner");
    res.json(property);
  } catch (error) {
    console.log(error);
    res.status(500).send("Oops! No users were found");
  }
};

module.exports = {
  createProperty,
  getProperties,
  getProperty,
};

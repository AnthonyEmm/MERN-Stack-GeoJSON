const express = require("express");
const {
  createProperty,
  getProperties,
  getProperty,
} = require("../controllers/properties");

const propertiesRouter = express.Router();

propertiesRouter.route("/").get(getProperties).post(createProperty);
propertiesRouter.route("/:id").get(getProperty);

module.exports = propertiesRouter;

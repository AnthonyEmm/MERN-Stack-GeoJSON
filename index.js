const express = require("express");
require("dotenv/config");
require("./db");

const usersRouter = require("./routes/users");
const propertiesRouter = require("./routes/properties");

const app = express();
const port = 4020;

app.use(express.json());

app.use("/users", usersRouter);
app.use("/properties", propertiesRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

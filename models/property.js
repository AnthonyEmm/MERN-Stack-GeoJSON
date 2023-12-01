const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  title: { type: String, unique: true, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  bedrooms: { type: Number, required: true, min: 1 },
  area: { type: Number, required: true },
  image: { type: String, required: true },
  images: { type: [String] },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  availability: {
    type: String,
    enum: ["vacant", "rented", "sold"],
    default: "vacant",
  },
  createdAt: { type: Date, default: Date.now() },
});

const Property = model("Property", userSchema);

module.exports = Property;

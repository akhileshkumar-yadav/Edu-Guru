const { Schema, model, Types } = require("../Connection");

const reviewsSchema = new Schema({
  name: String,
  comment: String,
  rating: {type : Number, default : 0},
  user: { type: Types.ObjectId, ref: 'user' },
  college: { type: Types.ObjectId, ref: 'college' },
  createdAt: { type: Date, default: Date.now }
});
module.exports = model("reviews", reviewsSchema);

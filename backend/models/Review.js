const { Schema, model, Types } = require("../connection");

const reviewsSchema = new Schema({
  comment: String,
  rating: { type: Number, default: 0 },

  // 🔧 Make sure the ref is same as user model name (usually singular: 'user')
  user: { type: Types.ObjectId, ref: 'user' },
  college: { type: Types.ObjectId, ref: 'college' },

  createdAt: { type: Date, default: Date.now }
});

module.exports = model("reviews", reviewsSchema);

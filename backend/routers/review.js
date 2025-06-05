const express = require("express");
const router = express.Router();
const Model = require("../models/Review");

// ✅ POST: Add new review
router.post("/add", (req, res) => {
  console.log(req.body);
  new Model(req.body)
    .save()
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// ✅ GET: Get all reviews
router.get("/getall", (req, res) => {
  Model.find()
    .populate('user', 'name email avatar') // populate user for all reviews
    .populate('college') // optional, if needed
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// ✅ GET: Get review by ID
router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id)
    .populate('user', 'name email avatar')
    .populate('college')
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// ✅ GET: Get reviews by user ID
router.get("/getbyuser/:userid", (req, res) => {
  Model.find({ user: req.params.userid })
    .populate('college')
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// ✅ GET: Get reviews by college with user details
router.get("/getbycollege/:id", (req, res) => {
  Model.find({ college: req.params.id })
    .populate('user', 'name email avatar')
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// ✅ GET: Get reviews by school
router.get("/getbyupBord/:id", (req, res) => {
  Model.find({ college: req.params.id })
    .populate('user', 'name email avatar')
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// ✅ GET: Get reviews by university
router.get("/getbyuniversity/:id", (req, res) => {
  Model.find({ college: req.params.id })
    .populate('user', 'email avatar name') // ✅ correct
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// ✅ GET: Get reviews by playway
router.get("/getbyplayway/:id", (req, res) => {
  Model.find({ college: req.params.id })
    .populate('user', 'name email avatar')
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// ✅ DELETE: Delete review by ID
router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// ✅ PUT: Update review by ID
router.put("/update/:id", (req, res) => {
  Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;

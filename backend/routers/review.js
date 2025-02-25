const express = require("express");
const router = express.Router();
const Model = require("../models/Review");



router.post("/add", (req, res) => {
  console.log(req.body);
  //Storing data to MongoDb
  new Model(req.body).save() //to add the data in database
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});


router.get("/getall", (req, res) => {
  Model.find()
    .then((result) => {
      res.json(result)
    }).catch((err) => {
      console.error(err)
      res.status(500).json(err)
    });
});

router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id) //param is for parameter
    .then((result) => {
      res.json(result)
    }).catch((err) => {
      console.error(err)
      res.status(500).json(err)
    });
});


router.get("/getbyemail/:email", (req, res) => {
  console.log(req.params.email)
  Model.find({ email: req.params.email })
    .then((result) => {
      res.json(result)
    }).catch((err) => {
      console.error(err)
      res.status(500).json(err)
    });
});

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json(result)

    }).catch((err) => {
      console.error(err)
      res.status(500).json(err)

    });
})

router.put("/update/:id", (req, res) => {
  Model.findByIdAndUpdate(req.params.id, req.body, { new: true })             //new:true is for data update
    .then((result) => {
      res.json(result)
    }).catch((err) => {
      console.error(err)
      res.status(500).json(err)
    });
})

router.get("/getbyuser/:userid", (req, res) => {
  Model.find({ user: req.params.userid }).populate('college')
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getbycollege/:id", (req, res) => {
  Model.find({ college: req.params.id }).populate('user')
    .then((result) => {
      res.json(result)
    }).catch((err) => {
      console.error(err)
      res.status(500).json(err)
    });
});
router.get("/getbyschool/:id", (req, res) => {
  Model.find({ college: req.params.id }).populate('user')
    .then((result) => {
      res.json(result)
    }).catch((err) => {
      console.error(err)
      res.status(500).json(err)
    });
});
router.get("/getbyuniversity/:id", (req, res) => {
  Model.find({ college: req.params.id }).populate('user')
    .then((result) => {
      res.json(result)
    }).catch((err) => {
      console.error(err)
      res.status(500).json(err)
    });
});
router.get("/getbyplayway/:id", (req, res) => {
  Model.find({ college: req.params.id }).populate('user')
    .then((result) => {
      res.json(result)
    }).catch((err) => {
      console.error(err)
      res.status(500).json(err)
    });
});



module.exports = router;
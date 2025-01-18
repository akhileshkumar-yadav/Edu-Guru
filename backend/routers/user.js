
const express = require('express')
const router = express.Router();
 const Model = require('../models/user')

 
 router.post('/add',(req,res) =>{
    console.log(req.body)
    // storing data to mongodb
    // to add the data in database
    new Model(req.body).save()
    .then((result) => {
        res.json(result)
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    });
    
})
router.get('/getall',(req,res) => {
    // empty brackets means get all data
    Model.find()
    .then((result) => {
       res.json(result) 
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    });
})
router.get('/getbyid/:id',(req,res) => {
    // empty brackets means get all data
    Model.findById(req.params.id)
    .then((result) => {
       res.json(result) 
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    });
})
router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
        .then((result) => {
            if (result) res.json(result)
            else res.status(400).json({ meassage: 'login failed' })
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        });
})




 module.exports = router;
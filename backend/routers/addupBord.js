
const express = require('express')
const router = express.Router();
 const Model = require('../models/addupBord')

 
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
router.delete('/delete/:id', (req,res) => {
    Model.findByIdAndDelete(req.params.id)
    // then c asyncronouse function hai
    .then((result) => {
        res.json(result)
    }).catch((err) => {
       console.log(err)
       res.status(500).json({ error: 'Internal Server Error'})
        
    });
})

router.put('/updateUpbord/:id',(req,res) =>{
    // new true is used to get the update
    // req.params.id to change date by id 
    // req.body jonaya data diya jaye use use kare
    Model.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json({error:'Internal Server Error'})
        
    });
})



 module.exports = router;
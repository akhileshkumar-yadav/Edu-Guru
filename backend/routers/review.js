
// const express = require('express')
// const router = express.Router();
//  const Model = require('../models/review')

 
//  router.post('/add',(req,res) =>{
//     console.log(req.body)
//     // storing data to mongodb
//     // to add the data in database
//     new Model(req.body).save()
//     .then((result) => {
//         res.json(result)
        
//     }).catch((err) => {
//         console.log(err);
//         res.status(500).json({error:'Internal server Error'});
//     });
    
// })
// router.get('/getall',(req,res) => {
//     // empty brackets means get all data
//     Model.find()
//     .then((result) => {
//        res.json(result) 
//     })
//     .catch((err) => {
//         console.log(err);
//         res.status(500).json({error:'Internal server Error'});
//     });
// })
// router.get('/getbyid/:id',(req,res) => {
//     // empty brackets means get all data
//     Model.findById(req.params.id)
//     .then((result) => {
//        res.json(result) 
//     })
//     .catch((err) => {
//         console.log(err);
//         res.status(500).json({error:'Internal server Error'});
//     });
// })
// router.get('/getbyadduniversity/:id',(req,res) => {
//     // empty brackets means get all data
//     Model.find({university: req.params.id}).populate('user')
//     .then((result) => {
//        res.json(result) 
//     })
//     .catch((err) => {
//         console.log(err);
//         res.status(500).json({error:'Internal server Error'});
//     });
// })
// router.get('/getbyaddcollege/:id',(req,res) => {
//     // empty brackets means get all data
//     Model.find({college: req.params.id}).populate('user')
//     .then((result) => {
//        res.json(result) 
//     })
//     .catch((err) => {
//         console.log(err);
//         res.status(500).json({error:'Internal server Error'});
//     });
// })
// router.get('/getbyaddschool/:id',(req,res) => {
//     // empty brackets means get all data
//     Model.find({school: req.params.id}).populate('user')
//     .then((result) => {
//        res.json(result) 
//     })
//     .catch((err) => {
//         console.log(err);
//         res.status(500).json({error:'Internal server Error'});
//     });
// })
// router.delete('/delete/:id', (req,res) => {
//     Model.findByIdAndDelete(req.params.id)
//     // then c asyncronouse function hai
//     .then((result) => {
//         res.json(result)
//     }).catch((err) => {
//        console.log(err)
//        res.status(500).json({ error: 'Internal Server Error'})
        
//     });
// })




//  module.exports = router;
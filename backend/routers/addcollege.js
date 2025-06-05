
const express = require('express')
const router = express.Router();
 const Model = require('../models/addcollege')

 
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
// router.post('/add', async (req, res) => {
//   const tempCollege = [
//      {
//     collegeName: "Birla Institute of Management Technology (BIMTECH), Greater Noida",
//     collegeAddress: "Knowledge Park II, Greater Noida, Uttar Pradesh",
//     collegeDetail: "BIMTECH offers globally recognized PGDM programs with a focus on sustainability, innovation, and       entrepreneurship.",
//     fee: 1200000,
//     email: "admissions@bimtech.ac.in",
//     phone: 1202323001,
//     image: "https://www.bimtech.ac.in/images/logo.png",
//     linkCollege: "https://www.bimtech.ac.in",
//     lat: "28.4721",
//     lng: "77.5030",
//     courses: "PGDM, PGDM (IB), PGDM (Retail), PGDM (Insurance)",
//     category: "Management",
//     Course1: "PGDM",
//     Course2: "PGDM (International Business)",
//     Course3: "PGDM (Retail Management)",
//     Course4: "PGDM (Insurance Business)",
//     Course5: "PGDM (Operations)",
//     Fee1: "₹12,00,000",
//     Fee2: "₹12,00,000",
//     Fee3: "₹12,00,000",
//     Fee4: "₹12,00,000",
//     Fee5: "₹12,00,000",
//     Eligibility1: "Bachelor’s degree with CAT/XAT/GMAT/CMAT/MAT",
//     Eligibility2: "Same as PGDM",
//     Eligibility3: "Same as PGDM",
//     Eligibility4: "Same as PGDM",
//     Eligibility5: "Same as PGDM",
//     ApplicationDate1: "2025-01-10",
//     ApplicationDate2: "2025-01-10",
//     ApplicationDate3: "2025-01-10",
//     ApplicationDate4: "2025-01-10",
//     ApplicationDate5: "2025-01-10",
//     IntroHead: "Developing Responsible Leaders",
//     IntroHead1: "Innovating for Impact",
//     intro: "BIMTECH fosters leadership through academic excellence, industry partnerships, and global outlook in its PGDM programs.",
//     introHeading: "Leading PGDM College in Greater Noida"
//   }

//     // Add other colleges here...
//   ];

//   try {
//     const result = await Model.insertMany(tempCollege);
//     res.status(201).json({ message: "Colleges added successfully", data: result });
//   } catch (error) {
//     console.error("Error inserting colleges:", error);
//     res.status(500).json({ error: "Internal server error", details: error.message });
//   }
// });

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

router.put('/updatecollege/:id',(req,res) =>{
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
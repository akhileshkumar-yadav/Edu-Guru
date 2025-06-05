
const express = require('express')
const router = express.Router();
 const Model = require('../models/addupBord')

 
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

router.post('/add', async (req, res) => {
  const tempCollege = [
   {
    "SchoolName": "Shivaji Inter College",
    "SchoolAddress": "Rajajipuram, Lucknow, Uttar Pradesh",
    "schoolDetail": "Shivaji Inter College is a UP Board affiliated institution focusing on comprehensive education with emphasis on academics, sports, and moral values.",
    "state": "Uttar Pradesh",
    "email": "contact@shivajiiclko.edu.in",
    "phone": "+91-522-4116789",
    "SchoolimageLogo": "https://example.com/shivaji_logo.jpg",
    "Gallaryimage1": "https://example.com/shivaji1.jpg",
    "Gallaryimage2": "https://example.com/shivaji2.jpg",
    "Gallaryimage3": "https://example.com/shivaji3.jpg",
    "Gallaryimage4": "https://example.com/shivaji4.jpg",
    "Gallaryimage5": "https://example.com/shivaji5.jpg",
    "parentSay1": "Shivaji Inter College has been a great place for my child to grow academically and personally. The teachers are very supportive and provide a balanced mix of academics and extracurricular activities. The school environment is disciplined and nurturing.",
    "parentName1": "Geeta Tripathi",
    "parentImage1": "https://media.istockphoto.com/id/1430450072/photo/confident-woman.jpg",
    "studentName1": "Karan Tripathi",
    "studentClass1": "9",
    "parentSay2": "My son has developed a strong foundation in studies and life skills thanks to Shivaji Inter College. The school encourages all-round development through sports, debates, and community activities. The teachers keep us well informed and engaged.",
    "parentName2": "Deepak Srivastava",
    "parentImage2": "https://media.istockphoto.com/id/1484546797/photo/smiling-man.jpg",
    "studentName2": "Raghav Srivastava",
    "studentClass2": "10",
    "parentSay3": "The disciplined atmosphere and quality teaching at Shivaji Inter College helped my daughter improve her confidence and academic performance. The school organizes regular workshops and career guidance sessions which are very useful.",
    "parentName3": "Neelam Mishra",
    "parentImage3": "https://media.istockphoto.com/id/2045213257/photo/portrait-of-woman.jpg",
    "studentName3": "Sneha Mishra",
    "studentClass3": "11",
    "parentSay4": "I am impressed with the school’s focus on ethics and personal growth alongside academics. My daughter enjoys the sports facilities and art classes, which have boosted her overall personality.",
    "parentName4": "Sushma Yadav",
    "parentImage4": "https://media.istockphoto.com/id/1566675636/photo/portrait-of-woman.jpg",
    "studentName4": "Divya Yadav",
    "studentClass4": "8",
    "district": "Lucknow",
    "head1": "Quality Education with Values",
    "head2": "Empowering Students for the Future",
    "info1": "Dedicated faculty and strong academic curriculum.",
    "info2": "Encouragement of sports, arts, and community involvement.",
    "Facilities1": "Science Lab",
    "FacilitiesImage1": "https://example.com/sciencelab_shivaji.jpg",
    "Facilities2": "Library",
    "FacilitiesImage2": "https://example.com/library_shivaji.jpg",
    "Facilities3": "Computer Lab",
    "FacilitiesImage3": "https://example.com/computerlab_shivaji.jpg",
    "Facilities4": "Sports Ground",
    "FacilitiesImage4": "https://example.com/sports_shivaji.jpg"
  }
  ];

  try {
    const result = await Model.insertMany(tempCollege);
    res.status(201).json({ message: "Colleges added successfully", data: result });
  } catch (error) {
    console.error("Error inserting colleges:", error);
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
});


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
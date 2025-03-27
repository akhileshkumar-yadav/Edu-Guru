const express = require('express');
const router = express.Router();
const Model = require('../models/user');
const bcrypt = require('bcryptjs'); // Password hashing ke liye add kiya

// Add User
router.post('/add', (req, res) => {
    console.log(req.body);
    // Password hash karo before saving
    bcrypt.hash(req.body.password, 10) // 10 is salt rounds
        .then((hashedPassword) => {
            const userData = { ...req.body, password: hashedPassword };
            new Model(userData).save()
                .then((result) => {
                    res.json(result);
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500).json({ error: 'Internal Server Error' });
                });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: 'Hashing Error' });
        });
});

// Get All Users
router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

// Get User by ID
router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

// Get User by Email
router.get('/getbyemail/:email', (req, res) => {
    Model.find({ email: req.params.email })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

// Delete User by ID
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

// Update User by ID
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

// Authenticate User (Login)
router.post('/authenticate', (req, res) => {
    const { email, password } = req.body;

    Model.findOne({ email }) // Email se user dhundo
        .then((user) => {
            if (!user) {
                return res.status(400).json({ message: 'User not found' });
            }

            // Password compare karo
            bcrypt.compare(password, user.password)
                .then((isMatch) => {
                    if (isMatch) {
                        res.json({
                            message: 'Login successful',
                            user: { id: user._id, name: user.name, email: user.email, role: user.role }
                        });
                    } else {
                        res.status(400).json({ message: 'Invalid password' });
                    }
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500).json({ error: 'Internal Server Error' });
                });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

module.exports = router;
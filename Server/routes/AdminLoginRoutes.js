const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', async (req, res) => {
    const adminUsername = req.body.adminUsername;
    const password = req.body.password;
    const pkno = req.body.pkno;
    const email = req.body.email;

    console.log (adminUsername, password, pkno, email);

    try {
        const user = await User.findOne({ adminUsername: adminUsername, password: password, pkno: pkno, email: email });

        if (user) {
            // Send a JSON response indicating successful login
            res.status(200).json({ success: true, message: 'Admin Login successful' });
        } else {
            // Send a JSON response indicating failed login
            res.status(401).json({ success: false, message: 'Admin Login failed' });
        }
    } catch (err) {
        console.error('Error during login:', err);
        // Send a JSON response indicating an error occurred during login
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;

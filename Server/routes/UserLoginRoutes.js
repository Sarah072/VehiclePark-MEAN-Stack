const express = require('express');
const router = express.Router();
const ParkUser = require('../models/ParkUser');

router.post('/', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const pkno = req.body.pkno;

    console.log(username, password, pkno);

    try {
        const user = await ParkUser.findOne({ username: username, password: password, pkno: pkno });

        if (user) {
            // Send a JSON response indicating successful login
            res.status(200).json({ success: true, message: 'Login successful' });
        } else {
            // Send a JSON response indicating failed login
            res.status(401).json({ success: false, message: 'Login failed' });
        }
    } catch (err) {
        console.error('Error during login:', err);
        // Send a JSON response indicating an error occurred during login
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const ParkUsersCollection = require('../models/ParkUser'); 

router.post('/', async (req, res) => {
  try {
    const { username, password, pkno, action } = req.body;

    if (action === 'register') {
      // Handle registration
      const newParkUser = new ParkUsersCollection({ username, password, pkno });
      await newParkUser.save();
      console.log('User registered successfully.');
      res.status(200).json({ message: 'User registered successfully.' });
      
    } else if (action === 'delete') {
      // Handle deletion
      const result = await ParkUsersCollection.deleteOne({ username, password, pkno });

      if (result.deletedCount === 1) {
        console.log('User deleted successfully.');
        res.status(200).json({ message: 'User deleted successfully.' });
      } else {
        console.log('User not found.');
        res.status(404).json({ error: 'User not found.' });
      }
    } else {
      console.log('Invalid action.');
      res.status(400).json({ error: 'Invalid action.' });
    }
  } catch (err) {
    console.error('Error handling park user:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

module.exports = router;

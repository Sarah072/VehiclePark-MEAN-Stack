const express = require('express');
const router = express.Router();
const brandsCollection = require('../models/brand');

router.get('/', async (req, res) => {
  try {
      // Fetch the brands data from the MongoDB collection
      const brandsCursor = await brandsCollection.find({});
      
      // Use toArray if available (for MongoDB driver version 4.x and above)
      const brandsData = 'toArray' in brandsCursor ? await brandsCursor.toArray() : await brandsCursor;

      // Send the brands data as JSON response
      res.json({ brands: brandsData });
  } catch (err) {
      console.error('Error fetching brands data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

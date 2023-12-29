const express = require('express');
const router = express.Router();
const brandsCollection = require('../models/brand');

router.post('/', async (req, res) => {
  const searchName = req.body.name;
  const parking = req.body.parking;

  try {
    const brandsCursor = await brandsCollection.find({ name: searchName, parking: parking });

    // Use toArray if available (for MongoDB driver version 4.x and above)
    const searchResults = 'toArray' in brandsCursor ? await brandsCursor.toArray() : await brandsCursor;

    // Send JSON response instead of rendering the template directly
    res.json({ results: searchResults });
  } catch (err) {
    console.error('Error during search:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

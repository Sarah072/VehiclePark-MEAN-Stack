const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Report = require('../models/report');
const brandsCollection = require('../models/brand');
const multer = require('multer');
const Tesseract = require('tesseract.js');
const imageFilter = function (req, file, cb) {
  // Accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};

const storage = multer.diskStorage({
destination: function (req, file, cb) {
  cb(null, 'uploads/'); 
},
filename: function (req, file, cb) {
  cb(null, file.originalname); 
},
});

const upload = multer({ storage: storage, fileFilter: imageFilter });


router.post('/', upload.single('picture'), async (req, res) => {
  
 
    try {
      console.log('Request Body:', req.body); 
        const { name, make, model, variant, action, parking } = req.body;
        const imagePath = req.file.path;
    
        if (!req.file) {
          console.error('Error: No file uploaded.');
          res.status(400).send({ error: 'No file uploaded. Please select an image to upload.' });
          return;
        }
    const { data } = await Tesseract.recognize(
        imagePath,
        'eng',
        { logger: (info) => console.log(info) }
      );
  
      // Process the extracted text
      const text = data.text || '';
  
      // Check if the text is empty
      if (!text.trim()) {
        console.error('Error: No text extracted from the image.');
        res.status(500).send({ error: 'Error processing the image. No text extracted.' });
        return;
      }
      // Process the extracted text
      console.log('Extracted Text:', text);
      const brandDetails = {
        name,
        make,
        model,
        variant,
        NumberPlate: text,
        parking: parking,
        action: action,
      };
  
      const newReport = new Report({
        type: '',
        action,
        timestamp: new Date(),
        brand: JSON.stringify(brandDetails),
        NumberPlate: text,  // Add the extracted text
        parking: parking,
      });
  
      // Save the report to the database
      await newReport.save();
  
      if (action === 'register') {
        // Handle brand registration
        const newBrand = new brandsCollection(brandDetails);
        await newBrand.save();
        console.log('Brand registered successfully.');
        res.status(200).send();
        
      } else if (action === 'delete') {
        // Handle brand deletion
        const result = await brandsCollection.deleteOne({ name, make, model, variant });
  
        if (result.deletedCount === 1) {
          console.log('Brand deleted successfully.');
          res.status(200).send();
        } else {
          console.log('Brand not found.');
        }
      } else {
        console.log('Invalid action.');
        res.status(400).send({ error: 'Invalid action.' });
        return;
      }
  
    } catch (err) {
      console.error('Error handling brand:', err);
      res.status(500).send({ error: 'Internal server error.' });
    }
  });



module.exports = router;

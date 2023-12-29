const express = require('express');
const router = express.Router();
const Report = require('../models/report');

router.get('/', async (req, res) => {
    try {
        // Fetch the reports data from the MongoDB collection
        const reportsCursor = await Report.find({});

        // Use toArray if available (for MongoDB driver version 4.x and above)
        const reportsData = 'toArray' in reportsCursor ? await reportsCursor.toArray() : await reportsCursor;

        // Separate reports into daily, weekly, and monthly arrays
        const currentDate = new Date();
      
        const dailyReports = [];
        const weeklyReports = [];
        const monthlyReports = [];

        reportsData.forEach(report => {
            const recordingDate = new Date(report.timestamp);
          
            const timeDifference = currentDate - recordingDate;
           
            const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
            console.log(daysDifference);

            if (daysDifference === 0) {
                dailyReports.push(report);
            } else if (daysDifference > 0 && daysDifference <= 7) {
                weeklyReports.push(report);
            } else if (daysDifference > 7 && daysDifference <= 30) {
                monthlyReports.push(report);
            }
        });

        // Send reports as JSON response
        res.json({
            dailyReports: dailyReports,
            weeklyReports: weeklyReports,
            monthlyReports: monthlyReports,
        });
    } catch (err) {
        console.error('Error fetching reports data:', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

module.exports = router;

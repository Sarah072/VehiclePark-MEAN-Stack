const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // Configure nodemailer to send emails (update with your email configuration)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'sarahnasir555@gmail.com',
                pass: 'egdt qvze ezeb gaqr',
            }
        });

        // Define the email options
        const mailOptions = {
            from: email,
            to: 'sarahnasir555@gmail.com',
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: 'Your message has been sent successfully!' });
    } catch (err) {
        console.error('Error sending email:', err);
        // Send a JSON response with an error message
        res.status(500).json({ success: false, message: 'An error occurred while sending your message. Please try again later.' });
    }
});


module.exports = router;

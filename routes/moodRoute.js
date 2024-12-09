const express = require('express');
const router = express.Router();
const Mood = require('../models/mood'); // Assuming the model is in a 'models' directory

// Route to display the mood tracking form
router.get('/mood', (req, res) => {
  res.render('mood'); // Render the Pug template for the form (e.g., moodForm.pug)
});

// Route to handle form submission
router.post('/submit-mood', async (req, res) => {
  try {
    const { date, mood, notes } = req.body;

    // Create a new Mood document
    const newMood = new Mood({ date, mood, notes });
    await newMood.save(); // Save to the database

    // Redirect or send a success response
    res.redirect('/moods'); // Redirect to a list of all moods
  } catch (error) {
    console.error('Error saving mood:', error);
    res.status(500).send('Server error');
  }
});

// Route to display all moods
router.get('/moods', async (req, res) => {
  try {
    const moods = await Mood.find().sort({ date: -1 }); // Fetch moods sorted by date (most recent first)
    res.render('moodList', { moods }); // Render a Pug template to display the moods
  } catch (error) {
    console.error('Error retrieving moods:', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;

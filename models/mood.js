const mongoose = require('mongoose');

// Define the schema for mood tracking
const moodSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  mood: {
    type: String,
    enum: ['happy', 'sad', 'angry', 'excited', 'anxious', 'neutral'], // Valid moods
    required: true,
  },
  notes: {
    type: String,
    trim: true, // Remove leading/trailing whitespace
  },
});

// Create the model
const Mood = mongoose.model('Mood', moodSchema);

module.exports = Mood;

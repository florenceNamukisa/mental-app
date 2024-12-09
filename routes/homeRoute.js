// Import necessary modules
const express = require('express');
const router = express.Router();

// Route to render the home page
router.get('/', (req, res) => {
  res.render('home');  // Renders the 'home.pug' file
});

module.exports = router;

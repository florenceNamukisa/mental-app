const express = require('express');
const router = express.Router();

// Route to render the login page
router.get('/contact', (req, res) => {
  res.render('contact'); // This assumes the Pug file is named 'login.pug' and located in the views folder
});

module.exports = router;

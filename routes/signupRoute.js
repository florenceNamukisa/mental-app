const express = require('express');
const router = express.Router();

// Route to render the login page
router.get('/addUser', (req, res) => {
  res.render('signup'); // This assumes the Pug file is named 'login.pug' and located in the views folder
});

module.exports = router;
const express = require('express');
const router = express.Router();

// Route to render the login page
router.get('/meditation', (req, res) => {
  res.render('meditation'); // This assumes the Pug file is named 'login.pug' and located in the views folder
});

module.exports = router;

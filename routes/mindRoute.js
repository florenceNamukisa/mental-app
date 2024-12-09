const express = require('express');
const router = express.Router();

// Route to render the login page
router.get('/mind', (req, res) => {
  res.render('mind'); // This assumes the Pug file is named 'login.pug' and located in the views folder
});

module.exports = router;

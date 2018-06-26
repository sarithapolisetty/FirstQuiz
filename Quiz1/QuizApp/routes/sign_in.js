const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('sign_in');
});
router.post('/', (request, response) => {
  const username = request.body.username;
  if (userName) {
    response.cookie('username', username);
    response.redirect('/');
  } 
});

module.exports = router;

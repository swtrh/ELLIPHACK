var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('store', { title: 'Store', baseURL: process.env.base_url});
});

router.route('/message').post(function(req, res, next) {
      console.log('Retrieving message' + req.body.message)
      res.send('Message was '+req.body.message);
});


module.exports = router;

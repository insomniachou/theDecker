var express = require('express');
var router = express.Router();

router.get('/', function(_, res) {
  res.json({ title: 'Express' });
});

module.exports = router;

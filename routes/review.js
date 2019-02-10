var express = require('express');
var router = express.Router();

/* Review List Router. */
router.get('/', function (req, res, next) {
    res.render('review_list.pug');
});

module.exports = router;

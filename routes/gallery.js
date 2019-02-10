var express = require('express');
var router = express.Router();

/* Gallery List Router. */
router.get('/', function (req, res, next) {
    res.render('gallery_list.pug');
});


module.exports = router;

var express = require('express');
var router = express.Router();

/* Products  List Router. */
router.get('/', function (req, res, next) {
    res.render('products_list.pug');
});

/* Products Detail  List Router. */
router.get('/id=:id', function (req, res, next) {
    res.render('products_detail.pug');
});

module.exports = router;

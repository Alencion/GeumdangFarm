var express = require('express');
var router = express.Router();

/* Products List Router. */
router.get('/', function (req, res, next) {
    res.render('Products/products_list.pug');
});

/* Products Detail List Router. */
router.get('/detail', function (req, res, next){

    res.render('Products/products_detail.pug');
    console.log(req);
});

module.exports = router;

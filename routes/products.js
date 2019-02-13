var express = require('express');
var router = express.Router();
var db = require('../config/db_config');
var query = require('../queries/Products/products');

/* Products List Router. */
router.get('/', function (req, res, next) {
    var connect = db.connect;
    connect.query(query.inqrTotalProducts,[1,10], function (err, results) {
        console.log(results);
    });
    res.render('Products/products_list.pug');
});

/* Products Detail List Router. */
router.get('/detail', function(req, res, next){
    res.render('Products/products_detail.pug');
});

module.exports = router;

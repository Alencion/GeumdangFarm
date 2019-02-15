var express = require('express');
var router = express.Router();
var db = require('../config/db_config');
var query = require('../queries/Products/products');
var connect = db.connect;
/* Products List Router. */
router.get('/', function (req, res, next) {
    res.render('Products/products_list.pug',{
        page: req.query.page
    });
});
router.get('/paging', function (req, res, next) {
    connect.query(query.inqrProductCount, function (err, result) {
        res.send({result:result});
    });
});
router.get('/list', function (req, res, next) {
    var page = req.query.data;
    connect.query(query.inqrTotalProducts, [(page-1)*10, (page-1)*10, 10] , function (err, result) {
        res.send({result:result[1]});
    });
});

/* Products Detail List Router. */
router.get('/detail', function(req, res, next){
    connect.query(query.inqrProductDetail, [req.query.id], function (err, result) {
        res.render('Products/products_detail.pug',{
            ITEM_NAME : result[0].ITEM_NAME,
            ITEM_DESC : result[0].ITEM_DESC,
            ITEM_PRICE : result[0].ITEM_PRICE,
            SELL_UNIT : result[0].SELL_UNIT,
            ITEM_WEIGHT : result[0].ITEM_WEIGHT,
            DELIVER_TYPE : result[0].DELIVER_TYPE
        });
    })
});

module.exports = router;

var express = require('express');
var router = express.Router();
var db = require('../config/db_config');
var connect = db.connect;

var nineBatis = require('../lib/nineBatis');
var path = require('path');

nineBatis.loadQuery( path.resolve("./queries/Products"), true);

/* Products List Router. */
router.get('/', function (req, res, next) {
    res.render('Products/products_list.pug',{
        page: req.query.page
    });
});
router.get('/paging', function (req, res, next) {
    var query = nineBatis.getQuery('inqrProductCount');
    connect.query(query, function (err, result) {
        res.send({result:result});
    });
});
router.get('/list', function (req, res, next) {
    var page = req.query.page;
    var query = nineBatis.getQuery('inqrTotalProducts',{start:(page-1)*10, offset: (page-1)*10, limit:10});
    connect.query(query, function (err, result) {
        res.send({result:result[1]});
    });
});

/* Products Detail List Router. */
router.get('/detail', function(req, res, next){
    var query = nineBatis.getQuery('inqrProductDetail',{item_id: req.query.id});
    connect.query(query, function (err, result) {
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

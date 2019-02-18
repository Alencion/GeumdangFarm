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
router.get('/list', function (req, res, next) {
    var page = req.query.page;
    var query = nineBatis.getQuery('inqrTotalProducts',{start:(page-1)*10, limit:10});
    connect.query(query, function (err, result) {
        res.send({result:result[1]});
    });
});

/* Products Detail List Router. */
router.get('/detail', function(req, res, next){
    res.render('Products/products_detail.pug', {
        item_id: req.query.id,
        review : req.query.review,
        customer : req.query.customer,
    });
});
router.get('/productDetail', function(req, res, next){
    var query = nineBatis.getQuery('inqrProductDetail',
        {item_id: req.query.item_id, review_rownum: 0 , customer_rownum: 0});
    connect.query(query, function (err, result) {
        console.log(result);
        res.send({result:result});
    });
});


module.exports = router;

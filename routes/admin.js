var express = require('express');
var router = express.Router();
var path = require('path');

var nineBatis = require('../lib/nineBatis');

nineBatis.loadQuery( path.resolve("./queries/Admin"), true);

/* Admin OrderStatus Router. */
router.get('/orderStatus', function (req, res, next) {
    res.render('Admin/orderStatus.pug',{page:req.query.page});
});
router.get('/getOrderList', function (req, res, next) {
    var connect = config.connect;
    var page = req.query.page;
    var query = nineBatis.getQuery('inqrOrderStatusList',{start:(page-1)*10});
    connect.query(query, function (err, result) {
        res.send(result[1]);
    });
});
router.post('/orderStatus', function (req, res, next) {
    res.send('Admin OrderStatus Post Page 이다.');
});

/* Admin PhotoSlider Router. */
router.get('/photoSlider', function (req, res, next) {
    res.render('Admin/photoSlider.pug');
});
router.post('/photoSlider', function (req, res, next) {
    res.send('Admin PhotoSlider Post Page 이다.');
});

/* Admin Product Router. */
router.get('/product', function (req, res, next) {
    res.render('Admin/product.pug');
});
router.post('/product', function (req, res, next) {
    res.send('Admin Product Post Page 이다.');
});

/* Admin Product New Router. */
router.get('/product/new', function (req, res, next) {
    res.render('Admin/product_new.pug');
});
router.post('/product/new', function (req, res, next) {
    res.send('Admin Product NEW Post Page 이다.');
});


module.exports = router;

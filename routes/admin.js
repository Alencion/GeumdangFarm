var express = require('express');
var router = express.Router();

/* Admin OrderStatus Router. */
router.get('/orderStatus', function (req, res, next) {
    res.render('Admin/orderStatus.pug');
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

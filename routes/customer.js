var express = require('express');
var router  = express.Router();
var config = require('../config/db_config');
// var query = require('../queries/Customer/customer');

var nineBatis = require('../lib/nineBatis');
var path      = require('path');

nineBatis.loadQuery(path.resolve('./queries/Customer'), true);

/* Customer Notice List Router. */
router.get('/notice', function (req, res, next) {
    // console.log(req);
    res.render('Customer/notice_list.pug', {
        pagenumber: req.query.page
    });
});

router.get('/notice/inqrNoticeAll', (req, res, next) => {

    var page = req.query.page;
    var connect = config.connect;
    var sql    = nineBatis.getQuery('inqrTotalNotice', {start: (page-1)*10, limit: 10});

    connect.query(sql, (err, rows, fields) => {
        if (err) next(err);

        console.log("Result : " + JSON.stringify(rows[1]));
        var result = {'notice' : rows[1]}
        res.send(result);
    });
});

/* Customer Notice NEW Router. */
router.get('/notice/new', function (req, res, next) {
    console.log(query.inqrTotalNotice);
    res.render('Customer/notice_new.pug');
});
router.post('/notice/upload', function (req, res, next) {

});

/* Customer QnA List Router. */
router.get('/qna', function (req, res, next) {
    res.render('Customer/qna_list.pug');
});

/* Customer QnA NEW Router. */
router.get('/qna/new', function (req, res, next) {
    res.render('Customer/qna_new.pug');
});
router.post('/qna/new', function (req, res, next) {
    res.send('Customer QnA NEW Post Page 이다.');
});


module.exports = router;

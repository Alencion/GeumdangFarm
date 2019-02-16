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

router.get('/notice/inqrNoticeAll', async(req, res, next) => {
    var page = req.query.page;
    var connect = config.createConnecion();
    // var sql = query.inqrTotalNotice;
    // var params = [(page-1)*10, 10];
    // var result = null;

    // connect.query(sql, params,async (err, rows, fields) => {
    //     if (err) throw err;
    //
    //     result = rows;
    // });

    console.log("Result : " + result);
    return result;
});

/* Customer Notice NEW Router. */
router.get('/notice/new', function (req, res, next) {
    res.render('Customer/notice_new.pug');
});
router.post('/notice/new', function (req, res, next) {
    res.send('Customer Notice NEW Post Page 이다.');
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

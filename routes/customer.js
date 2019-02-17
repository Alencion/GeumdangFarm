var express    = require('express');
var router     = express.Router();

var nineBatis  = require('../lib/nineBatis');
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

        console.log("Result : " + JSON.stringify(rows));
        var result = {'notice' : rows}
        res.send(result);
    });
});

router.get('/notice/detail', function (req, res, next) {
    res.render('Customer/notice_detail.pug', {
        noticeId: req.query.noticeId
    });
});

router.post('/notice/inqrDetail', function (req, res, next) {
    var noticeId = req.body.noticeId.trim();
    var connect = config.connect;
    var sql      = nineBatis.getQuery('inqrNoticeDetail', {noticeId: noticeId});

    try {
        connect.query(sql, function (err, rows){
            if (err) next(err);

            console.log("Result : " + JSON.stringify(rows));
            var rst = {'result' : true, 'detail' : rows[0]}
            res.send(rst);
        });
    }catch (e) {
        var rst = {'result' : false}
        res.send(rst);
    }
});

/* Customer Notice NEW Router. */
router.get('/notice/new', function (req, res, next) {
    res.render('Customer/notice_new.pug');
});
router.post('/notice/upload', function (req, res, next) {
    var params = {}
    params.user    = '관리자';
    params.title   = req.body.title.trim();
    params.content = req.body.content.trim();
    var sql = nineBatis.getQuery('rgstNewNotice', params);

    var rst;
    var connect = config.connect;

    try {
        connect.query(sql, function (err, rows){
            if (err) next(err);

            console.log("Executied Query : " + this.sql);
            rst = {'result' : true}
            res.send(rst);
        });
    }catch (e) {
        rst = {'result' : false}
        res.send(rst);
    }

    // res.send(rst);
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

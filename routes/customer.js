var express = require('express');
var router = express.Router();

/* Customer Notice List Router. */
router.get('/notice', function (req, res, next) {
    res.render('notice_list.pug');
});

/* Customer Notice NEW Router. */
router.get('/notice/new', function (req, res, next) {
    res.render('notice_new.pug');
});
router.post('/notice/new', function (req, res, next) {
    res.send('Customer Notice NEW Post Page 이다.');
});

/* Customer QnA List Router. */
router.get('/qna', function (req, res, next) {
    res.render('qna_list.pug');
});

/* Customer QnA NEW Router. */
router.get('/qna/new', function (req, res, next) {
    res.render('qna_new.pug');
});
router.post('/qna/new', function (req, res, next) {
    res.send('Customer QnA NEW Post Page 이다.');
});


module.exports = router;

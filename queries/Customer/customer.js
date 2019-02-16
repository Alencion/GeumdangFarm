/* 공지사항 메인 */

//n번째 페이지에서 보일 공지사항
// exports.inqrTotalNotice = 'SET @rownum:=?;' +
//                            'SELECT @rownum:=@rownum+1 ROWNUM' +
//                                 ', NTCE.NOTICE_ID' +
//                                 ', date_format(NTCE.REGIST_DATE, '%Y-%m-%d') REGIST_DATE'
//                                 , NTCE.WRITER
//                                 , NTCE.NOTICE_TITLE
//                                 , NTCE.NOTICE_CONTENT
//                              FROM NOTICE NTCE
//                             ORDER BY REGIST_DATE DESC
//                             LIMIT ?`;
/* 공지사항 등록 */

/*새로운 공지 저장*/
// exports.inqrTotalNotice = `INSERT INTO NOTICE(REGIST_DATE, WRITER, NOTICE_TITLE, NOTICE_CONTENT)
//                            VALUES ()`;




exports.inqrTotalNotice = 'SET @    ROWNUM:=?' +
    'SELECT @rownum:=@rownum+1 ROWNUM ' +
    ', NTCE.NOTICE_ID ' +
    ', date_format(NTCE.REGIST_DATE, \'%Y-%m-%d\') REGIST_DATE ' +
    ', NTCE.WRITER ' +
    ', NTCE.NOTICE_TITLE ' +
    ', NTCE.NOTICE_CONTENT ' +
    'FROM NOTICE NTCE ' +
    'ORDER BY REGIST_DATE DESC ' +
    'LIMIT ?'
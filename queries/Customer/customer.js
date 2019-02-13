module.exports = {
    /*n번째 페이지에서 보일 공지사항*/
    inqrTotalNotice: 'SET @rownum:=?;'
                + 'SELECT @rownum:=@rownum+1 ROWNUM, NTCE.* '
                +   'FROM NOTICE NTCE '
                +  'ORDER BY REGIST_DATE DESC '
                +  'LIMIT ?;'
}
module.exports = {
    /* 상품 페이지의 상품 가져오는 쿼리 */
    inqrTotalProducts: 'SET @rownum:=?;'
        + 'SELECT @rownum:=@rownum+1 ROWNUM, PRDCT.* '
        +   'FROM ITEM_LIST PRDCT '
        +  'ORDER BY REGIST_DATE DESC '
        +  'LIMIT ?;'
}
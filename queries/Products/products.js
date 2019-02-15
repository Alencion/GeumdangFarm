module.exports = {
    /* 상품 페이지의 상품 가져오는 쿼리 */
    inqrTotalProducts: 'SET @rownum:=?;'
        + 'SELECT @rownum:=@rownum+1 ROWNUM, PRDCT.* '
        +   'FROM ITEM_LIST PRDCT '
        +  'ORDER BY REGIST_DATE DESC '
        +  'LIMIT ?,?;'
    ,
    /* 상품 페이지의 총 상품 수를 가져오는 쿼리 */
    inqrProductCount: `SELECT COUNT(ITEM_ID)`
    + `AS COUNT FROM ITEM_LIST ;`
    ,
    /* 상품 상세 페이지의 상품을 가져오는 쿼리 */
    inqrProductDetail: `SELECT * `
        + `FROM ITEM_LIST `
        + `WHERE ITEM_ID = ?;`
};
var review= null;
var customer= null;

var reviewCount= null;
var customerCount= null;

var reviewPage= null;
var customerPage= null;
var item_id = null;

function paging(){
    var reviewPageHTML = "";
    var customerPageHTML = "";
    for (var index = 1; index <= reviewCount; index++){
        reviewPageHTML += "<li><button onclick=\"getReviewList("+index+")\" value=\""+index+"\">"+index+"</button></li>"
    }
    for (var index = 1; index <= customerCount; index++){
        customerPageHTML += "<li><button onclick=\"getcustomerList("+index+")\" value=\""+index+"\">"+index+"</button></li>"
    }
    $('.reviewPaging').html(reviewPageHTML);
    $('.customerPaging').html(customerPageHTML);
}
function getProductDetail(item_id){
    var productList = ajax.requestGET('/products/productDetail',{item_id: item_id}).result;
    var productDetail = productList[0][0];
    review = productList[1];
    customer = productList[2];
    reviewCount = review[0].TOTAL_PAGE;
    customerCount = customer[0].TOTAL_PAGE;
    //상품 요약 설정
    $('#products-summary-wrapper img').attr("src", productDetail.ITEM_PHOTO);
    $('#products-summary-wrapper .name').text(productDetail.ITEM_NAME);
    $('#products-summary-wrapper .desc').text(productDetail.ITEM_DESC);
    $('#products-summary-wrapper .price').text(productDetail.ITEM_PRICE);
    $('#products-summary-wrapper .sell-unit').text(productDetail.SELL_UNIT);
    $('#products-summary-wrapper .weight').text(productDetail.ITEM_WEIGHT);
    $('#products-summary-wrapper .deliver').text(productDetail.DELIVER_TYPE);
    // 상품 설명 넣기
    $('#products-detail-section .desc').html(productDetail.DETAIL);
    this.item_id = item_id;
}
function getReviewList(param) {
    var reviewPageHTML = "";
    var index = (param-1)*10;
    var value = null;
    for(var i = index; i < index + 10 && i < review[0].TOTALCOUNT; i++){
        value = review[i];

        reviewPageHTML += "" +
            "<tr>\n" +
            "     <td>"+value.ROWNUM+"</td>\n" +
            "     <td class = \"title\">\n" +
            "           <a (href=\"#\")>"+value.REVIEW_TITLE+"</a>\n" +
            "     </td>\n" +
            "     <td>"+value.SATISFACTION+"</td>\n" +
            "     <td>"+value.CLICK_NUM+"</td>\n" +
            "     <td>"+value.WRITER+"</td>\n" +
            "     <td>"+value.REGIST_DATE+"</td>\n" +
            "</tr>";
    };
    $(' #products-detail-section .review-list').html(reviewPageHTML);
    // 페이지 리로딩 하지않고 url 바꾸는 코드
    reviewPage = param;
    $('.reviewPaging button').removeClass('active');
    $('.reviewPaging button[value='+reviewPage+']').addClass('active');
    pageReload();
}
function getcustomerList(param) {
    var customerPageHTML = "";
    var index = (param-1)*10;
    var value = null;
    for(var i = index; i < index + 10 && i < customer[0].TOTALCOUNT; i++){
        value = customer[i];
        console.log(value);
        customerPageHTML += "" +
            "<tr>\n" +
            "     <td>"+value.ROWNUM+"</td>\n" +
            "     <td>"+value.QUES_TYPE+"</td>\n" +
            "     <td class = \"title\">\n" +
            "           <a (href=\"#\")>"+value.QUES_TITLE+"</a>\n" +
            "     </td>\n" +
            "     <td>"+value.CLICK_NUM+"</td>\n" +
            "     <td>"+value.WRITER+"</td>\n" +
            "     <td>"+value.REGIST_DATE+"</td>\n" +
            "</tr>"
    };
    $(' #products-detail-section .customer-list').html(customerPageHTML);

    customerPage = param;
    $('.customerPaging button').removeClass('active');
    $('.customerPaging button[value='+customerPage+']').addClass('active');
    pageReload();
}
function pageReload(){
    history.pushState(item_id, null, "/products/detail?id="+item_id+"&review="+reviewPage+"&customer="+customerPage);
}
$(function(){
    $('#reviewPagination .first-paging-button').click(
        function (){
            getReviewList(1);
        }
    );
    $('#reviewPagination .last-paging-button').click(
        function (){
            getReviewList(reviewCount);
        }
    );
    $('#reviewPagination .prev-paging-button').click(
        function (){
            if(reviewPage >1){
                getReviewList(reviewPage - 1);
            }
        }
    );
    $('#reviewPagination .next-paging-button').click(
        function (){
            if(reviewPage < reviewCount){
                getReviewList(reviewPage + 1);
            }

        }
    );
    $('#customerPagination .first-paging-button').click(
        function (){
            getcustomerList(1);
        }
    );
    $('#customerPagination .last-paging-button').click(
        function (){
            getcustomerList(customerCount);
        }
    );
    $('#customerPagination .prev-paging-button').click(
        function (){
            if(customerPage >1){
                getcustomerList(customerPage - 1);
            }
        }
    );
    $('#customerPagination .next-paging-button').click(
        function (){
            if(customerPage < customerCount){
                getcustomerList(customerPage + 1);
            }

        }
    );
});

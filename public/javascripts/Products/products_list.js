var count = null;
// 페이징 버튼들 위한 page 변수
var page = null;

/*pagination 생성 코드*/
function paging(param){
    var pageHTML = "";
    for (var index = 1; index <= count; index++){
        pageHTML += "<li><button onclick=\"getProduct("+index+")\" value=\""+index+"\">"+index+"</button></li>"
    }
    $('.paging').html(pageHTML);
    $('button[value='+param+']').addClass('active');
}
/* page값에 따른 Products 가져오는 함수 */
function getProduct(param){
    var productList = ajax.requestGET('/products/list',{page: param}).result;
    count = productList[0].TOTAL_PAGE;
    var pageHTML = "";
    $.each(productList, function ( index, value) {
        pageHTML += "<li>\n" +
            "<div class=\"products_item\">\n" +
            "<div class=\"thumb\"><a href=\"/products/detail?id="+value.ITEM_ID+
            "&review=1&customer=1\"><img src=\""+value.ITEM_PHOTO+
            "\"/></a></div><a class=\"info\" href=\"/products/detail?id="+value.ITEM_ID+
            "&review=1&customer=1\"><span class=\"name\">"+value.ITEM_NAME+
            "</span><span class=\"cost\">"+value.ITEM_PRICE+
            "</span><span class=\"desc\">"+value.ITEM_DESC+"</span></a>\n" +
            "<div class=\"tag\"></div>\n" +
            "</div>\n" +
            "</li>";
    });
    $(' #productsList .list').html(pageHTML);
    // 페이지 리로딩 하지않고 url 바꾸는 코드
    history.pushState(param, null, "/products?page="+param);
    $('button').removeClass('active');
    $('button[value='+param+']').addClass('active');
    fnMove("#page-info");
    page = param;
}
/* paging 버튼 클릭시 getProduct 함수 호출 이벤트*/
$(function(){
    $('.first-paging-button').click(
        function (){
            getProduct(1);
        }
    );
    $('.last-paging-button').click(
        function (){
            getProduct(count);
        }
    );
    $('.prev-paging-button').click(
        function (){
            if(page >1){
                getProduct(page - 1);
            }
        }
    );
    $('.next-paging-button').click(
        function (){
            if(page < count){
                getProduct(page + 1);
            }

        }
    );
});

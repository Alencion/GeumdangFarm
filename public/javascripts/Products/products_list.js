var count = null;
var page = null;
/*pagination 생성 코드*/
function paging(param){
    count = parseInt((ajax.request('/products/paging',param).result[0].COUNT)/10)+1;
    var pageHTML = "";
    for (var index = 1; index <= count; index++){
        pageHTML += "<li><button onclick=\"getProduct("+index+")\" value=\""+index+"\">"+index+"</button></li>"
    }
    $('.paging').html(pageHTML);
}
/* page값에 따른 Products 가져오는 함수 */
function getProduct(param){
    var productList = ajax.request('/products/list',param).result;
    var pageHTML = "";
    $.each(productList, function ( index, value) {
        console.log(value);
        pageHTML += "<li>\n" +
            "<div class=\"products_item\">\n" +
            "<div class=\"thumb\"><a href=\"/products/detail?id="+value.ITEM_ID+
            "\"><img src=\""+value.ITEM_PHOTO+
            "\"/></a></div><a class=\"info\" href=\"/products/detail?id="+value.ITEM_ID+
            "\"><span class=\"name\">"+value.ITEM_NAME+
            "</span><span class=\"cost\">"+value.ITEM_PRICE+
            "</span><span class=\"desc\">"+value.ITEM_DESC+"</span></a>\n" +
            "<div class=\"tag\"></div>\n" +
            "</div>\n" +
            "</li>";
    });
    $(' #productsList .list').html(pageHTML);
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

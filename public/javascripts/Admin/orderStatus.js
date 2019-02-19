var count = null;
// 페이징 버튼들 위한 page 변수
var Page = null;

function paging(page){
    var pageHTML = "";
    for (var index = 1; index <= count; index++){
        pageHTML += "<li><button onclick=\"orderStatusList("+index+")\" value=\""+index+"\">"+index+"</button></li>"
    }
    $('.paging').html(pageHTML);
    console.log(pageHTML);
    $('button[value='+page+']').addClass('active');
}
function orderStatusList(page) {
    var list = ajax.requestGET('/admin/getOrderList',
        {page:page});
    count = list[0].TOTAL_PAGE;
    var pageHTML = "";
    $.each(list, function ( index, value) {
        pageHTML += "\n" +
            "<tr>\n" +
            "    <td class=\"no\">"+value.ROWNUM+"</td>\n" +
            "    <td class=\"image\"><img src=\""+value.ITEM_PHOTO+"\" /></td>\n" +
            "    <td class=\"name\">"+value.ITEM_NAME+"</td>\n" +
            "    <td class=\"cus-name\">"+value.ORDER_CT_NAME+"</td>\n" +
            "    <td class=\"cus-phone\">"+value.ORDER_CT_PHONE+"</td>\n" +
            "    <td class=\"amount\">"+value.ORDER_AMOUNT+"</td>\n" +
            "    <td class=\"total-price\">"+value.ITEM_PRICE+"</td>\n" +
            "    <td class=\"register-date\">"+value.ORDER_DATE+"</td>\n" +
            "    <td class=\"deposit\"><button onclick=''>"+value.DEPOSIT_STATUS+"</button></td>\n" +
            "</tr>"
    });
    console.log(pageHTML);
    $('.orderList').html(pageHTML);
    history.pushState(page, null, "/admin/orderStatus?page="+page);
    $('button').removeClass('active');
    $('button[value='+page+']').addClass('active');
    Page = page;
}

$(function(){
    $('.first-paging-button').click(
        function (){
            orderStatusList(1);
        }
    );
    $('.last-paging-button').click(
        function (){
            orderStatusList(count);
        }
    );
    $('.prev-paging-button').click(
        function (){
            if(Page >1){
                orderStatusList(Page - 1);
            }
        }
    );
    $('.next-paging-button').click(
        function (){
            if(Page < count){
                orderStatusList(Page + 1);
            }

        }
    );
});

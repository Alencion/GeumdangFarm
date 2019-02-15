function fnMove(String){
    var offset = $(String).offset();
    $('html, body').animate({scrollTop : offset.top}, 400);
}
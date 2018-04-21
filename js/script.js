$(document).ready(function(){
    $("#menu").click(function(){
        $(".green").css("width", "80%");
        $(".back").show();
    });
    $(".back").click(function(){
        $(".green").css("width", "0%");
        $(".back").hide();
    });
});
function windowSize(){
    if ($(window).width() >= '752'){
        $(".green").css("width", "10%");
        $(".back").hide();
    } else {
        $(".green").css("width", "0%");
        $(".back").hide();
    }
}
$(window).on('load resize',windowSize);
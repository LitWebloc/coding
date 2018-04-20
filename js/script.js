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
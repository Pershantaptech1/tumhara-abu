$(document).ready(function () {
    $('.hidden').slideDown(3000);

});
$('.bg0').mouseenter(function(){
    $('.child1').css({"transform":"scale(1.7)","border":"5px solid black","transtion":"1s"})
});
$('.bg0').mouseleave(function(){
    $('.child1').css({"transform":"scale(0)","border":"0px solid black","transtion":"s"})
});




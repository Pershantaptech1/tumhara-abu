$(document).ready(function(){
    $(".hidden").slideDown(3000);
     $(".btn1").mouseenter(function(){
        $(".btn1").css({"background-color":"DarkRed","font-family":"Arial Black","font-size":"20px"})
     }) 
     $(".btn1").mouseleave(function(){
        $(".btn1").css({"background-color":"MistyRose"})
     }) 
    $(".main").mouseenter(function(){
      $(".subdiv").css({"transform":"scale(1.7)","border":"5px solid Snow",
      "hieght":"60px","width":"150px","transition":"1s"
   })
    })
    $(".main").mouseleave(function(){
      $(".subdiv").css({"transform":"scale(0)","border":"5px solid gray",
      "hieght":"60px","width":"150px","transition":"1s"
   })
    })
})
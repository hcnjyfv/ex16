$(".clickBox").click(function() {  
    $(".clickBox").text("谢谢您单击我！");
    $(".clickBox").css("background-color","green");   
 });

 $(".dblClickBox").dblclick(function() {  
  $(".dblClickBox").text("谢谢您双击我！");
  $(".dblClickBox").css("background-color","blue");
 });

 $(".hoverBox").hover(function() {  
  $(".hoverBox").text("谢谢您在我身上徘徊！");
  $(".hoverBox").css("background-color","yellow"); 
 });

 $(".mouseOnBox").mouseenter(function() {  
  $(".mouseOnBox").text("谢谢您的光临！");
  $(".mouseOnBox").css("background-color","white");  
 });

 $(".mouseOnBox").mouseleave(function() {  
    $(".mouseOnBox").text("很快再来!");
    $(".mouseOnBox").css("background-color","red");  
   });
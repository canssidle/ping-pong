//backend

function getPingPongArray(inputNum){
 var PingPongArray=[];
 for (var i=0; i<inputNum; i +1){
   if(i%15===0){
     PingPongArray.push('pingpong');
   }
   
   else if(i%3===0){
     PingPongArray.push('ping');
   }
   
   else if(i%5===0){
     PingPongArray.push('pong');
   }
   
   else{
     PingPongArray.push(i);
   }
 }
 return PingPongArray
}

//front end
$(document).ready(function(){
 $("form#pingpong").submit(function(event){  
   event.preventDefault();
   var inputNum=parseInt($("input#num").val());
   var PingPongArray=getPingPongArray(inputNum);
   $("ul#pingponglist").empty();
   PingPongArray.forEach(function(item){
     $("ul#pingponglist").append("<li>"+item+"</li>");
   )};
 )};
)};
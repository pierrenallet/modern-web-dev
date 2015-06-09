$("div")
.css("background", "red");
$(".myClass")
.css("background", "blue");
$("span.myClass")
.css("background", "pink");
$("div span")
.css("background", "yellow");

$("#id1")
.css("background", "green");

$(".c1.c2");

//vs.

$(".c1 .c2");

$("div.outer .inner").css("background", "orange");
$("div.outer > .inner").css("background", "orange");

$("div").on("click", function(e){
	e.target.innerText = "you clicked me";
});
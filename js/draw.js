var $userText;
var drawColor;

//Establish canvas
var canvas = new fabric.Canvas("poetry-canvas", {
		isDrawingMode: true,
		height: 480,
		width: 360
  });

canvas.freeDrawingBrush.width = 15;

function displayPoem(userText, topPosition) {
	var printText = new fabric.Textbox(userText, {  
		width: 330,
		height: 460,
		top: 20,
		left: 15,
		fontFamily: "Merriweather",
		fontSize: 16,
		textAlign: "left"
	});
	
	canvas.add(printText);
}

//Allow user to add text to canvas
$("#submit-button").click(function(){
	canvas.clear().renderAll();
	$("input").removeAttr("checked");
	$(".poem").hide();
	
	$("#create-new-poem").html("Create new found poem");
	$("#save-canvas-button").show();
	$("label").removeClass("selected-title");

	//Put value of textarea into canvas
  $userText = $("#input-text").val();
	$("#input-text").val("");
	displayPoem($userText, 30)
});


//Color selection
$(".controls").on("click", "li", function(){
  //Deselect sibling elements
	$(this).siblings().removeClass("selected-color");
  //Select clicked element
  $(this).addClass("selected-color");
  drawColor = $(".selected-color").css("background-color");
	//Set draw color
	canvas.freeDrawingBrush.color = drawColor;
});

//Save image
$("#save-canvas-button").click(function(){
    if(!window.localStorage){alert("This function is not supported by your browser."); return;}
    // to PNG
    window.open(canvas.toDataURL('png'));
});



//Poetry
$(document).ready(function() {
	var poemId = [];
	
	$("p.poem").each(function() {
		var getId = $(this).attr("id");
		poemId.push(getId)
	});
	
	var randomNumber = Math.floor(Math.random() * poemId.length);
	var showPoem = poemId[randomNumber];
	var input = "input[value='" + showPoem + "']";
	
	$(".selected-title .credit").hide();
//	$(".selected-title").removeClass("selected-title");
	$(input).attr("checked", "checked");
	$(input).next().addClass("selected-title");
	$(".selected-title .credit").show();
	$("#" + showPoem).show();
	$("#" + showPoem + "-title").show();
});


$("input[type=radio]").click(function () {
	var poem = "#" + this.value;	
	var title = "#" + this.value + "-title";
	
	canvas.clear().renderAll();
	
	$("#create-new-poem").html("Create your own blackout/erasure poetry");
	$("#save-canvas-button").css("display", "none");

	$(".selected-title .credit").hide();
	$(this).siblings().removeClass("selected-title");
	$(".poem").hide();
	$(this).next().addClass("selected-title");
	$(".selected-title .credit").show();
	
	$(title).show();
	$(poem).show();
});








var $userText;
var drawColor;

//Establish canvas
var canvas = new fabric.Canvas("poetry-canvas", {
		isDrawingMode: true,
		height: 480,
		width: 320
  });

canvas.freeDrawingBrush.width = 15;

function displayPoem (userText) {
	var printText = new fabric.Text(userText, {  
		top: 10,
		fontSize: 16,
		fontFamily: "Merriweather"
	});
	
	canvas.add(printText);
	
	//Hide form, show "new" button
	$("#form").hide();
	$("#poetry-canvas").css("display", "block");
	$("#new-canvas-button").css("display", "block");
	$("#save-canvas-button").css("display", "block");
	$(".controls").css("display", "block");
}

//Allow user to add text to canvas
$("#submit-button").click(function(){
	$("#poetry-input").hide();
	//Put value of textarea into paragraph
  $userText = $("#input-text").val();
	displayPoem($userText)
});

//Color selection
$(".controls").on("click", "li", function(){
  //Deselect sibling elements
	$(this).siblings().removeClass("selected-color");
  //Select clicked element
  $(this).addClass("selected-color")
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

//Clear fields to allow new text. Also clear canvas.
$("#new-canvas-button").click(function(){
		canvas.clear().renderAll();
		$("#poetry-input").show();
		$("#input-text").val("");
		$("#new-canvas-button").hide();
		$("#save-canvas-button").hide();
	});


//Poetry
$(document).ready(function() {
	var poemId = [
		"ashes-ashes",
		"drinking-hole",
		"body-washer"
	];
	
	var randomNumber = Math.floor(Math.random() * poemId.length);
	var showPoem = poemId[randomNumber];
	var input = "input[value='" + showPoem + "']";
	
	$(input).attr("checked", "checked");
	$(input).next().addClass("selected-title")
	$("#" + showPoem).show();
	$("#" + showPoem + "-title").show();
});


$("input[type=radio]").click(function () {
	var poem = "#" + this.value;	
	var title = "#" + this.value + "-title";
	
	//Clears textarea
	$("#input-text").val("");
	
	$(this).siblings().removeClass("selected-title");
	$(".poem").hide();
	$(this).next().addClass("selected-title");
	
	if (poem === "#create") {
		$("#poetry-input").show(); //.css("display", "block");
		//$("#submit-button").show();
	} else {	
		$(title).show();
		$(poem).show();
	}
	canvas.clear().renderAll();
});





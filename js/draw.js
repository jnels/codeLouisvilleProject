var $userText;
var drawColor;

//Establish canvas
var canvas = new fabric.Canvas("poetry-canvas", {
		isDrawingMode: true,
		height: 480,
		width: 340
  });

canvas.freeDrawingBrush.width = 15;

function displayPoem(userText, topPosition) {
	var printText = new fabric.Textbox(userText, {  
		width: 320,
		height: 460,
		top: 10,
		left: 10,
		fontFamily: "Merriweather",
		fontSize: 16,
		textAlign: "left"
	});
	
	canvas.add(printText);
	
	//Hide form, show "new" button
//	$(".poem").hide();
//	$(".controls").show();
		//.css("display", "block");
}

//Allow user to add text to canvas
$("#submit-button").click(function(){
	canvas.clear().renderAll();
	$("#create-new-poem").html("Create new found poem");
	$("#save-canvas-button").show();
	$("input").removeAttr("checked");
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
	} else {
		$("#poetry-input").hide();
		$(title).show();
		$(poem).show();
	}
	canvas.clear().renderAll();
});








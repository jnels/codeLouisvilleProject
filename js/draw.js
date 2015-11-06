var $userText;
var drawColor;

//Establish canvas
var canvas = new fabric.Canvas("poetry-canvas", {
		isDrawingMode: true,
		height: 480,
		width: 320
  });

canvas.freeDrawingBrush.width = 15;

function displayPoem (userText, topPosition) {
	var printText = new fabric.Text(userText, {  
		top: 15,
		left: 15,
		fontSize: 18,
		fontFamily: "Merriweather"
	});
	
	canvas.add(printText);
	
	//Hide form, show "new" button
	$(".poem").hide();
	$(".controls").show();
		//.css("display", "block");
}

//Allow user to add text to canvas
$("#submit-button").click(function(){
	$("#create-new-poem").html("Create new found poem");
	$("#save-canvas-button").show();
	$("input").removeAttr("checked");
	//Put value of textarea into canvas
  $userText = $("#input-text").val();
	$("#input-text").val("");
//	countCharacters($userText);
	displayPoem($userText)
});


	var joinedArray = [];
	var textArray = [];

//Experimental
function countCharacters(val) {
//	textArray = [];
	var length = $userText.length;
	var charBreak = 15;
	var j = 0;

	
	for (i = 0; i < length; i++) {
		var next = i + 1;
		var character = $userText.substring(i, next);
		textArray.push(character);
	}
	
	for (i = 0; i < textArray.length; i++) {
		var newLineArray = [];
		if (textArray[i] === " " && j < 5) {
			j += 1;
		} else if (textArray[i] === " " && j >= 5) {
			newLineArray.push(textArray[i]);
			joinedArray = newLineArray.join();
			j = 0;
			displayPoem(joinedArray, 15);
			
		} else {
			j += 1;
			console.log(j);
		}
	}
	
	//console.log("final " + textArray);
	//displayPoem(joinedArray)
}


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
//$("#new-canvas-button").click(function(){
//		canvas.clear().renderAll();
//		$("#poetry-input").show();
//		$("#input-text").val("");
//		$("#new-canvas-button").hide();
//		$("#save-canvas-button").hide();
//	});


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








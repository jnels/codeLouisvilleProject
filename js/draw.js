var canvas;
var printText;
var $userText;
var drawColor;

console.log("attached");

//Establish canvas
var canvas = new fabric.Canvas("poetry-canvas", {
		isDrawingMode: true,
		height: 320,
		width: 320
  });

canvas.freeDrawingBrush.width = 10;


//Allow user to add text to canvas
$("#submit-button").click(function(){
	//Put value of textarea into paragraph
  $userText = $("#input-text").val();
	
	//Add to canvas
	printText = new fabric.Text($userText, { 
		left: 10, 
		top: 10,
		fontSize: 18,
		fontFamily: "Merriweather"
	});
	
	canvas.add(printText);
	
	//Hide form, show new button
	$("#form").hide();
	$("#poetry-canvas").css("display", "block");
	$("#new-canvas-button").css("display","block");
	$(".controls").css("display","block")
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
		$("#form").show();
		$("#input-text").val("");
		$("#new-canvas-button").css("display","none");
	});





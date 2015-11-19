
var $overlay = $("#overlay");
var $overlayContent = $("#overlayContent");
var $image = $("<img>");
var $caption = $("<p></p>");
//var i = 0;
var imageLocation;
var nextImage;
var picList = [];
var picIndex;

//Add image to overlay
$overlayContent.append($image);
  
//Add caption to overlay
$overlayContent.append($caption);

//Loads image src into array
$("li img").each(function(i) {
//	var position = $(this).attr("href");
	var position = $(this).attr("src");
	picList.push(position);
});

//Capture click event on link to image
$('#imageGallery a').click(function(event){
		
  event.preventDefault();
	
	//Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
	
	//Show overlay
  $overlay.show();
	
	//Pull href attribute
	imageLocation = $(this).attr("href");
	
	//Loop to find value in picList array
	for (var i = 0; i < picList.length; i++) {
		if (picList[i] === imageLocation) {
			picIndex = i;
			displayImage(imageLocation);
		} 
	}
});  

function displayImage(location) {
	$image.attr("src", location);
}

$("#next").click(function() {
	if (picIndex === picList.length - 1) {
		picIndex = 0;
	} else { 
		picIndex++
	}
	
	imageLocation = picList[picIndex];
	displayImage(imageLocation);
});

$("#previous").click(function() {
	if (picIndex === 0) {
		picIndex = picList.length - 1;
	} else { 
		picIndex--
	}
	
	imageLocation = picList[picIndex];
	displayImage(imageLocation);
});

$(".close-overlay").click(function(){
  // Hide overlay
	$overlay.hide();
});

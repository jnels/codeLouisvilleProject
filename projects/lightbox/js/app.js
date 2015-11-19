
var $overlay = $("#overlay");
var $overlayContent = $("#overlayContent");
var $image = $("<img>");
var $caption = $("<p></p>");

var picList = [];
var picIndex;
var imageLocation;
var captionLocation;

//Add image to overlay
$overlayContent.append($image);
  
//Add caption to overlay
$overlayContent.append($caption);

//Loads image and caption into array
$("li img").each(function(i) {
	var source = $(this).attr("src");
	var caption = $(this).attr("alt");
	picList.push({
		source: source, 
		caption: caption});
});

//Capture click event on link to image
$('#imageGallery a').click(function(event){
	
  event.preventDefault();
	
	//Show overlay
  $overlay.show();
	
	//Pull href attribute
	imageLocation = $(this).attr("href");
	
	//Loop to find value in picList array
	for (var i = 0; i < picList.length; i++) {
		if (picList[i].source === imageLocation) {
			picIndex = i;
			captionLocation = picList[i].caption;
			displayImage(imageLocation, captionLocation);
		} 
	}
});  

function displayImage(location, caption) {
	console.log(location + " " + caption);
	$image.attr("src", location);
	$caption.text(caption);
}

$("#next").click(function() {
	if (picIndex === picList.length - 1) {
		picIndex = 0;
	} else { 
		picIndex++
	}
	
	
	
	imageLocation = picList[picIndex].source;
	captionLocation = picList[picIndex].caption;
	displayImage(imageLocation, captionLocation);
});

$("#previous").click(function() {
	if (picIndex === 0) {
		picIndex = picList.length - 1;
	} else { 
		picIndex--
	}
	
	imageLocation = picList[picIndex].source;
	captionLocation = picList[picIndex].caption;
	displayImage(imageLocation, captionLocation)
});

$(".close-overlay").click(function(){
  // Hide overlay
	$overlay.hide();
});

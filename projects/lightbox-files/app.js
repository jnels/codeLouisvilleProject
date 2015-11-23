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
	$(".copyright").hide();
	
	//Show overlay
  $overlay.show();
	
	//Pull href attribute
	imageLocation = $(this).attr("href");
	
	//Loop to match href to value in picList array
	for (var i = 0; i < picList.length; i++) {
		if (picList[i].source === imageLocation) {
			picIndex = i;
			displayImage(picIndex);
		} 
	}
});  

function displayImage(index) {
	imageLocation = picList[index].source;
	captionLocation = picList[index].caption;
	$image.attr("src", imageLocation);
	$caption.text(captionLocation);
}

$("#next").click(function() {
	if (picIndex === picList.length - 1) {
		picIndex = 0;
	} else { 
		picIndex++
	}
	displayImage(picIndex);
});

$("#previous").click(function() {
	if (picIndex === 0) {
		picIndex = picList.length - 1;
	} else { 
		picIndex--
	}
	displayImage(picIndex);
});

$(".close-overlay").click(function(){
	$(".copyright").show();
  // Hide overlay
	$overlay.hide();
});

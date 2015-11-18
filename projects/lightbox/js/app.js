
var $overlay = $("#overlay");
var $overlayContent = $("#overlayContent");

var $image = $("<img>");
var $caption = $("<p></p>");

var i = 0;
var nextImage;

//Add image to overlay
$overlayContent.append($image);
  
//Add caption to overlay
$overlayContent.append($caption);

//Capture click event on link to image
$('#imageGallery a').click(function(event){
		
  event.preventDefault();
	//Show overlay
  $overlay.show();
	
  var imageLocation = $(this).attr("href");
	displayImage(imageLocation);
});  

function displayImage(location) {
	$image.attr("src", location);
	
	//Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
}

$("#next").click(function() {
	
	nextImage = $("li").find("a").eq(i).attr("href");
	
	if (nextImage === undefined) {
		nextImage = $("#imageGallery li:first-child").attr("href");
		console.log(nextImage);
		i=1;
		i++;
	}
		i++;
		displayImage(nextImage);
});

$("#previous").click(function() {
	nextImage = $("li").find("a").eq(i).attr("href");
	console.log(nextImage);
	
	var futurePic = $("li").find("a").eq(i-1).attr("href");
	console.log("X " + futurePic);
	
	if (futurePic === undefined) {
		nextImage = $("#imageGallery li:last-child").attr("href");
		i=1;
		i--;
	}
	
	i--;
	displayImage(nextImage);
//	};
});

$(".close-overlay").click(function(){
  // Hide overlay
	$overlay.hide();
});

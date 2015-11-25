var x = [
	"m", "o", "c", ".", "l", "i", "a", "m", "g", "@", "n", "o", "s", "l", "e", "n", "w", "l", "e", "o", "j"];
var y = ["c", "o", "n", "t", "a", "c", "t"];
var z = "";

for (j = 0; j < y.length; j++) {	
	z += y[j];
	console.log(z);
}

z += ".";

for (i = x.length - 1; i >= 0; i--) {	
	z += x[i];
}
	
$(".mail-to").attr("href", "mailto:" + z);
$(".email").html(z);
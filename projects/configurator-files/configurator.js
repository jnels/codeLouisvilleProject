var data = {

	"frame Size": {
		'Small (15")': {
			price: 500
		},
		'Medium (17.5")': {
			price: 500
		},
		'Large (19")': {
			price: 500
		},
		'Extra Large (21")': {
			price: 600
		}
	},

	drivetrain: {
		"1x11": {
			price: 800
		},
		"2x10": {
			price: 500
		},
		"3x10": {
			price: 400
		}
	},

	fork: {
		"Rigid Carbon": {
			price: 250
		},
		"120mm Travel Suspension Fork": {
			price: 500
		}
	},

	wheels: {
		'29" Standard Rim': {
			price: 400
		},
		'29" Carbon Rim': {
			price: 800
		}
	}
};


//Prepare data to be formed into select
var frameSizeSelect = getId("frameSize");
appendSelect(data["frame Size"], frameSizeSelect);

var drivetrainSelect = getId("drivetrain");
appendSelect(data.drivetrain, drivetrainSelect);

var forkSelect = getId("fork");
appendSelect(data.fork, forkSelect);

var wheelsSelect = getId("wheels");
appendSelect(data.wheels, wheelsSelect);


function getId(id) {
	var varName = document.getElementById(id);
	return varName;
}

//Create select
function appendSelect(componentList, element) {
	
	//Create default value
	var selectOption = "<option disabled selected> -- select option -- </option>"

	//Append options based on data obj
	for (prop in componentList) {
		selectOption += "<option>" + prop + "</option>";
	}
	
	element.innerHTML = selectOption;
}


function checkValue(variable, value) {
	if (variable === value) {
		alert("Please make sure all values are selected.");
	} else {
		return;
	}
}

function buildBike() {
	var price = 0;
	var counter = 0;
	
	var description = "<ul class='capitalize'>";
	
	for (prop in data) {

		var propNoSpaces = prop.replace(/\s+/g, '')
		
		var selectedId = getId(propNoSpaces);
		var selectedValue = selectedId.value;
		
		if (selectedValue === "-- select option --") {
			counter += 1;
		} else {
			var componentPrice = data[prop][selectedValue].price;
			description += "<li><span class='bold'>" + prop + ":</span> " + selectedValue + "</li>";
			price += componentPrice;
		
			//Change picture
			if (prop === "fork") {
				if (selectedValue === "Rigid Carbon") {
					$("#photo").attr("src", "configurator-files/img/red-mtb-rigid-hi.png");
				} else {
					$("#photo").attr("src", "configurator-files/img/red-mtb-hi.png");
				}
			}		
		}
	}
	
	if (counter > 1) {
		alert("Please make sure all options are selected.");
	} else {
	
	description += "</ul>";
	price = "Price: $" + price ;
	
	print(description, "description");
	print(price, "price");
	
	$("#output").show();
		}
}
	
function print(text, id) {
	var printout = getId(id);
	printout.innerHTML = text;
}

$("#reset-button").click(function() {
	$("#output").hide();
	
});
var data = {

	frameSize: {
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
		"1 x 11": {
			price: 800
		},
		"2 x 10": {
			price: 500
		},
		"3 x 10": {
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
		'29" standard rim': {
			price: 400
		},
		'29" carbon rim': {
			price: 600
		}
	}
};


//Prepare data to be formed into select
var frameSizeSelect = getId("frameSize");
appendSelect(data.frameSize, frameSizeSelect);

var drivetrainSelect = getId("drivetrain");
appendSelect(data.drivetrain, drivetrainSelect);

var forkSelect = getId("fork");
appendSelect(data.fork, forkSelect);

var wheelsSelect = getId("wheels");
appendSelect(data.wheels, wheelsSelect);

//var objectArray = [];

function getId(id) {
	var varName = document.getElementById(id);
	//objectArray.push(varName);
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


function buildBike() {
	var price = 0;
	
	for (prop in data) {
		var selectedId = getId(prop);
		var selectedValue = selectedId.value;
		var componentPrice = data[prop][selectedValue].price;
		price += componentPrice;
	}
	print(price);
}
	
function print(x) {
	var printout = getId("output");
	printout.innerHTML = "$" + x;
}

$("#generate-button").click(function() {
	$("#description").show();
});

$("#reset-button").click(function() {
	$("#description").hide();
});
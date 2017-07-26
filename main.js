
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var reindeerCount = reindeer.length;
var currentReindeer = reindeer[i];

var hohohoElement = document.getElementById("reindeer");

for (var i = 0; i < colorsCount; i += 1) {

	var colorsString = "";
	colorsString += '<div id="reindeer">';
	colorsString += 	'<p>' + currentColor + '</p>';
	colorsString += 	'</div>';
	
	console.log("Dom String from for loop", colorsString);
	
}

var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var colorsCount = colors.length;
var currentColor = colors[i];

for (var i = 0; i < reindeerCount; i += 1) {

	var reindeerString = "";
	reindeerString += '<div id="reindeer">';
	reindeerString += 	'<p>' + currentColor + currentReindeer + '</p>';
	reindeerString += 	'</div>';
	
	console.log("Dom String from for loop", colorsString, reindeerString);
	
}

hohohoElement.innerHTML += colorsString + reindeerString;




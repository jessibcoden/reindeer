
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];



var hohohoElement = document.getElementById("reindeer");

for (var i = 0; i < reindeer.length; i++) {

	var currentReindeer = reindeer[i];
	var currentColor = colors[i];

	var reindeerString = "";
	reindeerString += '<p>' + currentColor + " " + currentReindeer + '</p>';

	hohohoElement.innerHTML += reindeerString
}











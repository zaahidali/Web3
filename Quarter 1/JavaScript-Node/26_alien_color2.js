clear();
console.log("*********** Green *********");
alien_colors("green");

console.log("*********** Red *********");
alien_colors("red");

function alien_colors (color){
	let alien_color = "green";
	if (alien_color == color){
	console.log("You earned 5 points");
	}
	else {
		console.log("You earned 10 points");
	}
}

console.log(alien_color == "green" ? true : false);
console.log(alien_color == "red" ? true : false);

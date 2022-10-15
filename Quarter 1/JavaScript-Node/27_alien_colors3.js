clear();
console.log("*********** Green *********");
alienColors("green");

console.log("*********** Yellow *********");
alienColors("yellow");

console.log("*********** Red *********");
alienColors("red");

function alienColors (color){
	let alien_color = "green";
	if (alien_color == color){
	console.log("You earned 5 points");
	}
	else if ("yellow" == color){
	console.log("You earned 10 points");
	}
	else {
		console.log("You earned 15 points");
	}
}

console.log(alien_color == "green" ? true : false);
console.log(alien_color == "red" ? true : false);

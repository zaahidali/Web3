clear() // for clearing the console
let names = ["Peter","John", "Hassan", "Hussain"];
// added at start
names.unshift("Alpha");
// added at middle
names.splice(names.length/2, 0, "Alan");
// added at last location
names.push("Sam");
for( let i=0; i<names.length; i++)
{
	console.log("I would like to invite",names[i], " for Lunch");

}
console.log("We found a bigger dinner table");
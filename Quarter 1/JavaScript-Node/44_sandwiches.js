clear();

MakeASandwich("Patty", "Meat", "Cheese")
MakeASandwich("Meat", "Cheese")
MakeASandwich("Patty")

function MakeASandwich(...args) {
	console.log(`I want a ${args[0]} ${args[1]} ${args[2]}`)
}
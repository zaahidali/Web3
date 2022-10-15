clear();

let pizzaNames = ["Chicken pepporoni pizza", "Lava pizza", "Italian pizza"];
pizzaNames.length > 0 ? favoritePizzas(pizzaNames) : console.log("We need to find some pizzas!");

function favoritePizzas(pizzas){
	for (let number=0; number<pizzas.length; number++)
		{
			console.log("I like",pizzas[number])
		}
		console.log("The pizzas are great food");
		console.log("It gives the pleasure to soul.");
		console.log("It is the food of happiness.");

}

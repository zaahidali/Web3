clear() // clear console
let places_list = ["zimbabwe","yasrab","norway", "finlad", "austria", "dublin", "ireland", "bosnia", "canada"];
let sorted_list = reverse_list = [...places_list];
sorted_list.sort();
reverse_list.reverse();

countries(places_list, "Unsorted");
countries(sorted_list, "Sorted"); // sorted list
countries(places_list, "Original unmodified");
countries(reverse_list, "Reversed")
countries(places_list, "Again Checking the order of the");
countries(reverse_list.reverse(), "Reversed 2 times")

function countries(countries_list, msg) {
	console.log(`${msg} list`);
	for (let i =0; i <countries_list.length; i++) {
		console.log("Country:",countries_list[i]);
	}
	console.log("**********")
}


clear();

let favoriteFruits = ["mango", "apple", "orange", "banana", "pineapple"];
checkFavoriteFruit(favoriteFruits);

function checkFavoriteFruit(fruitsList){
	for (let fruit=0; fruit<fruitsList.length; fruit++)
		{
			fruitName = fruitsList[fruit];
			if (fruitName == "mango"){
				console.log(`You really like ${fruitName}`);
			}
			if (fruitName == "apple"){
				console.log(`You really like ${fruitName}`);
			}
			if (fruitName == "orange"){
				console.log(`You really like ${fruitName}`);
			}
			if (fruitName == "pineapple"){
				console.log(`You really like ${fruitName}`);
			}
			if (fruitName == "banana"){
				console.log(`You really like ${fruitName}`);
			}
		}
}

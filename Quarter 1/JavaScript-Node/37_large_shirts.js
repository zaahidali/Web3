clear();

makeShirt("large", "I love JavaScript");
makeShirt("medium", "I love JavaScript");

function makeShirt(size ="large", textMessage){
	console.log(`The size of the shirt is ${size} and the message on the shirt is, '${textMessage}.'`)
}

clear();

let petNames = ["cat", "cheetah", "cougar"];
petNames.length > 0 ? favoritePets(petNames) : console.log("We need to find some pets!");

function favoritePets(pets){
	for (let number=0; number<pets.length; number++)
		{
			console.log(` A ${pets[number]} would make a great pet.`)
		}
	console.log("The have the same eyes, face and ear structure.")
}

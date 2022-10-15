clear() // for clearing the console
console.log("We can invite only 2 people for dinner");
let names = ["Peter","John", "Hassan", "Hussain"];
for( let i=0; i<names.length; i++)
{

	if (names.length > 2)
	{
		console.log("I am sorry for not inviting you");
		console.log(names.length);
		names.pop();
		console.log(names.length);
	}
	else
	{
		console.log(names[i],", you are invited for the dinner");	
	}
	console.log(names);
}

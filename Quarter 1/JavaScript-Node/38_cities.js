clear();

describeCity("Karachi", "Pakistan");
describeCity("Istanbul", "Turkiye");
describeCity("Berlin");


function describeCity(name, country="Turkiye"){
	console.log(`The ${name} is in ${country}.'`)
}
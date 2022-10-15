clear();
console.log("*********** Baby *********");
lifeStages(1);

console.log("*********** Toddler *********");
lifeStages(3);

console.log("*********** Kid *********");
lifeStages(5);

console.log("*********** Teenager *********");
lifeStages(14);

console.log("*********** Adult *********");
lifeStages(21);

console.log("*********** Elder *********");
lifeStages(66);

console.log("*********** Check age validity *********");
lifeStages(-120);


function lifeStages (age){
	if (age>0 && age < 2){
		console.log(`The person is a baby and its age is ${age}`);
	}
	else if (age>=2 && age < 4){
		console.log(`The person is a toddler and its age is ${age}`);
	}
	else if (age>=4 && age < 13){
		console.log(`The person is a kid and its age is ${age}`);
	}
	else if (age>=13 && age < 20){
		console.log(`The person is a teenager and its age is ${age}`);
	}
	else if (age>=20 && age < 65){
		console.log(`The person is an adult and its age is ${age}`);
	}
	else if (age>=65 ){
		console.log(`The person is a elder and its age is ${age}`);
	}
	else{
		console.log("Please enter a valid age number");
	}
}

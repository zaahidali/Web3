// custom type guard or interface
// In TypeScript, we can define our own type using interface or type alias.
// Interface is a structural type system. It is used to define the structure of an object.
// It uses duck typing. Duck typing is a style of dynamic typing in which an object's suitability is determined by the presence of certain methods and properties,
// rather than the type of the object itself.
// It does not generate any code at runtime.

// 1. Example one
console.log("\n********** Interface Example 1 **********");
interface Person {
  name: string;
  age: number;
  country: string;
}

let person: Person = {
  name: "Zahid",
  age: 22,
  country: "USA",
};
console.log(person.name, person.age, person.country);

// 2. Example two with optional property
console.log("\n********** Interface Example 2 **********");
interface Person2 {
  name: string;
  age: number;
  country?: string;
}

let person2: Person2 = {
  name: "Zahid",
  age: 22,
};
console.log(person2.name, person2.age, person2.country); // country is undefined so it will print undefined

// 3. Weak types in interface
// When all properties are optional then it is called weak type.

interface Person3 {
  name?: string;
  age?: number;
  country?: string;
}

// let person3: Person3{
// description: "This is a person" // will give error because description is not defined in interface
// }

// console.log(person3.description); // all are undefined

// 4. Interface with in operator
// check it with same property name in different interface
console.log("\n********** Interface with in operator **********");
interface Person4 {
  name: string;
  age?: number;
}

interface Earth {
  city: string;
  country: string;
}

let person4: Person4 = {
  name: "Zahid",
  age: 22,
};

let earth: Earth = {
  city: "New York",
  country: "USA",
};

function checkProperty(obj: Person4 | Earth) {
  if ("age" in obj) {
    console.log(`Age is ${obj.age} and is of a person`);
  }
  if ("city" in obj) {
    console.log(`City is ${obj.city} and called from Earth`);
  }
}

checkProperty(earth);
checkProperty(person4);

// 5. interface with same property name and using in operator
console.log("\n********** Interface with same property name **********");
interface sameProperty1 {
  name: string;
  location: string;
}

interface sameProperty2 {
  name: string;
  location: string;
}

let samePropertyObj1: sameProperty1 = {
  name: "Property 1 name",
  location: "Property 1 location",
};

let samePropertyObj2: sameProperty2 = {
  name: "Property 2 name",
  location: "Property 2 location",
};

function checkSameProperty(obj: sameProperty1 | sameProperty2) {
  if ("name" in obj) {
    console.log(`It is called from ${obj.name}`);
  }
}

checkSameProperty(samePropertyObj1);
checkSameProperty(samePropertyObj2);

// 6. interface with type guard function

console.log("\n********** Interface with type guard function **********");
interface typeGuard1 {
  name?: string;
  location: string;
}

interface typeGuard2 extends typeGuard1 {
  age: number;
}

let typeGuardObj1: typeGuard1 = {
  name: "Property 1 name",
  location: "Property 1 location",
};

let typeGuardObj2: typeGuard2 = {
  age: 22,
  location: "Property 2 location",
  name: "Accessing the name property",
};

function isTypeGuard2(obj: typeGuard2 | typeGuard1) {
  console.log(obj);
}
console.log("\nSecond object");
isTypeGuard2(typeGuardObj2);

console.log("\nFirst object");
isTypeGuard2(typeGuardObj1);
// union types

// A union type is a type formed from two or more other types, representing values that may be any one of those types.

// 1. Union type with string and number

console.log("********** Union Type **********");
function getAge(age: string | number): string | number {
  if (typeof age === "string") {
    return `Age is ${age}`;
  } else if (typeof age === "number") {
    return `Age is ${age}`;
  }
  return "Age value does not exist";
}

console.log(getAge("Twenty Two"));
console.log(getAge(22));

// 2. Union type with string and number and boolean
console.log(
  "\n********** Union Type with string and number and boolean **********"
);
function getAge2(age: string | number | boolean) {
  if (typeof age === "string") {
    return `Age is ${age}`;
  } else if (typeof age === "number") {
    return `Age is ${age}`;
  } else if (typeof age === "boolean") {
    return `Age value does exist and it is 22`;
  }
}

console.log(getAge2("Twenty Two"));
console.log(getAge2(22));
console.log(getAge2(true));

// 3. Add union type to function parameter
console.log("\n********** Add union type to function parameter **********");
function addWithUnionType(
  val1: string | number | boolean,
  val2: string | number | boolean
) {
  if (typeof val1 === "string" && typeof val2 === "string") {
    return val1 + " " + val2;
  } else if (typeof val1 === "number" && typeof val2 === "number") {
    return val1 + val2;
  } else if (typeof val1 === "boolean" && typeof val2 === "boolean") {
    return val1 && val2;
  }
  return undefined;
}

console.log(addWithUnionType("Ali", "Zahid"));
console.log(addWithUnionType(10, 20));
console.log(addWithUnionType(true, false));

// 4. Union type with class

console.log("\n********** Union Type with class **********");
class Bunny {
  constructor(public name: string, public age: number) {}

  getBunnyInfo() {
    return `Name: ${this.name} Age: ${this.age}`;
  }
}

class Cat {
  constructor(public name: string, public age: number) {}

  getCatInfo() {
    return `Name: ${this.name} Age: ${this.age}`;
  }
}

let pet: Bunny | Cat = new Bunny("Bunny", 2);
if (pet instanceof Bunny) {
  console.log(pet.getBunnyInfo());
} else {
  //  console.log(pet.getCatInfo()); // will give error
}

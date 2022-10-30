// Duck typing

// Duck typing is a way of checking if an object has the required properties and methods to be used in a certain way.
// It is a way of checking if an object is of a certain type without actually checking if it is of that type.
//  case 1:
let obj1 = {
  id: 1,
  name: "John",
  age: 30,
};

obj1 = {
  // location changed but the object is still the same
  age: 24,
  id: 2,
  name: "Mary",
};

console.log(obj1);

// case 2:
let obj2 = {
  id: 1,
  name: "John",
  age: 30,
};

// obj2 = {
//   age: 24,
//   id: 2,
//   name_1: "Mary",
// }; // error
// console.log(obj2);

// case 3:
let obj3: { id: number; [key: string]: any; age: number };
obj3 = {
  id: 1,
  fullName: "John Cena",
  age: 30,
};
console.log(obj3); // no error even though fullName is not defined in the type

// case 4:
let obj4 = {
  id: 1,
  name: "John Cena",
  age: 30,
};
obj3 = obj4; // no error because ob4 matched by index signature

// case 5:
console.log("**************** case 5 ****************");
let ob4: { id: number; name: string };
let ob5: { id: number; name: string; country: string };

ob4 = {
  id: 1,
  name: "John Cena",
};

ob5 = {
  name: "UnderTaker",
  id: 2,
  country: "USA",
};

ob4 = ob5; // no error because ob5 has all the properties of ob4
console.log(ob4);
console.log(ob5);

// ob5 = ob4; // error because ob4 does not have all the properties of ob5

// case 6:
console.log("**************** case 6 ****************");

/**
let obj6: { name:string};
obj6 = {
  name: "Jack Sparrow",
  age: 30
}; // error because obj6 does not have all the properties of obj6
*/

// case 7:
console.log("**************** case 7 ****************");
/**  
let obj7: { name: string; age?: number };
obj7 = {
  name: "Jack Sparrow",
  personAge: 30
}; // error because age variable name is different
 */

// case 8:
console.log("**************** case 8 ****************");
var obj8: { name: string; age?: number };
var obj9 =  { name: 'ali', totalAge: 20 };
obj8 = obj9; // no error

// case 9:
console.log("**************** case 9 ****************");

let obj10: { name: string; age?: number };
let obj11 = { name: "Jack Sparrow" };
obj10 = obj11; // no error

console.log(obj10);
console.log(obj11);
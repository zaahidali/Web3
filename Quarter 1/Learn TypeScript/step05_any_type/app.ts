// any type

let anyType: any = 'Hewlett Packard';
console.log(typeof anyType, anyType);


let anyType2: any = { id: 1, name: 'John Cena' };
console.log(typeof anyType2, anyType2);

// new properties can be added to the object
anyType2 = { id: 2, name: 'UnderTaker', country: 'USA' };
console.log(typeof anyType2, anyType2);

// properties can be deleted from the object as well
anyType2 = { name: 'UnderTaker' };
console.log(typeof anyType2, anyType2);

anyType2 = 100;
console.log(typeof anyType2, anyType2);

anyType2 = function () {
  return 'Hello World';
}
console.log(typeof anyType2, anyType2());
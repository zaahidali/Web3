clear();

let car = 'bMw';
console.log("Is car == 'bmw'? I predict True.")
console.log(car != 'bmw')
console.log(car != 'Yamaha')
console.log(car.toLowerCase() == 'bmw');
console.log(car.includes("M"))

car = 'Yamaha';
console.log("Is car == 'Yamaha'? I predict True.")
console.log(car == 'Yamaha')
console.log(car == 'bmw')
console.log(car.toLowerCase() == 'yamah');
console.log(car.includes("a"))


car = 'Ferrari';
console.log("Is car == 'Ferrari'? I predict True.")
console.log(car == 'Ferrari')
console.log(car == 'bmw')
console.log(car.toLowerCase() == 'ferrari');
console.log(car.includes("i"))

car = 'Audi';
console.log("Is car == 'Audi'? I predict True.")
console.log(car == 'Audi')
console.log(car == 'Ferrari')
console.log(car.toLowerCase() == 'audi');
console.log(car.includes("d"))

car = 'Mercedes';
console.log("Is car == 'Mercedes'? I predict True.")
console.log(car == 'Mercedes')
console.log(car == 'Ferrari')
console.log(car.toLowerCase() == 'mercedes');
console.log(car.includes("s"))

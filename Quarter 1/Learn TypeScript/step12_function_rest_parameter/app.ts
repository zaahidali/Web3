// function rest parameter

// named function with rest parameter

console.log("********** Named Function **********");
function studentList(section: string = "A", ...name: string[]) {
  console.log(`Section: ${section}`);
  for (let i = 0; i < name.length; i++) {
    console.log(`Name: ${name[i]}`);
  }
}

let names: string[] = ["John", "Jane", "Alex", "Zahid"];
studentList("A", ...names);

// anonymous function with rest parameter

console.log("********** Anonymous Function **********");
let studentList2 = function (section: string = "A", ...name: string[]) {
  console.log(`Section: ${section}`);
  for (let i = 0; i < name.length; i++) {
    console.log(`Name: ${name[i]}`);
  }
};

studentList2("A", ...names);

// arrow or lambda function with rest parameter

console.log("********** Arrow Function **********");
let studentList3 = (section: string = "C", ...name: string[]) => {
  console.log(`Section: ${section}`);
  for (let i = 0; i < name.length; i++) {
    console.log(`Name: ${name[i]}`);
  }
};

studentList3("A", ...names);

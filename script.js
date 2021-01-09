let myVariable = false;
if (myVariable !== true) {
    console.log("The condition has been evaluated to true");
}
let a = 7;
if (a<5) {
    console.log(a / 2);
} else {
    console.log (a * 2);
}
let bookCount = 20;
for (let i = 0; i <= bookCount; i++) {
    console.log (i);
    
}
let add = (a, b) => {
    return a + b;
};
 console.log(add(1,2))

let getGreetingTo = (greeting, name) => {
    return greeting + name + "!";
};
console.log (getGreetingTo ("Hello ","Mark"));

console.log (getGreetingTo ("Hi ", "David"));


let printValues = [0, 3, 6, 7, 9];
printValues.forEach(Number => {
    console.log(Number)
})
        

let myNumbers = [10, 20, 30]
myNumbers.forEach(Element => console.log(Element))
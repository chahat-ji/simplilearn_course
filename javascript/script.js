console.log("external script starts from here");

console.group("Loops tutorial");

//for loop
console.group("for loop");
x=0;
for(x=0;x<5;x++){
    console.log(x);
}
console.groupEnd();


//while loop
console.group("while loop");
while(x<=10){
    console.log(x);
    x++;
}
console.groupEnd();

//forin loop
console.group("forin loop");
let motor = {
    brand: "maruti",
    model: 2016,
    varient: "petrol" 
};

for (let key in motor){
    console.log(key,motor[key]);
}
console.groupEnd();



console.groupEnd();


//javascript object
console.group("javascript object");

let student ={
    name:"Chahat",
    roll:28,
    branch:"Electronic",
};
console.log(student.name + " of roll number " + student.roll + " studies in "+ student.branch);

//using new keyword
console.group("object using new keyword");
let car = new Object();
car.model = "a8",
car.brand = "audi",
car.price = "1cr";

console.log("The car "+car.brand+" "+car.model+" is priced at "+car.price);
console.groupEnd();

//using constructor
console.group("object using constructor");
function bike_cons(brand,model,price){
    this.brand = brand;
    this.model = model;
    this.price = price;
}
let bike = new bike_cons("yamaha","ninja h2","11 lakhs"); 

console.log("The bike "+bike.brand+" "+bike.model+" is priced at "+bike.price);
console.groupEnd();

console.groupEnd();



console.group("Function");
//function to calculate square 
function square(val){
    return val*val;
}

//function calling
console.log("square of 5-",square(5));

//function calling in a array
let num = [1,2,3,4,5];
num.forEach(function(val){
    console.log(`square of ${val}-`,square(val));
});  

console.group("function as a variable");
//function as a variable 
let hello = function(){
    return "Hello World!";
}
let y = hello();
//we can use it either way
console.log(y,hello());
console.groupEnd();


console.group("function contructor");
//function constructor
let myfun = new Function("a","return 2*a");
y = myfun(3);
console.log(y);
console.groupEnd();


console.group("self invoking function");
//in this a function is kept inside bracket and after defition again bracket are palced for inovke or call it
(function (){
    console.log("self invoking");
})();
console.groupEnd();


//function as a value
console.group("function as a value");
console.log("we can define a function and assign it to a variable as a value");
function fun1(val){
    return val+10;
}
let f1 = fun1(5);
console.log(f1);
console.groupEnd();



//arrow function
console.group("arrow functions");
console.log("a compact way of defining a function");

// Traditional function expression
let multiply1 = function(a, b) {
    return a * b;
};

// Arrow function equivalent
let multiplyArrow = (a, b) => a * b;

// Using implicit return
let square1 = x => x * x;

// Arrow function with no parameters
let sayHello = () => console.log("Hello!");
sayHello();

// Arrow function with a single parameter
let double = num => num * 2;

//arrow function with multiline body
let complexArrowFunction = (x, y) => {
    if (x > y) {
        return x * y;
    } else {
        return x + y;
    }
};

console.groupEnd();



console.groupEnd();

console.log("random");
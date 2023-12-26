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

//any type
let a1;
a1 = "mahesh";
a1 = 33;
a1 = true;

//unknown type
let a2 : unknown;
a2 = "ajay";
a2 = true;
a2 = 250;

//let res1 = a2.toUpperCase();

//checking type
if(typeof a2 === "string"){
   let res = a2.toUpperCase();
}


function print() : void{
    console.log('print() function called');
}

let result = print();
//type inference

let b1 = 10;

let b2 : boolean = true;

let b3 = "mahesh";

let b4 : number | boolean ;
b4 = 34;
b4 = false;

type NewType = number | boolean;
let b5 : NewType;

let b6 ;

let b7 : unknown;
b7 = 10;
b7 =  "kshitij";

if(typeof b7 === "string")
    b7.toUpperCase();

let b9 : string | null;

//string to number
let b10 : string ="9";
let b11 : number = parseInt(b10);
console.log(`b10 : ${b10} b11 : ${b11}`);

b11 = Number(b10);
console.log(`b10 : ${b10} b11 : ${b11}`);

//unary operator
b11 = + b10;
console.log(`b10 : ${b10} b11 : ${b11}`);

let b12 : string = "false";

let b13 : boolean = Boolean(12);
console.log(`b12 : ${b12} b13 : ${b13}`);

b13 = ( b12 === "true");
console.log(`b12 : ${b12} b13 : ${b13}`);

let b14 : number = 10;
let b15 : string = b14 as unknown as string;
console.log(`b14 : ${b14} b15 : ${b15}`);

//string functions
let s : string = "sandhya";
console.log(`number of charactors : ${s.length}`);
console.log(`name in upper : ${s.toUpperCase()}`);
console.log(`name in lower : ${s.toLowerCase()}`);
console.log(`replace s with $ in upper: ${s.replace(`s`,`$`)}`);

let s1 : string = s.substring(0,4);
console.log(`s.substring(0,4) : ${s1}`);

let i : number = s.indexOf('i');
console.log(`s.indexof('i'): ${i}`);

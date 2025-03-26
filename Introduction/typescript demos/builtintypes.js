"use strict";
//type inference
let b1 = 10;
let b2 = true;
let b3 = "mahesh";
let b4;
b4 = 34;
b4 = false;
let b5;
let b6;
let b7;
b7 = 10;
b7 = "kshitij";
if (typeof b7 === "string")
    b7.toUpperCase();
let b9;
//string to number
let b10 = "9";
let b11 = parseInt(b10);
console.log(`b10 : ${b10} b11 : ${b11}`);
b11 = Number(b10);
console.log(`b10 : ${b10} b11 : ${b11}`);
//unary operator
b11 = +b10;
console.log(`b10 : ${b10} b11 : ${b11}`);
let b12 = "false";
let b13 = Boolean(12);
console.log(`b12 : ${b12} b13 : ${b13}`);
b13 = (b12 === "true");
console.log(`b12 : ${b12} b13 : ${b13}`);
let b14 = 10;
let b15 = b14;
console.log(`b14 : ${b14} b15 : ${b15}`);
//string functions
let s = "sandhya";
console.log(`number of charactors : ${s.length}`);
console.log(`name in upper : ${s.toUpperCase()}`);
console.log(`name in lower : ${s.toLowerCase()}`);
console.log(`replace s with $ in upper: ${s.replace(`s`, `$`)}`);
let s1 = s.substring(0, 4);
console.log(`s.substring(0,4) : ${s1}`);
let i = s.indexOf('i');
console.log(`s.indexof('i'): ${i}`);

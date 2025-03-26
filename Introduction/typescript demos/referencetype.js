"use strict";
//array
var numbers1 = [];
numbers1 = [10, 20, 30, "deepak", true];
let numbers2 = new Array();
numbers2 = new Array(10, 20, 30, 40);
//array in typescript
let numbers3 = [1, 2, 3, 4, 5, 6];
let numbers4 = new Array(10, 20, 30, 40, 50);
numbers4.push(60);
numbers4.unshift(5);
for (let i = 0; i < numbers4.length; i++) {
    console.log(numbers4[i]);
}
let ii = numbers4.pop();
console.warn(`numbers4.pop() : ${ii}`);
numbers4.splice(2, 3);
for (let i = 0; i < numbers4.length; i++) {
    console.log(numbers4[i]);
}
let nums = numbers4.filter((v, i, arr) => v % 2 != 0);
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
let numbers5 = [1, 2, 3, 4, 5, 6];
// for(let i = 0; i < numbers5.length; i++){
//     console.log(numbers5[i] * numbers5[i]);
// }
//map function
let numbers6 = numbers5.map((v, i, arr) => v * v);
numbers6.forEach((v, i, arr) => console.warn(v));
let res = numbers5.reduce((pv, cv) => pv + cv);
console.log(`reduce : ${res}`);
//filter()  map()  reduce()
let numbers7 = [1, 2, 3, 4, 45];
let numbers8 = [1, 2, 'saurabh', 'sanjay', 2, 4];
//tuple
let numbers9 = [10, 'saurabh', 'pune'];
console.log(`item 1 : ${numbers9[0]} item 2 : ${numbers9}[1] item 3 : ${numbers9[2]}`);

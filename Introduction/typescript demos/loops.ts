//looping statments

let arr : number [] = [10,20,30,40,50];

//while loop

let i1 : number = 0;
while (i1 < arr.length){
    console.log(arr[i1]);
    i1++;
}

console.log('do while loop');
i1 = 0;
do{
    console.warn(arr[i1]);
    i1++;
} while(i1 < arr.length);

//for loop
console.log('for loop');
for(let i2 = 0; i2< arr.length; i2++){
    if(i2 == 2){
        //continue;
        break;
    }
    console.log(arr[i2]);
}

//for in loop
console.log('for in loop')
for(let item in arr){
    console.log(item);
}

//for of loop
console.log('for of loop')
for(let item of arr){
    console.log(item);
}
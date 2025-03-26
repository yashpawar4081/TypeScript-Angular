let c1 : {id : number, name : string} = { id:10, name :'yash'};

console.log(`id : ${c1.id} name : ${c1.name}`);

let c2 : {id : number, name : string}={id : 20, name : 'aniket'};

console.log(`id : ${c2.id} name : ${c2.name}`);

interface user{
    id : number;
    name : string;
    gender : string;
}

let c3 : user = {id : 30, name : 'asmita', gender : 'female', role : 'admin'};
console.log(`id : ${c3.id} name : ${c3.name} gender : ${c3.gender} role : ${c3.role}`);

interface user{
    role? : string;
}


let c4 : user = {id : 30, name : 'asmita', gender : 'female'};
console.log(`id : ${c4.id} name : ${c4.name} gender : ${c4.gender} role : ${c4.role}`);
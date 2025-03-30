"use strict";
class B {
    printB() {
        console.log('B class printB() method');
    }
}
class A extends B {
    constructor() {
        super(...arguments);
        this.name = "A";
    }
    getName() {
        return this.name;
    }
    printI() {
        console.log('I printI() inmlemented');
    }
}
let ia = new A();
console.log(`name : ${ia.getName()}`);
ia.printI();
ia.printB();
class C {
    constructor(name) {
        this.name = name;
    }
}
class D extends C {
    constructor(name, city) {
        super(name);
        this.city = city;
    }
}
let d = new D('vishva', 'pune');
console.log(d);
class E {
    constructor() {
        this.name = " ";
        this.city = " ";
    }
    // getName() : string{
    //     return this.name;
    // }
    // setName(name : string){
    //     this.name = name;
    // }
    get Name() {
        return this.name;
    }
    set Name(name) {
        this.name = name;
    }
}
let e = new E();
//e.setName("vijay");
//console.log(`name : ${e.getName()}`);
e.Name = "ganesh";
console.log(`name : ${e.name}`);
class F {
    print(num, s) {
        if (typeof num === "number" && typeof s === "undefined") {
            console.log(`print(num : number) : ${num}`);
        }
        else if (typeof num === "string" && typeof s === "undefined") {
            console.log(`print(s : string) : void : ${num}`);
        }
        else if (typeof num === "number" && typeof s === "string") {
            console.log(`print(num : number, s : string) : void : ${num} & ${s}`);
        }
    }
}
let f = new F();
f.print(10);
f.print('deepak');
f.print(20, 'sarika');

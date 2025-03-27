"use strict";
class Student {
    //    constructor(){
    //     console.log(`constructor() called`);
    //    }
    constructor(rollNumber, name, gendrer) {
        this.rollNumber = rollNumber;
        this.name = name;
        this.gender = gendrer;
    }
    display() {
        console.log(`roll number : ${this.rollNumber} name : ${this.name}
            gender : ${this.gender}`);
    }
    print() {
        console.log(`print() function called`);
    }
}
class B24Student extends Student {
    constructor() {
        super(...arguments);
        this.fees = 5000;
    }
}
let student1 = new Student();
student1.display();
let student2 = new Student();
student2.rollNumber = 1;
student2.name = "pratiksha";
student2.gender = "female";
student2.display();
let student3 = new Student(2, 'aditya', 'male');
student3.display();
student3.print();
class Customer {
    //     firstName : string;
    //     lastName : string;
    //     constructor(firstName : string, lastName : string){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    display() {
        console.log(`first name : ${this.firstName} last name : ${this.lastName}`);
    }
}
let Customer1 = new Customer("vishva", "pawar");
Customer1.display();

"use strict";
class StudentA {
    constructor(rollNumber, name, courseName) {
        this.rollNumber = rollNumber,
            this.name = name;
        // this.courseName = courseName;
    }
    display() {
        console.log(this);
        console.log(StudentA.courseName);
    }
    static printA() {
        console.log('printA() function called');
    }
}
let ss1 = new StudentA(1, 'Arnav', 'Dot net');
StudentA.courseName = "dot net";
//console.log(ss1);
ss1.display();
//ss1.printA();
StudentA.printA();

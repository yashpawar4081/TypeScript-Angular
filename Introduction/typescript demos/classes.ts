class Student{
    rollNumber? : number;
    name : string | undefined;
    gender? : string;

//    constructor(){
//     console.log(`constructor() called`);
//    }

     constructor(rollNumber? : number, name? : string, gendrer? : string){
        this.rollNumber = rollNumber;
        this.name = name;
        this.gender = gendrer;
     }


    display(){
        console.log(`roll number : ${this.rollNumber} name : ${this.name}
            gender : ${this.gender}`);
    }

    print(){
        console.log(`print() function called`);
    }
}

class B24Student extends Student{
    fees : number = 5000;
}

let student1 : Student = new Student();
student1.display();

let student2 = new Student();
student2.rollNumber =1;
student2.name = "pratiksha";
student2.gender = "female";
student2.display();

let student3 = new Student(2, 'aditya','male');
student3.display();
student3.print();


class Customer {
//     firstName : string;
//     lastName : string;

//     constructor(firstName : string, lastName : string){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

constructor(public firstName : string, public lastName : string){}

display(){
    console.log(`first name : ${this.firstName} last name : ${this.lastName}`);
}
}

let Customer1 = new Customer("vishva","pawar");
Customer1.display();
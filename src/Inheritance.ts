/*
Inheritance মানে: Child class automatically Parent class-এর বৈশিষ্ট্য পেয়ে যায়।
*/

class Person{
    constructor(public name: string, public age: number,public address: string ){}

    introduce(){
        console.log(`My name is ${this.name}. I am ${this.age} years old and I live in ${this.address}.`);
    };
};

class student extends Person{

}

const student1 = new student("Rafi", 23, "Dhaka");
student1.introduce();

class Teacher extends Person{
    designation: string;

    constructor(name: string, age: number, address: string, designation: string){
        super(name, age, address);
        this.designation = designation;
    };
};

const teacher1 = new Teacher("Karim", 45, "Chittagong", "Math Teacher");
teacher1.introduce();
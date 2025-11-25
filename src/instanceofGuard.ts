// // oop:instance of type guard/type narrowing

// class Person{
//     name:string;

//     constructor(name:string){
//         this.name = name;
//     }
//     doWork(numberOfHours:number){
//         console.log(`${this.name} is working for ${numberOfHours} hours.`);
//     }

// };

// class Student extends Person{
//     constructor(name:string){
//         super(name);
//     };
//     doHomework(numberOfHours:number){
//         console.log(`${this.name} is doing homework for ${numberOfHours} hours.`);  
//     }
// };

// class Teacher extends Person{
//     constructor(name:string){
//         super(name);
//     };
//     doTeaching(numberOfHours:number){
//         console.log(`${this.name} is teaching for ${numberOfHours} hours.`);  
//     }
// };

// // function Guard

// const isStudent =(user:Person)=>{
//     return user instanceof Student; 
// };

// const isTeacher =(user:Person)=>{
//     return user instanceof Teacher; 
// }

// const personDailyWork =(user:Person)=>{
//     if(isStudent(user)){
//         user.doHomework(10);
//     }else if(isTeacher(user)){
//         user.doTeaching(6);
//     }else{
//        user.doWork(15);
//     }
    
// };

// const studentOne = new Student("Shahid");

// const teacherOne = new Teacher("西村さん");

// personDailyWork(studentOne);

// personDailyWork(teacherOne);



// ======================Problem Solving Example======================

/*
Question-01
*/

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} is barking`);
  }
}

class Cat extends Animal {
  meow() {
    console.log(`${this.name} is meowing`);
  }
};


const checkAnimal=(animal:Animal)=>{
    if(animal instanceof Dog){
        animal.bark();
    }else if(animal instanceof Cat){
        animal.meow();
    }else{
        console.log("Unknown Animal");
    }
};

const dog = new Dog("Montu");

const cat = new Cat("Tommy");

checkAnimal(dog);

checkAnimal(cat);

/*
Question-02
*/

class Vehicle {
  constructor(public name: string) {}
}

class Car extends Vehicle {
  drive() {
    console.log(`${this.name} is driving on road`);
  }
}

class Plane extends Vehicle {
  fly() {
    console.log(`${this.name} is flying in the sky`);
  }
}

// function guard



const operateVehicle =(vehicle :Vehicle)=>{
    if(vehicle instanceof Car){
        vehicle.drive();
    }else if(vehicle instanceof Plane){
        vehicle.fly();
    }else{
        console.log("Vehicle not supported");
    }  
}

const car = new Car("Lamborghini");

const plane =new Plane("Airbus");

operateVehicle(car);

operateVehicle(plane);


/*  Question-03
*/

class User {
  constructor(public name: string) {}
}

class Admin extends User {
  deleteUser() {
    console.log(`${this.name} can delete users`);
  }
}

class Member extends User {
  uploadPost() {
    console.log(`${this.name} can upload posts`);
  }
}

class Guest extends User {
  readOnly() {
    console.log(`${this.name} can only read posts`);
  }
}

// function guard

const isAdmin =(user:User)=>{
    return user instanceof Admin;
}

const isMember =(user:User)=>{
    return user instanceof Member;
}
const isGuest =(user:User)=>{
    return user instanceof Guest;
}

const userPermission=(user:User)=>{
    if(isAdmin(user)){
        user.deleteUser();
    }else if(isMember(user)){
        user.uploadPost();
    }else if(isGuest(user)){
        user.readOnly();
    }else{
        console.log("Invalid user type");
    }
};

const adminBoard =new Admin("Shahid");

const memberBoard =new Member("Mejba");

const guestBoard =new Guest("Visitor");

userPermission(adminBoard);

userPermission(memberBoard);

userPermission(guestBoard);
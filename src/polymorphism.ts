/*
⭐ Polymorphism — OOP-এর দ্বিতীয় স্তম্ভ

Poly = Many (অনেক)
Morph = Forms (রূপ)

📌 Polymorphism মানে একই মেথড বিভিন্ন ক্লাসে ভিন্ন ভিন্নভাবে কাজ করবে।

👉 সহজ ভাষায়:
একই নামের মেথড, কিন্তু কাজ আলাদা হবে— অবজেক্ট অনুযায়ী।
*/

class Person{
    getWork(){
        console.log("Person is working");   
    }
}

class Developer extends Person{
    getWork(){
        console.log("Developer is coding");
    }
}

class Designer extends Person{
    getWork(){
        console.log("Designer is designing");
    }
}  

const work=(person:Person)=>{
    person.getWork();
}

const person1 = new Person();
const dev1 = new Developer();
const des1 = new Designer();


work(person1);  // Person is working
work(dev1);   // Developer is coding
work(des1);   // Designer is designing

// Problem Solving with Polymorphism

// Question-01

class Payment{
    pay(amount:number){
        console.log(`Paying ${amount} using generic payment method`);
    }
}

class CreditCardPayment extends Payment{
    pay(amount:number){
        console.log(`Paying ${amount} using Credit Card`);
    }
}

class payPal extends Payment{
    pay(amount:number){
        console.log(`Paying ${amount} using PayPal`);
    }   
}

class BankTransfer extends Payment{
    pay(amount:number){
        console.log(`Paying ${amount} using Bank Transfer`);
    }
}

const processPayment=(payment:Payment,amount:number)=>{
    payment.pay(amount);
}

const payment1 = new CreditCardPayment();
const payment2 = new payPal();
const payment3 = new BankTransfer();

processPayment(payment1,500);  // Paying 500 using Credit Card
processPayment(payment2,500);  // Paying 500 using PayPal
processPayment(payment3,500);  // Paying 500 using Bank Transfer

// Question-02

class Shape {
    calculateArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}   

class Triangle extends Shape {
    base: number;
    height: number;

    constructor(base: number, height: number) {
        super();
        this.base = base;
        this.height = height;
    }

    calculateArea(): number {
        return 0.5 * this.base * this.height;
    }
}

const printArea=(shape:Shape)=>{
   return shape.calculateArea();
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 8);

console.log("Area of Circle:", printArea(circle));         // Circle Area: 78.53981633974483
console.log("Area of Rectangle:", printArea(rectangle));   // Rectangle Area: 24
console.log("Area of Triangle:", printArea(triangle));     // Triangle Area: 12

// Question-03

class AppNotification{
    send(massage:string){
        console.log(`Sending generic notification: ${massage}`);
    }
}

// // Child Classes

class EmailNotification extends AppNotification{
    send(massage:string){
        console.log(`Sending Email: ${massage}`)
    }
}


class SMSNotification extends AppNotification{
    send(massage:string){
        console.log(`Sending SMS: ${massage}`)
    }
}


class PushNotification extends AppNotification{
    send(massage:string){
        console.log(`Sending Push: ${massage}`)
    }
}
  
const notify=(user:AppNotification,msg:string)=>{
    user.send(msg);
};

const senderOne = new EmailNotification();
const senderTwo = new SMSNotification();
const senderThree = new PushNotification();

notify(senderOne,"Hello User");
notify(senderTwo,"Hello User");
notify(senderThree,"Hello User");





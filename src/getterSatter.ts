/*
🧑‍🏫 Getter & Setter — কি জিনিস? (Bangla Explanation)

TypeScript-এ Getter এবং Setter হলো class-এর ভিতরের বিশেষ মেথড,
যা দিয়ে আমরা private বা protected property নিরাপদভাবে পড়তে (get) এবং আপডেট করতে (set) পারি।

👉 Getter = Property Read করার নিরাপদ উপায়
👉 Setter = Property Change করার নিরাপদ উপায়

এগুলো দেখতে function হলেও ব্যবহার হয় property-এর মতো।

🎯 কেন Getter/Setter ব্যবহার করি?

কারণ আমরা সাধারণত class-এর ভেতরের property কে private করে রাখি,
যাতে কেউ সরাসরি পরিবর্তন করতে না পারে।

Getter ও Setter এর মাধ্যমে আমরা:

✔ property কে control করে access দিতে পারি
✔ validation করতে পারি
✔ sensitive data নিরাপদ রাখতে পারি

✅ 1. Getter (get) → Property Read করার জন্য

Getter function দিয়ে আমরা কোনো private property কে নিরাপদে “খালি পড়তে” (read) পারি।
👉 মনে রাখবেন:
Getter কল করার সময় parentheses নেই

✅ 2. Setter (set) → Property Change করার জন্য

Setter function দিয়ে আমরা private property কে নিয়ম মেনে change করতে পারি।

👉 Setter ব্যবহারেও parentheses নেই
*/

// class BankAccountTwo {
//   private _balance: number;

//   constructor(balance: number) {
//     this._balance = balance;
//   }

//   get balance() {
//     return this._balance;
//   }

//   set balance(amount: number) {
//     if (amount < 0) {
//       console.log("Balance cannot be negative!");
//       return;
//     }
//     this._balance = amount;
//   }
// }

// const acc = new BankAccount(1000);

// console.log(acc.balance); // Getter
// acc.balance = 1500;       // Setter
// acc.balance = -100;       // Not allowed


// ===================================================================

class BankAccount{
    name:string;
    private _balance:number;

    constructor(name:string, balance:number){
        this.name = name;
        this._balance = balance;
    }

    set balace(amount:number){
        this._balance = this._balance + amount;
    }

    get balance(){
        return this._balance;
    }
}

const myAccount = new BankAccount("Alice", 5000);
console.log(myAccount.balance); // Getter ব্যবহার করে ব্যালেন্স দেখানো হচ্ছে        

myAccount.balace = 2000; // Setter ব্যবহার করে ব্যালেন্স আপডেট করা হচ্ছে
console.log(myAccount.balance); // আপডেটেড ব্যালেন্স দেখানো হচ্ছে


// ===========Provlem Solving Example=================


// Question-01

class Product {
    private _price: number;

    constructor(price: number) {
        this._price = price;
    }

    set price(value: number) {
        if (value < 0) {
            console.log("Invalid price");
            return;
        }
        this._price = value;
    }

    get price() {
        return this._price;
    }
}

const product = new Product(100);

console.log(product.price); // 100

product.price = 50;  // valid update
console.log(product.price); // 50

product.price = -20; // invalid update
console.log(product.price); // still 50


// Question-02

class Student {
    private _grade: number;

    constructor(grade: number) {
        this._grade = grade;
    }

    set grade(value:number){
        if(value<=100 && value>=0){
            this._grade = value;
        };
        return;
    }

    get grade(){
        return this._grade;
    }
}

const student = new Student(85);

console.log(student.grade); // 85

student.grade=95;
console.log(student.grade); // 95

student.grade=110;  // invalid update
console.log(student.grade); // still 95

// Question-03

class Employee {
    private _salary: number;
    private _bonus: number;

    constructor(salary: number, bonus: number) {
        this._salary = salary;
        this._bonus = bonus;
    }

    // Salary Setter
    set salary(value: number) {
        if (value < 15000) {
            console.log("Salary cannot be less than 15000");
            return;
        }
        this._salary = value;
    }

    // Bonus Setter
    set bonus(value: number) {
        if (value < 0) {
            console.log("Bonus cannot be negative");
            return;
        }
        this._bonus = value;
    }

    // Getter
    get totalSalary() {
        return this._salary + this._bonus;
    }
}

// Testing
const emp = new Employee(50000, 500);

console.log(emp.totalSalary); // 50500

emp.bonus = 1000;
console.log(emp.totalSalary); // 51000

emp.bonus = -5;  // invalid
console.log(emp.totalSalary); // still 51000

emp.salary = 12000; // invalid salary
emp.salary = 60000; // valid
console.log(emp.totalSalary); // 61000



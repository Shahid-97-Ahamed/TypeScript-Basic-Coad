/*
🧑‍🏫 Access Modifiers — TypeScript-এ কী?

Access Modifiers হলো কিছু বিশেষ কীওয়ার্ড যেগুলো class-এর ভিতরের property এবং method-এর access control করে।
মানে: কোন জিনিস কোথা থেকে access করা যাবে, আর কোথা থেকে পারবে না — সেটা নির্ধারণ করে।

TypeScript-এ ৩টি Access Modifier আছে:

1.public

2.private

3.protected
*/

// ✅ 1. public — (সব জায়গা থেকে access করা যায়)
// 👉 Default modifier (না লিখলেও public ধরা হয়)
// 👉 কোথা থেকে ব্যবহার করা যায়?

// class এর ভিতর

// class এর বাইরে

// child class (inheritance)

// 👉 উদাহরণ:

class Person {
  public name: string;  // public লিখা না লাগলেও default public

  constructor(name: string) {
    this.name = name;
  }
}

const p = new Person("Shahid");
console.log(p.name);  // allowed (public)


/*সারসংক্ষেপ:
public মানে “সবার জন্য খোলা”—যেকোনো জায়গা থেকে access করা যাবে।
*/

/*
❌ 2. private — (শুধুমাত্র class-এর ভিতরে ব্যবহার করা যায়)
👉 কোথা থেকে ব্যবহার করা যায়?

শুধুমাত্র class-এর ভিতরে
❌ class-এর বাইরে থেকে access করা যাবে না
❌ child class থেকেও access করা যাবে না

👉 উদাহরণ:
*/
class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  showBalance() {
    console.log(this.balance); // allowed
  }
}

const acc = new BankAccount(1000);
acc.balance; // ❌ Error - private

/*সারসংক্ষেপ:
private মানে “শুধুমাত্র class-এর ভিতরে”—class-এর বাইরে থেকে access করা যাবে না।
*/

/*

✅ 3. protected — (class এবং child class-এর ভিতরে ব্যবহার করা যায়)
👉 কোথা থেকে ব্যবহার করা যায়?
1.class-এর ভিতরে
2.child class-এর ভিতর
❌ কিন্তু class-এর বাইরে থেকে access করা যায় না

👉 উদাহরণ:
*/

class Person {
  protected age: number = 20;
}

class Student extends Person {
  getAge() {
    console.log(this.age); // allowed (protected)
  }
}

const std = new Student();
std.age; // ❌ Error - protected

/*সারসংক্ষেপ:
protected মানে “class এবং তার child class-এর জন্য”—class-এর বাইরে থেকে access করা যাবে না।
*/

/*👍 সহজ উদাহরণ (সব modifier একসাথে)/*

class Person {
  public name: string;
  private password: string;
  protected age: number;

  constructor(name: string, password: string, age: number) {
    this.name = name;         // everywhere accessible
    this.password = password; // only inside class
    this.age = age;           // class + child class
  }
}




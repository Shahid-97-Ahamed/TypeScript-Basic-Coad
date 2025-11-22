/*Mapped Types মানে হলো—একটা type-এর প্রত্যেকটা property-এর উপর loop চালিয়ে তাদের নতুনভাবে define করা।

এটা আপনাকে—

property optional/readonly করতে

property এর type বদলাতে

নতুন property বানাতে

existing type modify করতে

সহজ করে দেয়।
*/

// ======================================================================
// map


const numberOfArray:Number[]=[1,2,3,4];

const stringOfArray:string[]=["1","2","3","3"];

const arrayOfStringUsingMapped:string[]=numberOfArray.map((num)=>num.toString());

console.log(arrayOfStringUsingMapped);

// Ts map

type arrayOfStr ={
    size:string;
    degine:string;
};

type arrayOfNum<T>={
    [k in keyof T]:T[k];
};

const solution:arrayOfNum<{size:string,degine:number}>={
    size:"500",
    degine:500
}


// Question-01========================>>>>>>

/*
Problem 1: Convert all properties to boolean
*/

type Product = {
  name: string;
  price: number;
  stock: number;
};


type MakeBoolean<T>={
    [key in keyof T]:boolean
};

const chack:MakeBoolean<Product>={
    name: true,
  price: false,
  stock: true,
};


// Question-02
/*
Problem 2: Make all properties readonly
*/

type User = {
  username: string;
  email: string;
  age: number;
};

type MyReadonly<T>={
   readonly [keys in keyof T]:T[keys];
};

const u: MyReadonly<User> = {
  username: "shahid",
  email: "abc@gmail.com",
  age: 22
};


// Question-03========================>>>>

/*
✅ Problem 3: Convert all values to array types

*/


type Person = {
  name: string;
  hobbies: string[];
  married: boolean;
};


type ToArray<T>={
    [k in keyof T]:T[k][];
};



const show: ToArray<Person> = {
  name: ["Shahid"],
  hobbies: [["coding", "music"]],
  married: [true]
};


type Employee = {
  id: number;
  name: string;
  salary: number;
};

type WrapOptional<T>={
    [key in keyof T]?:{
        value:T[key];
    };
};

const emp: WrapOptional<Employee> = {
  name: { value: "Shahid" }
};



   





/*
Utility Types হলো TypeScript-এর "shortcut tools", যেগুলো আপনার type নিয়ে কাজ করা অনেক সহজ করে দেয়।
*/

// Partial type

// 👉 কোনো type-এর সব property-কে optional করে দেয়।
// type User ={
//     id:number;
//     name:string;
// };

// type partialUser=Partial<User>;

// Required

// 👉 সব property-কে required করে দেয়।

// type User = {
//   name?: string;
//   age?: number;
// };

// type FullUser = Required<User>;

// Readonly

// 👉 সব property-কে readonly বানায়।

// type User={
//     name:string;
//     password:number;
// };

// type UserPassword=Readonly<User>;

// Pick

// 👉 একটি type থেকে কিছু property বাছাই করতে ব্যবহৃত হয়।

// type User = {
//   name: string;
//   age: number;
//   email: string;
// };

// type userWithpick=Pick<User,"email" | "age">;

// Omit

// 👉 একটি type থেকে কিছু property বাদ দিতে ব্যবহৃত হয়।

// type User = {
//   name: string;
//   age: number;
//   email: string;
// };

// type userWithDel=Omit<User,"email" | "age">;

// Record

// 👉 object টাইপ তৈরি করার জন্য shortcut।


type userWithObj=Record<string,number>;

// ReturnType

// 👉 কোনো function-এর return টাইপ বের করতে ব্যবহৃত হয়।

const cal = (num1: number, num2: number): number => {
  return num1 + num2;
};

type DataType =ReturnType<typeof cal>;

// Parameters

// 👉 function-এর সব parameter এর টাইপ গুলো array হিসেবে দেয়।

const add =(a:number,b:number):number=>{
    return a + b;
}

type Perm =Parameters<typeof add>
// // 👉 সংজ্ঞা

// interface ব্যবহার করা হয় object-এর structure ডিফাইন করতে।
// যেমন ক্লাস বা অবজেক্ট কী কী প্রপার্টি থাকবে — এটা বলে দেয়।

// ⚡ But Most Important Line (ইন্টারভিউর উত্তর)
// ✔ TypeScript এ:

// interface ব্যবহার হয় object/ class structure define করতে

// type আরও flexible: object + union + tuple + function সব করতে পারে


type User = {
    name :string;
    age:number
};

// interface works only : object,type:array,object,funtion

interface IUser{
     name :string;
    age:number
}

type Role ={
    role : "admin" | "user"
}

// This Alias way===============

// type userWithRole = User & Role;

// const user1 :userWithRole ={
//     name:"Shahid",
//     age:32,
//     role:"admin"

// };

// const user2:userWithRole ={
//     name:"Ahamed",
//     age :12,
//     role:"user"
// };


// interface way ====================


interface IUserWithRole extends IUser{
     role : "admin" | "user"
}

type userWithRole = User & Role;

const user1 :IUserWithRole ={
    name:"Shahid",
    age:32,
    role:"admin"

};

const user2:IUserWithRole ={
    name:"Ahamed",
    age :12,
    role:"user"
};

// Question 2:

// interface ব্যবহার করে একটি Student structure বানান।
// Student এ থাকবে:

// id: number

// name: string

// department: string

// 👉 তারপর একটি মান দিন।

interface Student {
  id: number;
  name: string;
  department: string;
}

const studentInfo: Student = {
  id: 1995,
  name: "Shahid",
  department: "IT",
};


// example===============

interface Animal {
  species: string;
};

interface details extends Animal{
    age:number,
    isPet:boolean
}

const LifeAnimal:details={
    species:"red-cow",
    age:3,
    isPet:true
};




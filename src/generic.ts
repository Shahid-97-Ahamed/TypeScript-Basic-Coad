// // 🎯 Generics কী? (Simple Explanation)

// Generics হলো TypeScript-এ একটি টাইপকে পরে নির্ধারণ করার নিয়ম।
// অর্থাৎ — আগে function/ interface/ class বানাবেন, কিন্তু কোন টাইপ ব্যবহার হবে সেটা ব‍্যবহার করার সময় নির্ধারণ হবে।

// এটা এমন, আপনি একটা খালি বক্স বানালেন, কিন্তু ভিতরে কী জিনিস রাখবেন সেটা পরে ঠিক করবেন।


type digits<X,Y> =[X,Y];

const digit1:digits<string,string> =["20","500"];

const digit2:digits<number,number>=[20,500];

// ===================Example==========================

// **01.
// একটি generic function বানান যার নাম হবে wrapValue.

// Function টি যেকোনো টাইপের ডেটা গ্রহণ করবে এবং রিটার্ন করবে একটি object:

// { value: <yourValue> }


// 👉 Example call:

// wrapValue<number>(10)
// wrapValue<string>("Shahid")

function wrapValue<T>(value:T):T{
    return value;
}

wrapValue<number>(10)
wrapValue<string>("Shahid")

// Question 2: Generic interface তৈরি করুন: interface ApiResponse<T> { data: T; message: string; } 
// 👉 তারপর একটি user response তৈরি করুন যেখানে T হবে: { name: string; age: number }


interface ApiResponse<T> {
  data: T;
  message: string;
}

// এবার user response বানানো যাক
const userResponse: ApiResponse<{ name: string; age: number }> = {
  data: {
    name: "Shahid",
    age: 22
  },
  message: "User data fetched successfully"
};

console.log(userResponse);


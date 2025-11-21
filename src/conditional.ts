// Conditional Type মানে হলো:
// 👉 TypeScript-এ টাইপকে শর্ত দিয়ে চেক করা, আর শর্ত সত্য হলে এক টাইপ, মিথ্যা হলে আরেক টাইপ রিটার্ন করবে।
// এটা অনেকটা ternary operator এর মতো (condition ? true : false)
// কিন্তু শুধু type level এ কাজ করে—runtime-এ নয়।


type a =string;

type b =boolean;

type c = a extends string ? true :b extends number ? true : false;

type myVehacls={
    bike:string;
    car:string;
    cng:boolean;
};


type chackvehicals<T>=T extends keyof myVehacls ? true : T extends keyof number ? true : false;

type hasCar = chackvehicals<"car">


// =========================Problem-01======================

type MyDevices = {
    phone: string;
    laptop: string;
    tablet: boolean;
    camera: number;
};

type CheckDevice<T> =
T extends  keyof MyDevices 
? "Valid Device"
:T extends  Number 
? "Number Not Allowed"
:"Invalid Input";

type A = CheckDevice<"laptop">;   // "Valid Device"
type B = CheckDevice<number>;     // "Number Not Allowed"
type C = CheckDevice<"bus">;      // "Invalid Input"



// keyof = object-এর সব key-এর নামগুলোর union টাইপ।

// type User = {
//   id: number;
//   name: string;
//   age: number;
// };

// type Keys = keyof User;

// "id" | "name" | "age"

// কারণ User object-এ ৩টা key আছে, তাই keyof User = তিনটার union।

// function getValue<T, K extends keyof T>(obj: T, key: K) {
//     return obj[key];
// }

// const user = { id: 1, name: "Shahid" };

// getValue(user, "id");   // ✓ working
// getValue(user, "name"); // ✓ working
// getValue(user, "age");  // ❌ error (because age doesn't exist)

// keyof = কোনো টাইপের সব key-এর নামকে বের করে আনে।


// ================Question-01==================

type User={
    id:number,
    name:string,
    isActive:boolean
}

const user:User = {
  id: 101,
  name: "Shahid",
  isActive: true
};


const updateProperty=<X>(obj:X,Keys:keyof X)=>{
    return obj[Keys];
}

const resultOne=updateProperty(user,"name");
console.log(resultOne);
const resultTwo=updateProperty(user,"isActive");
console.log(resultTwo);



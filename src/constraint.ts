// // constraint: extends ব্যবহার করে জেনেরিককে constrain করা হয়।
// মানে — “এই জেনেরিক শুধু এই টাইপ বা এর সাবটাইপই হতে পারবে।”

// ✔ Example Without Constraint

// function printValue<T>(value: T) {
//   console.log(value);
// }

// printValue(10);       // ok
// printValue("Shahid"); // ok   {এখানে T যেকোনো টাইপ হতে পারে। কোন restriction নাই।}
// printValue(true);     // ok


// ✔ Example With Constraint

// function printLength<T extends { length: number }>(value: T) {
//   console.log(value.length);
// }

type student ={
    id:number,
    name:string,
    isStudent:boolean
};



const getStudentInformation=<T extends student>(studentInfo:T)=>{
    return {
        course:"Python batch-6",
        ...studentInfo
    }
};

const studentOne=getStudentInformation({
    id:1259,
    name:"Shahid",
    isStudent:true,
    age:28,
    isMarrid:true

})

const studentTwo=getStudentInformation({
    id:1759,
    name:"Alex",
    isStudent:true,
    age:18,
    isMarrid:false

})

const studentThree=getStudentInformation({
    id:1279,
    name:"Rakib",
    isStudent:false,
    age:25,
    isMarrid:false

})

const showData=getStudentInformation(studentOne);
console.log(showData);


// ===========Q-01==============================
type peramOne ={
    id:number,
    name:string,
    isStudent:boolean
};

type anotherInfo={
             age:Number,
            country:String
}

const mergeStudentData=<T extends peramOne,U extends anotherInfo>(peramOne:T,anotherInfo:U)=>{
    return {
            ...peramOne,
           ...anotherInfo
            
    };
};

const student1={
  id: 120,
  name: "Shahid",
  isStudent: true,
};

const student2={
     age: 25,
  country: "Japan"
};

const resultData =mergeStudentData(student1,student2);
console.log(resultData);






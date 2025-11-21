// const createArrayWithString =(value:string)=>[value];

// const createArrayWithNumber =(value:number)=>[value];

// const createArrayWithObject =(value:{id:number,name:string})=>{
//     return [value];
// };

// const createArrayWithGeniric =<T>(value:T)=>{
//     return[value];
// }


// const arrStr =createArrayWithGeniric("Shahid");
// const arrNum =createArrayWithGeniric(20);
// const arrObj=createArrayWithGeniric({
//     id:123,
//     name:"Shahid"
// });

// // tuple

// const createArrayWithTuple =(problem1:string,problem2:number)=>{
//     return [problem1,problem2];
// }

// const createArrayTuoleWithGeneric=<X,Y>(prb1:X,prb2:Y)=>[
//     prb1,
//     prb2
// ];

// const dis1 =createArrayTuoleWithGeneric("Shahid",2890);
// const dis2 =createArrayTuoleWithGeneric(true,{name:"shahid"});

// ===========================Example================================

// const course =<T>(studentInfo:T)=>{
//     return {
//         course:"TypeScript",
//         ...studentInfo
//     };

// };

// const studentOne ={
//     id:1235,
//     name:"Akbar",
//     isPassed:true,
//     passingYear:2019
// };

// const studentTwo ={
//     id:1285,
//     name:"Rajib",
//     isPassed:false,
//     address:"13/1,Hazi Ala Box road,Tongi,Gazipur-1712"
// };

// const result =course(studentOne);
// console.log(result);

// const result2=course(studentTwo);
// console.log(result2);

// Problem-01===========

// Generic function
const buildProfile = <T, X, Y>(basicInfo: T, additionalInfo: [X, Y]) => {
    return {
        role: "Student",
        ...basicInfo,
        tupleInfo: additionalInfo
    };
};

// Test data 1
const basicA = {
    id: 101,
    name: "Shahid"
};

const infoA: [string, number] = ["Bangladesh", 2019];

const resultA = buildProfile(basicA, infoA);
console.log(resultA);

// Test data 2
const basicB = {
    roll: 55,
    isPassed: true
};

const infoB: [boolean, string] = [true, "Science"];

const resultB = buildProfile(basicB, infoB);
console.log(resultB);

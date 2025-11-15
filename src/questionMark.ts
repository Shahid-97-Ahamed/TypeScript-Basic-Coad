//?:ternary oprator:discion making

// ??: null and undefine making(nullish coalescing oprator)

// ?. optional chaining

//?:ternary oprator:discion making

const biyarBoyos=(age:number)=>{
    //=========== Normal way========

    //==== Solve One Way======

    // if(age >= 21){
    //     console.log("Congratulation!!,You are Eligible");
    // }
    // else{
    //     console.log("Sorry!!You are not eligible");
    // }

    //==========?:ternary oprator:discion making==========

    //==== Solve Second Way======

    const result = age >= 21 ? "Congratulation!!,You are Eligible":"Sorry!!You are not eligible";

    // console.log(result);
}

biyarBoyos(12);


// ??: null and undefine making(nullish coalescing oprator)

const resultPublished =undefined;
const resultPublished2 =null;
const resultPublished3 ="";

// One way ===========
const showresult = resultPublished ?? "result-form";

// console.log(showresult);

// Two way=============

const showresult2 = resultPublished2 ?? "result-form";

// console.log(showresult2);

// first two way is main way================

// Three way============
const showresult3 = resultPublished3 ?? "result-form";

// console.log(showresult3);





const isAuthantication = "";

const resultTernartPublished = isAuthantication ? isAuthantication : "You are Guest";

const resultNullishPublished = isAuthantication ??  "You are Guest";

// console.log({resultTernartPublished},{resultNullishPublished});

// //============= ?. optional chaining============

const user:{
    id:number,
    address:{
        postalCode?:string
    }
}={
    id:12558,
    address:{
        postalCode :""
    }
}

const needPostalCode = user?.address?.postalCode;

console.log(needPostalCode);


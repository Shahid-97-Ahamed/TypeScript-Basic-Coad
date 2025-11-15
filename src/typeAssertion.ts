// typeScript thake better type difine korake type Assertion bola,Type assertion doesn't change the 
// runtime behavior of the code — it only affects the TypeScript type system.
//  It's purely a compile-time construct that helps the compiler understand how you want to treat a value.

// ##Alert## if we are not sure we don't use typeAssertion

// ⚠️ Caution
// - Type assertions do not perform type checking or conversion at runtime.
// - Misusing them can lead to runtime errors if the actual value doesn't match the asserted type.


// let anything:any;

// anything = 1258;

// (anything as Number)

// let anything:any;

// anything = "Shahid";

// (anything as string)

// Example=================>>
// ****kg to gm convert

const converter =(input : number | string)
:string |number | undefined =>
    {
    if(typeof input === "number"){
        return input*1000;
    }else(typeof input === "string")
    {
        const [value] = input.split("");
        return `string to nummber value: ${Number(value)*1000}`

    }
}

const kgTogmNumber = converter(2) as Number;
console.log(kgTogmNumber);

const kgTogmString = converter("2 kg") as string;
console.log(kgTogmString);



type customError = {
        massege : string
};

try{

}catch(err){
    console.log((err as customError).massege)
}

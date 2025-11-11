// function

//arrow function,normal function
//arrow 
let add = (num1: number, num2: number): number => { 
    return num1 + num2;
};

add(5, "10");   // Error

//normal function

function multiply(num1: number, num2: number): number {
    return num1 * num2;
}       

multiply(5, "10");   // Error

//object=>function=>object

const poorUser = {
    name: "Shahid",
    age: 22,
    addMoney: function(value: number): number {
        return this.age + value;//its return number type value and this.age is number type
    }
};

poorUser.addMoney(10000); // Correct

const arr:number[] = [1,2,3,4,5];

const squareArr = arr.map((element: number): number => {
    return element * element;
});//its return number type value


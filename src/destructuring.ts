//two type declarations with the same name in the same scope

//1st declaration object type and 2nd declaration array type

//object distruction

//array distruction

const user ={
    id: 1,
    name:{
        first: "John",
        middle: "M",
        last: "Doe"
    },
    age: 30,
    gender:"male",
    email: "john.doe@example.com"
}

//jodi destructuring er somoy kono property na thake tahole seta undefined hobe

const{email:yahoo,name:{middle}} = user;//yahoo will get the value of email property from user object its calls name aliasing

// console.log(yahoo); //
// console.log(middle)


const friends =["Sakib","Anis","Ripon"];

const [,unknown,]=friends;
const [bestFriend,,]=friends;
const [,,barir]=friends;
console.log(barir);
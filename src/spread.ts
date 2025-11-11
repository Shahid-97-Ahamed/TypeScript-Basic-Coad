//spread operator in TypeScript

const friend =['rahim','karim','salim'];

const schoolFriedn = ['jamal','kamal','lamal'];

const collegeFriend = ['babul','habul','tabul'];

const allFriend = [...friend,...schoolFriedn,...collegeFriend];

// console.log(allFriend);

//example

const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'spinach'];
const drinks = ['water', 'milk'];


const groceryList = [...fruits, ...vegetables, ...drinks];
// console.log(groceryList);

//rest operator in TypeScript

//array destructuring with rest operator
const sandInvitation =(friend1:string,friend2:string,...friend3:string[])=>{
    // console.log(`Invitation sent to: ${friend1}, ${friend2},${friend3}`);
}

sandInvitation('rahim','karim','salim','jamal','kamal','lamal');

//for Each with rest operator

const sandInvitation2 =(...friends:string[])=>{
    friends.forEach((friend:String)=>{
        console.log(`Invitation sent to: ${friend}`);
    });     

}

sandInvitation2('rahim','karim','salim','jamal','kamal','lamal','babul','habul','tabul',"shihab","emon");

const numbers = [1, 2, 3, 4, 5];

const addNumbers = (...nums: number[]) => {
  return nums.reduce((sum, num) => sum + num, 0);
};

console.log(addNumbers(...numbers));

///example

function greet(name:string){
    console.log(`Hello, ${name}!`);
}

// greet(); // Output: Hello, Guest!
greet("Alice");
greet("Bob"); // Output: Hello, Alice!



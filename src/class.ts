/*
⭐ Class & Object — TypeScript Bangla Explanation
🔶 Class কী?

Class হলো একটি নকশা (Blueprint)।
এই নকশা দিয়ে অনেকগুলো object বানানো যায়।

একটা class-এর মধ্যে থাকে:

properties (variable)

methods (function)

➡️ Class কখনো direct data ধরে না, Object data ধরে।

🔶 Object কী?

Object হলো class এর উপর ভিত্তি করে তৈরি করা বাস্তব ডেটা যুক্ত জিনিস।

যেমন class হলো নকশা, object হলো সেই নকশা দিয়ে তৈরি আসল product।

*/

// Class Declaration

class car {
    name: string;
    model: number;
    color: string;

    constructor(name:string,model:number,color:string){
        this.name=name;
        this.model=model;
        this.color=color;
    }
    
    introduce(){
        console.log(`This is a ${this.color} ${this.name} from ${this.model} model.`); 

    }
}

const toyota = new car("Toyota",2020,"Red");

// console.log(toyota.model);   // Output: 2020

toyota.introduce();  // Output: This is a Red Toyota from 2020 model.

const honda =new car("Honda",2019,"Black");

// console.log(honda.model);    // Output: 2019
honda.introduce();   // Output: This is a Black Honda from 2019 model.

// Peramiter Property Declaration

class bike{
    constructor(public name:string, public model:number, public color:string){
        
    }

    introduce(){
        console.log(`This is my new ${this.name} bike, model ${this.model} in ${this.color} color.`);
    }
}

// for Yamaha bike object

const yamaha = new bike("Yamaha",2021,"Blue");

yamaha.introduce();  // Output: This is my new Yamaha bike, model 2021 in Blue color.

// for Suzuki bike object   

const suzuki = new bike("Suzuki",2020,"Green");

suzuki.introduce();  // Output: This is my new Suzuki bike, model 2020 in Green color.


// =========Q-01=================================

class Laptop{
    constructor(public color:string, public brand:string,public price:number){

    }

    details(){
        console.log(`This is a ${this.color} ${this.brand} laptop costing ${this.price} USD.`);
    }
}

const myDevice = new Laptop("Silver","Apple",1500);

myDevice.details();  // Output: This is a Silver Apple laptop costing 1500 USD.

const mySecondDevice = new Laptop("Black","Dell",900);

mySecondDevice.details();


// -----------------Q-02--------------------

class Mobile{
    constructor(public brand: string, public ram: number, public storage: number){

    }

    info(){
        console.log(`This is a ${this.brand} phone with ${this.ram}GB RAM and ${this.storage}GB storage`)
    }
}

const Samsung = new Mobile("Samsung",8,128);

Samsung.info(); 

const Xiaomi = new Mobile("Xiaomi",6,64);

Xiaomi.info();


// -----------------Q-03--------------------

class Student{
    constructor(public name:string,public country:string,public age:number,public course:string){
        };

        introduce(){
            console.log(`Hi, I am ${this.name} from ${this.country}. I am ${this.age} years old and studying ${this.course}.`);
        }
}

const studentOne = new Student("Shahid","Bangladeh",22,"Web Engineering");

studentOne.introduce();

const studentTwo = new Student("Alex","Japan",23,"AI Technology");

studentTwo.introduce();


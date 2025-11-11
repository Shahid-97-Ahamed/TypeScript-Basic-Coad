//ts

//tuple, array, object

// Tuples are fixed-length arrays with specified types for each element.

let name: (string | number)[] = ["Shahid", 12];

let mynameAndAge: (string | number)[] = ["Shahid", 12];

let nameAgeBirthYear: (string | number | number)[] = ["Shahid", 12, 2010];

nameAgeBirthYear = [25, 1998, "Mejba"]; // Error

let hobbies: [string , string ,string , number] = ["Coding", "Sleeping", "Eating", 12];

// hobbies = ["Reading", "Traveling", 45, "Gaming"]; // Error

hobbies = ["Reading", "Traveling", "chatting", 36]; // Correct


//refference type:object

let person: { 
            //  companyName:string;//its means we must need to provide this property value
            //    readonly companyName:string;//access modifier readonly property its means we cant change this property value
            companyName:"SamuraiAi";//literal type its means we must need to provide this property value
                firstName: string;
                middleName?: string;// optional its means we may or may not provide this property value
                lastName: string;
                age: number 
            } = {
            companyName:"SamuraiAi",
             firstName: "Shahid",
            middleName: "Ahamed",
            lastName: "Rabby",
             age: 22,
                    };

            person.companyName ="OpenAI";// Error: Cannot assign to 'companyName' because it is a read-only property.

            console.log(person);



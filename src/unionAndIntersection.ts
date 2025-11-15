//Union And InterSection

//Union type

type UserRole = "admin" | "User"

const getDeshboard =(role:UserRole)=>{
    if(role==="admin"){
        return "Admin Deshboard"
    }
    else if(role==="User"){
        return "User Deshboard"
    }
    else{
        return "Guest Deshboard"
    }
}

getDeshboard("guest")

//intersection 

type employee = {
    id : string;
    name:string;
    mobileNumber:string;
}

type menager ={
    dasignation:string;
    timeSize:number;
}

type projectMember = employee | menager;

const companeyProject:projectMember={
    id:"1225",
    name:"Adlof Hitler",
    mobileNumber:"124524",
    dasignation:"project manager",
    timeSize:76
};
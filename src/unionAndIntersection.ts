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
const UserRoles = {
    Admin: "ADMIN",
    Editor: "EDITOR",
    Viwer: "VIWER",
} as const;

const userData = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    } else {
        return false;
    }
};

const showData = userData(UserRoles.Editor);
console.log(showData);


// ==================Problem-01==============

// const User={
//     Admin:"ADMIN",
//     Editor:"EDITOR",
//     Viwer:"VIWER"
// }as const;

// const isViewer=(role:(typeof User)[keyof typeof User]
// )=>{
//     if(role === User.Viwer){
//         return true;
//     }else return false;
// };

// const result=isViewer(User.Viwer);
// console.log(result);


// ===========================Question-02===================

const User = {
    Admin: "ADMIN",
    Editor: "EDITOR",
    Viwer: "VIWER"
} as const;

const getAccessLevel = (
    role: (typeof User)[keyof typeof User]
): string => {
    switch (role) {
        case User.Admin:
            return "Full Access";

        case User.Editor:
            return "Write Access";

        case User.Viwer:
            return "Read Only";

        default:
            return "Invalid Role";
    }
};

console.log(getAccessLevel(User.Admin));   // Full Access
console.log(getAccessLevel(User.Editor));  // Write Access
console.log(getAccessLevel(User.Viwer));   // Read Only

// ==================problem-02=========================

const MembershipLevels = {
    Basic: "BASIC",
    Silver: "SILVER",
    Gold: "GOLD",
    Platinum: "PLATINUM"
} as const;

const getDiscount=(level:(typeof MembershipLevels)[keyof typeof MembershipLevels])=>{
        switch(level){
            case MembershipLevels.Basic:
            return "5% Discount";
            case MembershipLevels.Silver:
            return "10% Discount";
            case MembershipLevels.Gold:
            return "20% Discount";
            case MembershipLevels.Platinum:
            return "30% Discount";
            default:
                return "Sorry!! You have no return";
        }
}


const result=getDiscount(MembershipLevels.Gold)     // "20% Discount"
console.log(result)
const result2=getDiscount(MembershipLevels.Basic)    // "5% Discount"
console.log(result2)

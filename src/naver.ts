// when funtion never return data it's call never type

// ***throwEroor Massage..........

const throwwError =(msg:string):never=>{
    throw new Error(msg) 
}

throwwError("Error...")
// null ta k type hishaba use korake nullable type bola

// ==========nullable type=========================

const user=(input : string | null)=>{
    if(input){
        console.log(`for databaje: ${input}`)
    }else{
        console.log("for All User")
    }
}

user(null);
// ================Unknown type======================

// when we don't know what is the real output as like string,number,null in that case we used unknown tpye

// Example-01

// ***we need discounted price?

const calculateDiscount=(input : unknown)=>{
    if(typeof input === "number"){
        const discountPrice = input * 0.1;
        console.log(discountPrice);
    }else if(typeof input === "string"){
        const [discountPrice] = input.split(' ') ;
        console.log(Number(discountPrice)*0.1)
    }else{
        console.log("Wrong Input");
    }
}

calculateDiscount(100);
calculateDiscount("100 TK");
calculateDiscount(null);
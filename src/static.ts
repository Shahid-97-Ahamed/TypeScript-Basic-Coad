class counter{
   static count:number=0;

   static increment(){
      return (counter.count = counter.count + 1);
    }

    static decrement(){
       return (counter.count = counter.count - 1);
    }
}

// const instance1 = new counter(); /*ekta memory*/

// console.log(instance1.increment());
// console.log(instance1.increment());
// console.log(instance1.increment());

// const instance2 = new counter(); /*arakta memory*/

// console.log(instance2.increment());
// console.log(instance2.increment());
// console.log(instance2.increment());

// const instance3 = new counter(); /*arakta memory*/

// console.log(instance3.increment());
// console.log(instance3.increment());
// console.log(instance3.increment());

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());   
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
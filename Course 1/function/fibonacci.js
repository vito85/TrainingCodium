//fibonacci number

// let fib1 = 0;
// let fib2 = 1;
// let nextFib;

// for(let i = 0; i <= 10; i++){
    
//     nextFib = fib1 + fib2;
//     fib1 = fib2;
//     fib2 = nextFib;
//     console.log(fib1)
// }

// function fibonacci (n) {
//     let fib1 = 0, fib2 = 1, nextFib = 0;
    
//     for(let i = 2; i < n; i++) {
//       nextFib = fib1 + fib2;
//       fib1 = fib2;
//       fib2 = nextFib;
//     }
    
//     return nextFib;
//   };

// console.log(fibonacci(1))



// function fibonacci(n) {
//     if (n <= 1) {
//       return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log("test start")
// console.log(fibonacci(42));





//!memoize fibonacci number

// const memoFib = memoize(function(n){
//     if(n < 2) return n;
//     return memoFib(n - 1) + memoFib(n - 2)
// });

// function memoize(fn){
//     const cache = {};
//     return (n)=>{
//         if(cache[n] === undefined){
//             cache[n] = fn(n)
//         }
//         return cache[n];
//     }
// }
// console.log(memoFib(70))
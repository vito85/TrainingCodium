//Последовательность Падована
//1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12, 16, 21, 28, 37, 49, 65, 86, 114, 151, 200, 265
//P(0) = P(1) = P(2) = 1
//P(n) = P(n-2) + P(n-3)


// const num = 32;
// function padovan (num) {
//    let secondPrev = 1, pPrev = 1, pCurr = 1, pNext = 1;
//    for (let i = 3; i <= num; i++){
//       pNext = secondPrev + pPrev;
//       secondPrev = pPrev;
//       pPrev = pCurr;
//       pCurr = pNext;
//      // console.log(pCurr)
//    };
//   return pNext;
// };

// for(let i = 0; i < 50000; i++){
//     console.log(i)
// }

// let a = 1 ; 
// let sum = 1 ;

// while(a <= 10){
//     sum = 2*sum;
//     a++
// }
// console.log(sum)

let n = 5;
let factorial = 1 ;

for(let i = 1 ; i <= n; i++){
    factorial = factorial*i;
}
console.log(factorial);



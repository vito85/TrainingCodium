// // Գրել ֆունկցիա, որը վերադարձնում է տրված թվի բաժանարարների քանակը։

// function a(num){
//     let count = 0;

//     for(let i= 1; i <= num ; i++) {
//         if(num % i === 0) {
//             count ++
//         }
//     }
//     return count;
// }

// console.log(a(14)) // 14-ի բաժանարարների քանակը 4:


// const arr = [[2, 3], [14, 15], [21, 22], [26, 27], [33, 34], [34, 35], [38, 39], [44, 45]] ; 

// function chekItem(num1 , num2){
//     let count1 = 0;
//     let count2 = 0;
//     for(let i = 1; i <= num1; i++) {
//         if(num1 % i === 0) {
//             count1++
//         }
//     }

//     for(let i = 1 ; i <= num2; i++){
//         if(num2 % i === 0) {
//             count2++
//         }
//     }
     
//     if(count1 === count2) return true ; 
//     else
//         return false;
// }

// function arrCheck(arr) {
//     let count = 0 ;
//     for(let i = 0; i < arr.length; i++){
//         let currentItem = chekItem (arr[i][0] , arr[i][0])
//         if(currentItem) {
//             count++
//         }
//     }
//     return count;
// }

// console.log(arrCheck(arr))


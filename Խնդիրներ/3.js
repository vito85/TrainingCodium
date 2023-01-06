//գրել ֆունկցիա, որը վերադարձնում է true եթե թիվը պարզ է , և false հակառակ դեպքում։


// function isSimple (n) {
//     if (n === 1 || n === 0) {
//         return false;
//     } else {
//         for(let i = 2; i < Math.sqrt(n); i++) {
//             if(n % i === 0) {
//                 return false;
//             }
//         }
//         return true;  
//     }
// }

// console.log(isSimple(21))



// // Դուրս բերել 1 ից մինչև n բոլոր պարզ թվերը ։ (օպտիմալ ալգորիթմ)։

// let n = 101;

// for (let i = 2; i <= n; i++) {
//     let flag = 1;

//     if (i > 2 && i % 2 != 0)
//     {
//         for (let j = 3; j*j <= i ; j=j+2)
//         {
//             if (i%j==0)
//             {
//                 flag=0;
//                 break;
//             }
//         }
//     }
//     else if (i != 2) flag = 0;

//     if (flag==1) {console.log(i);}
// }
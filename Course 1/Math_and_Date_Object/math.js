//============================== Math Object ======================================



//1.

// let z = 18.9;
// let z1 = Math.floor(z)
// console.log(z1)

//2.

// let y = 14.2
// let y1 = Math.ceil(y)
// console.log(y1)



//3.

// let x = 14.50;
// let x1 = Math.round(x)
// console.log(x1)



//Function Random

// let one = Math.random();  //[0,1)
// let two = Math.random();
// let three = Math.random();

//   console.log(one,two,three);


//same randomly number from same range


// function random(a,b){
//     const diff = b - a + 1
//     return Math.floor(Math.random()*diff + a)
// }


//console.log(random(100,1000))

//  const numbers = [];

// for(let i = 0; i < 10; i++){
//     numbers.push(random(100,600))
// }

//   console.log(numbers)

//!=========================================================================
//if you need to choose some element from collection 

// function random(a,b){
//     const diff = b - a + 1
//     return Math.floor(Math.random()*diff + a)
// }
//  const  names = ["Ruben","Armen","Vahe","Artak","Gor","Artur","Anzhela","Vlad","Lilya","Satenik","Martin","Gagik","Stepan","Vitali","Arman"]

// function extractRandom(arr){
//     const index = random(0,arr.length - 1);
//     return arr.splice(index,1).shift()
// }

//  console.log(extractRandom(names))

//  console.log(names)


//example
// function magic(question){
//     return Math.random() > 0.5
// }

// const question = "Can i help you ?"
// let result = magic(question)? "Yes" : "No";

// console.log(`${question}  ${result}`)




//! Լցնել դատարկ մասիվը [100,200] միջակայքում գտնվող
//! 10  պատահական թվերով , որից հետո 
//! դուրս բերել մասիվում առկա ամենամեծ թիվը։

//==========================================================



// Max and Min functions

// let max = Math.max(12,56,89,15,200,45,6);
// let min = Math.min(12,56,89,15,200,45,6);

// console.log(`Maximum value is ${max}`);
// console.log(`Minimum value is ${min}`);


//Maximum in array

// const arr = [15,65,53,54,28];
// let max = Math.max(arr[0],arr[1],arr[2],arr[3],arr[4]);
// console.log(max)


//Variebles and destructurization

// const nums = [54,98,65,45,67];

//  let[one,two,three] = nums;
//  let max = Math.max(one,two,three);
//  console.log(max)
//  console.log(one, two , three)

//spred operator ES6

// const arr = [15,2,4,53,54,28,25,78,0,56,33];
// let arr1 = [...arr];
//  //arr1[2] = "Armen"

//  console.log(arr[1] === arr1[1])
//  console.log(arr1)
//  let max = Math.max(...arr)
//  console.log(max)




// function random(a,b){
//     const diff = b - a + 1;
//     return Math.floor(Math.random()*diff) + a;
// }

// const arr = [];

// for(let i = 0; i <= 10; i++){
//     arr.push(random(100,200))
// }

// console.log(arr);
// let max = Math.max(...arr);
// console.log(`Maximum valye is ${max}`);


//Power and Sqrt functions

// console.log(Math.pow(3,4));
// console.log(Math.sqrt(25));
// console.log(Math.cbrt(-27));

//in ES6 pow is **
 //console.log((-3)**5)


//Constant

// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.SQRT2)




//! գրել ֆունկցիա, որը ստանում է որպես արգումենտ շրջանագծի շառավիղ R
//! և վերադարձնում է շրջանի մակերեսը և շրջանագծի երկարությունը։
//! Արտահայտել ամբողջ թվով, կլորացնել դեպի ներքև։

//R
//S = pi*(r**2)
//L = 2*pi*r


// function circle(r){
//     let s = Math.PI * (r**2);
//     let l = Math.PI * r * 2;
//     return `s = ${Math.floor(s)} , l = ${Math.floor(l)}`
// }

// console.log(circle(4))




//Գտնել ֆունկցիա որը ստանում է, որպես պարամետր իրարից պրաբոլով առանձնացված ստրինգ 
// և մասիվ, որի էլէմենտները ստրինգներ են: Գտնել մասիվում առկա բառերը ստրնգում 
//և փոխարինել այդ բառի սինվոլների քանակի ասղանիշներով։


// let str = "barev armen vonc es "
// let arr =  ["armen", ]

// "barev  ***** vonc es"






// function changStr(str){
//     let str1 = "";
//     for(let i = 0; i <str.length; i++){
//         str1 = str1 + "*"
//     }
//     return str1;
// }

// console.log(changStr("artakqwe"))




// let str = "barev dzez narek es Hay em narek" ;
// let aray = ["narek","barev"];

//  let obj = {};


// for(let i = 0; i< aray.length; i++){
//     if(obj[aray[i]] === undefined){
//         obj[aray[i]] = 1;
//     }else {
//         obj[aray[i]]++
//     }
// }

//  console.log(obj)



//  let arr = str.split(" ")
//   console.log(arr)



// for(let i = 0; i < arr.length; i++){
//     if(obj[arr[i]]){
//         arr[i] = changStr(arr[i])
//     }
// }
//   console.log(arr)
//   console.log(arr.join(" "))



//   const obj1 = {a:1,b:2,c:3,k:{d:4,e:5}}
//  const obj2 = structuredClone(obj1)

  //const obj3 = {...obj1}
//   console.log(obj1)
// console.log(obj3)

//     obj2.k.d = 10
//    console.log(obj1)
//   console.log(obj2)
//  console.log(obj2.k.d, obj3.k.d)




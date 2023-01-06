//!============================ Arrays in JS ======================================

const { validate } = require("uuid");

//empty array

// let user = [];
// console.log( user);


//Create not empty array

//  let user1 = [15,"Armen",true , 25];

// //console.log(user1[2])

//  //user1[8] = "Karen";
//  //console.log(user1[8])

//  console.log(user1);

//  user1[1] = "Poghos";
//  console.log(user1)

//! Էլեմենտները կամ կանստրուկցիաները կոչվում են օբյեկտներ, 
//!եթե նրանք ունեն առնվազն մեկ ստատիկ հատկություն և առնվազն մեկ մեթոդ:

//Object type: massive has a ONE static property: length



//  let user1 = [15,"Armen",true,25];

// // console.log(user1);

//  user1.length = 100;
//  console.log(user1);

//  user1[78] = "Poxos"
//  console.log(user1);

//  user1[99] = "abc";
// console.log(user1);

//  delete user1[1];
// console.log(user1.length);
// console.log(user1);

//  user1.length = 3
//  console.log(user1)


//for in array

// let array1 = ["a","b","c"];
// array1[5] = "X";
// console.log(array1);

// for(let i = 0; i < array1.length; i++){
//     console.log(i + ": " + array1[i])
// }

//if not need undifined element

// for(let i in array1){
//     console.log(i + ": " + array1[i])
// }





//Methods of Array's

//let arr1 = [1,12,122,"a",false,"b"]
//console.log(arr1)

// console.log(a===b)

//let arr2 = arr1.toString();
 //console.log(arr2)

// let arr2 = arr1.join("$")
// console.log(arr2)

// let a = [1 ,15];
// let b = [2 , 15,6];

// let arr = a.concat(b);
// console.log(arr);


// let c = [1,2,3,4,5,6,7,8,9,10,11];
// console.log(c);

// let d = c.slice(6)
// console.log(d)

// let z = c.slice(2,5); //[a,b)
// console.log(z)

// let z = c.slice(3 , 15)
// console.log(z)

//=================================================================

// let d = [1,2,3,4,5,6];
// console.log(d);
// let f = d.reverse();
// console.log(f);


// let d = [15,255,31,40,52,6,29,36,112,521];
// console.log(d);
// let f = d.sort();
// console.log(f); //sort as strings

//if we want sort as NUMBERS
// function mysort(a,b){return a - b}
// d.sort(mysort);
// console.log(d)

// d.sort(function (a,b){return a - b})
// console.log(d)

// d.sort((a,b)=> a - b)
// console.log(d)


//!ClassWork
// Գրել ծրագիր, որը կգտնի տրված թվային զանգվածի մեծագույն արժեքը։
//let d = [15,255,31,40,52,6,734,29,36,112,521];




//!pop,push,shift,unshift

// let a = [15,"abc",71,true];
// console.log(a);
// let v = a.pop();
// console.log(v);
// console.log(a)


//let a = [15,"abc",71,true];
// console.log(a);
// console.log(a.length);
// a.push(56);
// console.log(a);

// let v = a.push(56)
// console.log(v)



// let a = [5 , "abc" , 71];
// console.log(a);
// let b = a.shift();
// console.log(b);
// console.log(a)


//unshift add element and return new length

// let a = [15 , "abc" , 71];
// console.log(a);
// let b = a.unshift(15 , "ABC", true,"hello")
// console.log(a)
// console.log(b)



 //let a = [5,"abc",71,"def",150,25,false,"hello"];
// console.log(a);
// let b = a.splice(2,1);
// console.log(b);
// console.log(a)

// let c = a.splice(2 , 0 , 555)
// console.log(a);
// console.log(c)

// console.log(a);
// let d = a.splice(1,2,25,55)
// console.log(a);
// console.log(d);




//!Object Math

// let a = Math.PI;
// console.log(a);

// console.log(Math.pow(2,4));
// console.log(2**4)
// console.log(Math.sqrt(16))
// let b = Math.cbrt(-27);
// console.log(b);


//!ClassWork
//b մասիվիը լցնել a մասիվի թվերի քառակուսիներով ; 
// let a = [2,3,4,5];
// let b = [];
//console.log(b) -> [4,9,16,25]


// function func(){
//     let a = [];
//     for(let i = 0; i < 3; i++){
//         a.push(function(){console.log(i)})
//     }
// return a;    
// }

// let x = func();
// console.log(x);
// x[0]();
// x[1]();
// x[2]();


//!forEach

// let num = [1,2,3,4];
// let res = num.forEach((x)=>console.log(x*10));


// let array = ["a","b","c"];
// array.forEach(function(element ,index,a){
//     console.log(a , index , element)
// })


//map:

// let num = [1,2,3,4,5];
// let res = num.map(function(v){
//     return v*v
// });
// console.log(res)

//let arr = [1,2,3,4,5,6];
// let a = arr.every(function(val){
//     return val < 17
// })

// console.log(a)

// let c = arr.some(function(val){
//     return val < 17
// })
// console.log(c)



//methode filter

// let arr = [1,2,3,4,5,6];
// let d = arr.filter(function(val){
//     return val < 5
// })
// console.log(arr)
// console.log(d)


//Reduce Example 1
// let arr1 = [1,3,5,7,9];
// let res = function(arr){
//     let sum = 0;
//     arr.forEach((element) => {
//         sum += element;
//     });
//     return sum;
// }
// console.log(res(arr1))


// let arr1 = [1,3,5,7,9];
// let a = arr1.reduce((agregat,currentval)=>{
//     return agregat + currentval;
// },0)
// console.log(a)



//Reduce Example 2

// let arr2 = [
//  {
//     name:"Aram"
//  },
//  {
//     age:25
//  },
//  {
//     status:"Net Admin"
//  }
// ]

// let a = arr2.reduce((agregat,currentval)=>{
//     if(currentval.name !== undefined){
//         agregat.name = currentval.name;
//     }
//     if(currentval.age !== undefined){
//         agregat.age = currentval.age;
//     }
//     if(currentval.status !== undefined){
//         agregat.status = currentval.status;
//     }
//     return agregat;
// },{})
// console.log(a)


//! Խնդիր 1․ 
//!Տրված զանգվածից ստանալ թվային զանգված , որից հետո այդ զանգվածից հեռացնել
//!բոլոր բացասական թվերը, այնուհետ սրտավորել։
//!Օգտվել parsFloat() և sort() ֆունկցիաներից։

//let arr = ["25em","18pt","50px","-15px","-25em","65px"];


//! Խնդիր 2.
//!Ստանալ մասիվ, որի էլեմենտները կլինեն [-2,6] և [3,-1] միջակայքի բոլոր ամբողջ թվերը։
//օրինակ՝ [3,-1] => [-1, 0 , 1 , 2, 3]
// [-2,6] => [-2,-1,0,1,2,3,4,5,6]
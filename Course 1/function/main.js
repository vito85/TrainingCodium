//todoo:// function declaration && expression


// declaration


    // function hello(){
    //     console.log("barevner")
    // }

//  hello();
//  hello();

// function func(a, b, c) {
//   c = 0 || c
//     console.log(a + b + c)
// } 

//  func(4,5)
 //func(10,39,40,29)



//! expression
// console.log(x)
  
//    let x =  function hello(){
//         console.log("barevner")
//     };
    
    



//function argumnet

// function poghos(age ){
//      //age = age || "agumnet missed"

//     console.log("I am a " + age + " years old")
// }

// //  //poghos(30);
//   poghos(34);




//function with many argumnet

// f(x,y) = x*2 + y
// f(2,4) 



// function hello(name , age){
//      name = name || "AAA";
//      age = age || 100;
//     console.log("My name is " + name + 
//     " and I am a " + age + " years old")
// }

//  // hello("Armen");



//   //hello();

// hello(null , 55)



//return


// function sum(a1 , a2) {
//    let z = a1 + a2
//     return a1 + a2 ; 
//     // console.log()
// }
//console.log( sum(4) )
// //  sum(0,7)

// //  console.log(sum(12,8))

//  var res = sum(3,5) ;
//  console.log(res)
//  console.log(sum(4,6))













// function modul(num) {
//   return (num < 0)? (-1) * num : num
//   }
  


// console.log(modul(9))


// // console.log(modul(-5));
// // console.log(modul(18));
//  console.log(modul(0))





//? 1. function sum(n){}; 1-n summary


// ? 2. function fact(n){}  // 1*2*3* ....n

// function fact(n){
//   if(n === 0 || n === 1){
//     return 1;
//   }else if(n > 1){
//     let res = 1;
//     for(let i = 1 ; i <=n ; i++){
//       res = res * i // res *=i
//     }
//       return res;
//   }else {
//     return "chi kareli hashvel bacasakan tvi factorial"
//   }
// }
// console.log(fact())

//? 3. function power(a,b){} a^b ; power(3 ,4) -> 81



//! --------------------------------------------------------

// function modul(num){
//   return (num < 0)? -num : num
// }


// function pow(a , b) {
//   let res = 1
// if(a == 0 && b == 0){
//   return "Sahmanvac chi"
// } else if (b <= -1) {
//     for(let i = 1 ; i <= modul(b);i++){
//       res = res * a;
//     }
//     return 1/res
// }else {
//   for(let i = 1 ; i<=b ; i++){
//     res = res * a
//   }
//   return res;
// }
// }
//  console.log(pow(-3,2))




// local variables 

// let message = 10
// function sms() {
//   var message = "Hi"
//     console.log(message)
// }
// //console.log(message)
//  sms() 

// console.log(message)

//local in for 


// function count(){
//     for(let i = 5; i < 10 ; i++){
//         let j = i*10;
//     }
//      console.log(i);
//      console.log(j);
// }

//   count();


// ուղղանկյան կողմերի երկարությունը բնական թվեր են։
//գտնել ուղղանկյան կողմերի այն արժեքները, որոնց դեպքում
//մակերեսը հավասար է պարագծին։
// a*b = 2(a + b) 

// for(let a = 4; a < 10000; a++){
//   for(let b = 1 ; b < 10000 ; b++){
//     if(a * b === 2 * (a + b)){
//       console.log(`a = ${a} , b = ${b}`);
      
//     }
//   }
// }

//!=============================================================

// read code 


// function sum(){
//     var s = 0;
//     for(var i = 0; i <=5 ; i++){

//         if(i == 2 ){
          
//             continue;
//         }
//         s += i ; // s = s + i
//     }
    
//      return s;
// }

// console.log(sum())


//!Global and local Variables

 //var x = 100 ; 

// function func1(){
//     //let x = 13
//     function func2(){
//         let x = 12
//         console.log(x)
//     }
//     func2();
// }
// console.log(x)
// func1()



// function fibonacci(n){
//     let fib1 = 1;
// let fib2 = 1;
// let nextFib;

// for(let i =0; i < n ; i++){
//     console.log(fib1)
//     nextFib = fib1 + fib2;
//     fib1 = fib2;
//     fib2 = nextFib;
    
// }
// }
// //console.log(fib1)
// fibonacci(5)



// var name = "Karen";
// var user = "Martiros";

// function sms() {
//     let name = "Poghos";
//      user = "Petros";
//     name = "My name is " + user
//     console.log(name)
    
// }

//  //sms();
//   console.log(user);// 
//  console.log(name) // my name is poghos // karen 





// var s = 10;
// var i = 20;

// do {
//     i +=s; // i = i + s
//     console.log(i)
// } while (i < 20);






//! Տեսանելության տիրույթ ։ 


// var x = "XX";
// var y = "YY";
// function tiruyt(){
   
//     console.log(x); // 
//     x = "x";
//     console.log(y);  // 
//     var y = "y";
// }

 //tiruyt();
//  console.log(x);
//  console.log(y);



// var y = 100;

// function aaa(x){
//     if(x){
//         y = 10;
//         console.log(y)
//     } else {
//         y = 2;
//         console.log(y)
//     }
// }

// //aaa(5);
// //aaa();
// //aaa("");
//  //aaa(undefined);
// aaa(false);


  //console.log(typeof function(){} )



//  var x = "X";
//  var y = "Y";

//  function tiruyt(){
//     console.log(x)   // "X"
//     x = "Poghos";
//      y = "yx";
//     console.log(y);  //"yx"
    
//             function nerqin(z){
//                 console.log(x); //poghos
//                 console.log(y); // undef
//                  var y = " _y";
//                 console.log(z)  // z
//             }
//             nerqin("z")
//  }

//   tiruyt();
//   console.log(x); 
//   console.log(y);


// return function 


//--------------------
// function func(){

//     return function(x){
//         console.log(x);
//     }
// }


// //   var z = func();
// //   // console.log(z)

// //  z("hello")

//   func()("45")



// local parameter

// function say(x){

//     return function(y){
//         return x + " " + y
//     }
// }

//   var h = say("hello");
//   //console.log(h)

//    console.log(h("students"))


//! ES6 let, var , const


// if(true){
//     //1.
//     //const x = 10;
//     //2. 
//     //let x = 1;

//     console.log(x);

// }
// console.log(x);



//for example in loop

//let 

// for(let i = 1; i <= 3 ; i++){
//     console.log(i)
// }

//   console.log(i)

//var

// for(var i = 1 ; i< 3 ; i++){
//     console.log(i)
// }

//   console.log(i)


//   var x = 22;


// if("a"){
//     //var
//     var x = 11;
//     console.log(x); 
   

// }

//  console.log(x) // 



// var y = 150;
// console.log(y);
// var y = 250;
// console.log(y)


// if(true){
//     var x = "One";
//     if(true){
//         var x = "Two";
//         console.log(x) //...?
//     }
//     console.log(x) //...?
// }
   

// x = "hello";
// x = 150;
// console.log(x)
// let x;



//const VS let

// console.log(num);
// const num = 150;





// function sum(){
//     var t = 1;
//     for(let i = 1; i <= 6; i++){
//         if(i==4){
//             continue;
//         }
//         t *= i; // t = t * i
//     }
//     console.log(t)
// }

//  sum()


//!==========================================================

//! in ES6 we can creat function with default value

// function text(word1, word2){
//     word1 = word1 === undefined? "Petros" : word1
//     word2 = word2 === undefined? "Petrosyan" : word2
//     console.log(`hello ` + word1 + " " + word2)
// }
// text("Armen","Nahapetyan")


// function hello(name = "hayer"){
//     console.log("Barev," + name)
// }

// //hello();
// //hello(undefined);
// //hello(null);
// hello(false);
// hello(0)
// hello("")




// outer();
// function outer(){
//     console.log(x);
// }
// let x = "Hello";

//outer();


//!замыкание функции // Closure

//Example 1


// function counter(count = 0){
//    return function(){
//         console.log(++count)
//     }
// }

// //1.
//  let hashvich = counter();
//    //console.log(hashvich);
//   hashvich();
//   hashvich();
//   hashvich();

// // //2.
//  let hashvich1 = counter();
//  hashvich1();
//  hashvich1();


//Example 2.

// function counter(number, count = 0){
//     return function(){
//         console.log(number, ++count)
//     }
// }

//   let hashvich = counter(1,100);
//   let hashvoch1 = counter(2, 200);

//  hashvich();
//  hashvich();
//   hashvoch1();
//  hashvoch1();


// let x = 0;
// function counter(name){
//     return function(){
//         console.log(name,++x)
//     }
// }
// let hashvich = counter("One");
// let hashvich1 = counter("Two");

//  hashvich();
//  hashvich();
//   hashvich1();
//   hashvich1();


// function creatElement(name){
//     let count = 0;
//     return function(){
//         console.log(name , ++count)
//     }
// }

//   let march = creatElement("March");

//   let april = creatElement("April")

//   march();
//   march();
//   march();
//  april();
//  april();
//  april();


// let count = 100;
// let foo = function(){
//     console.log(count++)
// }

//  foo();
//  foo();
//   count = 0;
//  foo();
//  foo();
//   console.log(count)


//Example

// var sum = 0; 
// function add(count){
//    sum += count; //sum = sum +count

//    return sum
// }

//   add(2);
//   add(4);
//   add(6);
//   console.log(sum)


// var x = 10;
// function artaqin(){
//     function nerqin(){
//         console.log(++x)
//     }
//     return nerqin;
// }

// artaqin()()

//   let y = artaqin()
// // //console.log(y)
//  y();
//  y();
//  y();



//! ==================== Arrow and Callback Functions ========================


// function getSumm(){
//     console.log(15 * 20)
// }

//  getSumm()


// let f = function (){
//     console.log(25 + 30)
// }

// f()

//! ================  Arrow Function in ES6  ========================

// function say(x){
//     console.log("Barev " + x)
//     console.log(`barev  ${x}`)
// }
// say("hayer");

// let say = (x)=> {
//   console.log(`Barev ${x}`)
//   console.log("asd")
// }
    

//  say("hayer")


// let pow = (x)=>{
//     console.log(x * 100)
// }
// pow(5)


// let pow1 = x=>{
//     console.log(x * 100)
    
// }

//  pow1(10)


// let sum = (x , y , z)=>{
//     console.log(x * y + z)
// }

//   sum(4,5,6)

// if we use return

// let sum1 = (x, y ,z) =>{
//     return x*y*z
// }
//   console.log(sum1(4,5,6))

// let sum2 = (x,y,z)=> x*y*z;
// console.log(sum2(4,5,6))


//! ======================= CallBack Function ===================================

// function arajin(){
//     console.log("I am the first")
// }

// function erkrord(){
//     console.log("I am the second")
// }

//  arajin();
//  erkrord();





// function arajin(y) {
    
//     console.log(`i am a first`)
//     y();
   
// }

// function erkrord(){
//     console.log(`I am a second`)
// }

//   arajin(erkrord)


// function arajin(y){
//     console.log(`I am a first`)
//     y()
// }

// function erkrord(a , b){
//     console.log(a * b)
// }

//arajin(erkrord); // ....?
//arajin(erkrord(4 , 5))
//  arajin(function(){return erkrord(5,5)})
//  arajin(()=>erkrord(4,5))  // ES6, Arrow function




// web API setTimeout

// function arajin(){
//     setTimeout(function(){console.log("I am a first")} , 0)
// }

// function erkrord(){
//     console.log("I am a second")
// }

//  arajin();
//  erkrord();




//! Պայմանի օպերատոր if / else ;

// if(7 < 4) {
//     console.log("barev")
//     console.log("Armen")
// } else  {
//     console.log("Barev Gagik")
// }




// var age = 3 ; 

// if( age > 18 && age < 63) {
//     console.log("Chapahas");
// }
//      else if(age == 30 ) {
//         console.log("Anchapahas")
//     }

// if(age == 4) {
//     console.log("my age is " + age)
// }
//  else {
//     console.log("shat Poqr")
//  }



// var book = "math";

// if(book == "Economics"){
//     console.log("Economics book")
// } else if(book == "Philosophy"){
//     console.log("Philosophy book")
// } else if(book === "math") {
//     console.log("Math book")
// } else{
//     console.log("Unknown Book")
// }


//  var x = 5;
// if(x > 10){
//     console.log("YES")
// }
// else {
//     console.log("NO")
// }

// (x > 5) ? console.log("Yes") : console.log("NO");






//!Loop while, for do while

// var x = 0 ; 

// while(x <= 10 ){
//     console.log(x);
//     x ++  // x = x + 1 
// }


//  console.log("Hello")

// let x = 10;
// do {
//     console.log("barev")
//     x = x+1
// } while (x < 8);





//? Գտնել 1-100 գումարը ։ 


//? Ցիկլի օգնությամբ հաշվել 2-ի 10 աստիճանը ։ 



// Հետպայմանով ցիկլ


// var count = 0;
// do {
//     console.log("Current count is" + count);
//     count++ //count = count + 1 
// } while (count > 5);



// for ցիկլ ; 


// for(var i = 1 ; i <= 5 ; i++){
//     console.log(i)
// }

// console.log(i)




//! if in for && break and continue







// for(let i = 0; i <= 16; i++){
//     if(i == 15){
//         console.log("hello")
//     }
//     console.log(i)
    
// }











//? Դուրս բերել 1-30 միայն զույգ թվերը։






//? Խնդիր

// var age;
// age < 18 -> anchapahas
//  age >= 18 < 63 -> ashxatox
// age > 63 -> toshakaru



//break , continue 







// let x = 50;

// for(var i = 0; i <=10 ; i++) {
//     if(i == 5 || i == 8) {
//         continue;
//     }
//    //let y = x + 10
//     console.log(i)
//     //console.log(y)
// }





// var k = "";

// for(var i = 0; i < 100 ; i++){
//     if(i == 5){
//         continue;
//     }
//     k = k + "\n number is " + i;  
// }

// console.log(k)



//?  Ցիկլի միջոցով հաշվել 1-1000 թվերի շարքում բոլոր այն թվերի ՔԱՆԱԿԸ որոնք,
//? բաժանվում են  17 ի


//? Ցիկլի միջոցով 1-50 թվերի շարքում դուրս բերել բոլոր թվերը, բացի 
 //? նրանցից որոնք բաժանվում են 19 ի։











//? 1-1000 թվերի շարքում դուրս բերել 7 -ի վրա բաժանվող 123-րդ թիվը:

// let count = 0;
// for( var i = 7 ; i <=1000;i = i + 7){
//     if( i % 7 === 0){
//         count++
//     }
//     if(count === 123){
//         break;
//     }
    
// }
// console.log(i)



// var x = 10

// //? if i ==0














// let count = 0
// for(let i = 1; i <= 1000 ; i++){
//     if(i % 7 == 0){
//         count++
//     }
//     if(count === 123){
        
//         console.log(i)
//         break;
       
//     }
     
// }



// let count = 0;
// for(let i = 1; i <= 1000; i++){
//     if(i % 17 === 0) {
//         count++
//     }
// }
// console.log(count)











//  1-1000 թվերի շարքում դուրս բերել 3-ի վրա բաժանվող թվերը։



//? Հաշվել 6-ի ֆակտորիալը։

// let res = 1 ;
// let n = 0 
// for(let i =1 ; i <= n; i++){
//     res = res * i;
// }
// console.log(res)


//! Ներդրված ցիկլեր




//  artaqin:
//     for(var i = 0; i < 8; i++) {
//         console.log("\n Artaqin cikl:" + i);

//         nerqin:
//             for(var j = 0; j < 7; j++) {
//                  if(j > 5) continue;
//                 //  if(i == 3) break nerqin;
//                 // if(i == 5 ) break artaqin;
//                 console.log("Nerqin cikl " + j)
//             }
//     }












    //? 1-101 թվերի շարքում դուևս բոլոր պարզ թվերը։













    // 1-10000 թվերի շարքում դուրս բերել բոլոր կատարյալ թվերը

    
    









    



    
    
    
    //  let n = 101;
    

    // simploop:
    // for(let i = 2; i <= n ; i++) {

    //     for(let j = 2 ; j < i ; j++){
    //         if(i % j == 0) {
                
    //             continue simploop}
           
    //     } 
    //     console.log(i)
    // }

    
// let n = 10 ;

// loop:
// for(let i = 2; i <=n ; i++){
//     for(let j = 2 ; j <i; j++){
//         if(i % j === 0) {
//             continue loop;
//         }
        
//     }
//     console.log(i)
// }





















//todoo:// function declaration && expression

// declaration


//     function hello(){
//         console.log("barevner")
//     }

//  hello();



// expression


//    var x =  function (){
//         console.log("barevner")
//     };

//     x();



//function argumnet

// function poghos(age){
//     // age = age || "agumnet missed"

//     console.log("I am a " + age + " years old")
// }

// poghos(30);
// poghos();




//function with many argumnet

// f(x,y) = x*2 + y
// f(2,4) 



// function hello(name,age){
//     // name = name || "AAA";
//     // age = age || 100;
//     console.log("My name is " + name + 
//     " and I am a " + age + " years old")
// }

// // hello("Armen" , 15);

// //  hello();

// hello(null , 55)



//return


// function sum(a1 , a2) {
//     return a1 + a2 ; 
//     // console.log(100)
// }

// sum()

// console.log(sum(12,8))

// var res = sum ; 






// function modul(num) {
//     return (num < 0) ? -num : num ; 
// }

// console.log(modul(-5));
// console.log(modul(18));
// console.log(modul(0))





//? 1. function sum(n){}; 1-n summary

// ? 2. function fact(n){}  // 1*2*3* ....n

//? 3. function power(a,b){} a^b ; power(3 ,4) -> 81





// local variables 


// function sms() {
//     var message = "Hi" ; 
//     console.log(message)
// }
// sms();


// console.log(message)



//local in for 


// function count(){
//     for(var i = 5; i < 10 ; i++){
//         var j = i*10;
//     }
//      console.log(i);
//      console.log(j)
// }

// count();
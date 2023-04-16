//1.
// let res = (5 && 2) || (6 && 0);
// console.log(res);  // ...






//2.
// let obj = {
//     value:2019
// }

// function func(){
//     this.value = 2018
// }

// func.call(obj)
// let  res = obj.value;
// console.log(res);  // ..??

//3.
 //console.log(Number("") + 1);  // ...??


//4.
// let funk = (obj)=>{
//     obj.null
// }
// let obj = {
//     name:"Codium"
// }


// console.log(obj.name)

//5
// let arajin = [1,2,3];
// let erkrord = [1,2,3];

// console.log(arajin == erkrord)  // ...???


//6
// for(var i = 0; i < 3 ; i++){
//     setTimeout(()=>{
//         console.log(i)
//     },0)
// }


//7.
// function User(name){
//     this.name = name;
//     // return {
//     //     surname:"Petrosyan"
//     // }
// }

// let user = new User("Petros")
// console.log(user.name) // ...??

//8
// var res = 2022;
// var out = 2023;
// (function(){
//     out = res; 
//     var res = 2021
// })();

// console.log(out)

//9
// const parameters = [1,2,3,4,5,6];
// const res = Math.max.apply(7, parameters);
// console.log(res)  // ...??



//9.1 
// const parameters = [1,2,3,4,5,6];
// const res = Math.max(...parameters);
// console.log(res)

//9,2 
// let a = Math.max() < Math.min();
// let b = Math.max() > Math.min();
// console.log(a);
// console.log(b);
// console.log(Math.min())

//10
// const arrProto = Array.prototype.push;
// const arajin = [2022,2023];
// const erkrord = [2020,2021];
// console.log(arrProto.apply(erkrord,arajin))


//11
// let str = Object.prototype.toString;
// let res = str.call(null);
// console.log(res);


//12
// function func(){
//     return arguments.join("");
// }

// let res = func(1,2);
// console.log(res)  //... ??


//13
// let obj = {}
// console.log("toString" in obj)


//14
// let arajin = 2019;
// let erkrord = new Number(arajin);
// console.log(arajin === erkrord)

//15.

// let res = 2019;
// let funk = (x = 2020)=>{
//     res = x;
// }
// console.log(funk(null));


//16
// console.log(0 || 5 && 10 || 15)


//17
// class User{
//     constructor(){
//         this.name = name;
//     }
//     sayName(){
//         console.log("Codium");
//     }
// }

//  console.log(typeof User)


//18
// let arr = [1,5,7,10]
// console.log(7 in arr)


//19
// function func(x, y = 10){
//     return x + y;
// };
// let res = func(50);
// console.log(res);



//20
// let arr = [2019 , "December", 14]
// let [arajin, ...verjin] = arr;
// let res = verjin[0];
// console.log(res);

//!============================================
//21.

// let value1 = 2019;
// delete value1;
// let value2 = value1;
// console.log(value2);




//22.
 //console.log(null && undefined);




//23.
 //console.log("hello" > "barev");


//24.
// let arr = [2,2,2];
// let map = (i,j)=>i*j;
// let res = arr.map(map)
// console.log(res)


//25.
// const arr = new Array(10);
// const res = arr[1];
// console.log(res);


//26.
// let obj = new Object();
// let res = obj.__proto__ instanceof Object;
// console.log(res);


//27
// let res = [5,6,7,8,9,10];
// let val = res.splice(1,2);
// console.log(res);
// console.log(res.splice(1,2,...val))

//28
//  console.log(true > "false");




//29
// function func(x,y = 5){
//     return x + y
// }
// console.log(func(5, null))




//30
// let x = 2019;
// function func(){
//     func1();
//     return x;
//     function func1(){
//         x = 2020;
//     }
// }

//  console.log(func());


//31
// class Car {
//     static getname(){
//         return "BMW"
//     }
// };
// let car = new Car();
// console.log(car.getname())



//32
// let func = (x)=>{
//     let y = x * 10
// }

// console.log(func(5));

//33
// (function(){
//     setTimeout(()=>console.log(1),2000);
//     console.log(2);
//     setTimeout(()=> console.log(3), 0);
//     console.log(4)
// })()


//34.
// let a = 3;
// let b = -2;
// console.log(a > 0 && b < 0)



//35
// (function(x){
//     x++
//     return (function(y){
//         console.log(y + x)
//     })(2)
// })(1)





//36
// const a = [1,2,3];
// const b = [1,2,3];
// const c = console;

// c.log(a == b); 
// c.log(a === b);
// c.log(a === [1,2,3]);
// c.log(a == [1,2,3]);




//36
// function multiplier(factor){
//     return function(number){
//         return number * factor
//     }
// }
// var t = multiplier(2);
// console.log(t(5));




//37.
// let arr = [17,5,10];
// console.log(arr.reduce((acc,currvalue)=>{
//     acc = currvalue % acc;
//     return acc
// },7))




//38
// let a ={x:1};
// let b ={x:2};
// let c ={x:3};
// let arr = [a,b,c];
// arr.forEach((obj)=>{
//     obj.x += 1
// })
// console.log(a.x , b.x , c.x)



//39
// function increment(){
//     num++
//      return num
// }
// function decrement(){
//     num--
//     return num
// }
// let num = 10;
// increment();
// decrement();
// increment();
// increment();
// decrement();
// console.log(num)


//40
// var x = false;

// if(x = true){
//     console.log("true")
// }else{
//     console.log("false")
// }

//41
//var x;
//console.log(typeof undefined === "undefined");


//42
// let x = 0;
// let y = 2;
// let z = ++x && y++
// console.log(z)
// console.log(y)

//43
// var x = 10
// function count(n){
//     console.log(n)
// }
// count(x++);
// count(++x)



//40
// function a(){
//     let b = c = new Number(3) 
//     console.log(b)
   
   
// }
// a()
// console.log(typeof b )


// const a = {
//   b : false , 
//   toString() {
//       if (this.b) {
//           return false ; 
//       }
//       this.b = true ;
//       return true ; 
//   }
// }


//  console.log(a== true && a == false )





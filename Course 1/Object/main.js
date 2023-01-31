//!===================== objects =================================
//empty object

  //let dimord = {};
// console.log(dimord);



// let dimord1 = new Object()
// console.log(dimord1);




// console.log(typeof dimord); //type object

//  dimord.anun = "Petros";
//  dimord.azganun = "Petrosyan";
//  dimord.tariq = 18 ;
//  dimord["status"] = "SysAdmin";
//  console.log(dimord);

//  dimord.anun = "Aram";
//  console.log(dimord);

// console.log(dimord.anun);
// console.log(dimord.azganun);
// console.log(dimord.status);


//Create not empty object

//  let user = {name:"Armen",age:33,position: "admin"};

//  console.log(user);
//  user.pashton = "Administrator";
//  console.log(user);

//  console.log(user.status);


// let obj = {"user name":"Armen",
//             var:15, 
//             25:"tariq",
//             15:"hasce",
//             position:"Netadmin"
//         }



//console.log(obj);
//console.log(obj."user name"); ///  /?
//console.log(obj.var); // ...?
//console.log(obj.25)


//  console.log(obj["user name"]);
// // console.log(obj["var"]);
//  console.log(obj["25"])
//  console.log(obj[25]);
//  console.log(obj[15])


//are there that property

// let obj = {"user name":"Armen",
//             var:15, 
//             25:"tariq",
//             15:"hasce",
//             position:"Netadmin"
//     };

//  console.log(obj);
//  console.log("15" in obj);
//  console.log("30" in obj);
//  console.log("user name" in obj)




// var x = 15;

// delete x;
// console.log(x)

// let y = 12 ;


//new delete property x

// let user = {name:"Armen", x:14}
// console.log(user)
// delete user.x
// console.log(user)



//! loop on object

//it's run only if our keys are ordered only NUMBER

// let user = {
//     1:"a",
//     2:"b",
//     3:"c",
//     4:"d"
// }

// for(let i = 1; i in user; i++){
//     console.log(i + ": " + user[i])
// }


//if our keys are net number
// us loop for in

// let user = {
//     "x":"dhffdh",
//     "y":"edfhdfh",
//     "z":"fdfhd",
//     "v":"edfhd"
// }

//  console.log(user);

// for(let i in user){
//     console.log(i + ": " + user[i])
// }







//ClassWork
//! Ստեղծել երկու օբյեկտ , որը  նկարագրումա ձեզ։
//! առաջի դեպքում բանալիները  լինեն թվեր, երկրորդ դեպքում սթրինգներ
//! Ցիկլի միջոցով դուրս բերել ձեր տվյալները։ 






//==============================================================================


// let x = 20;
// let y = x ;
// x = 50;

// console.log(x)
// console.log(y)






//Objects calls with LINKS

// let obj = {a:10,b:20};
// let obj1 = obj ; 

//  obj.b = 30 ; 
//  obj1.a = 20 ; 

//  console.log(obj.a)
//  console.log(obj1.b)


//  console.log(obj)  // ...?
//  console.log(obj1) //...?
//  console.log(obj === obj1) // ...??


// let petros = {
//     surname:"Petrosyan",
//     age:20
// }

// let poghos = {
//     surename:"Poghosyan",
//     age:30
// }

//   let aram = petros;

// for(let i in aram){
//     console.log(aram[i])
// }

//  console.log(petros)
//  console.log(aram)
//  console.log(poghos)

//Տնային
//Ստեղծել 5 հատ օբյեկտ,որոնք ունեն հետևյալ բանալիները (key)
//name,age,addres,email,phone number: 
//Դուրս բերել բոլոր այն օբյեկտների բանալիների արժեքները (անունները) , որոնք 
//ունեն 18 ից փոքր տարիք;

//!===================================================================




//!Object methods

//  membrs and methods

// let user = {
//     "name":"Aram",
//     "age" : 25,
//     "position": "admin",
//     "method1" : function(text){

//         console.log(text + " from " + user.name)
//         console.log(text + " from " + this.name)
//     },

//      "method2": function(){console.log(this.age)},
//      "method3": tariq

// }

//  // console.log(user.name)
//   user.method1("hello")

// user.method2()

//  user.method3()

//function tariq(){console.log(this.age)}

 //tariq()


// let user1 = {
//     "age":35,
//     "method2" : tariq
// }

// user1.method2()


//2.


// var x = 100

// function func(){
//     console.log(this.x)
// }

// func()
// console.log(this)

// classWork
//Կազմեկ երկու օբյեկտ որոնց անուններ են book1 և book2,որոնք ունենք 
//հետևյալ հատկությունները և մեթոդը։
//մեթոդը վերադարձնում է բոլոր օբյեկտների հատկությունները։
//title , price , page_num  // membrs
// getInfo()  // method

// let book1 = {}
// let book2 = {}

// function getInfo(){}


//=========================================================




// let book1 = {
//     title:"HTML and CSS",
//     price: "30$",
//     page_num: 150,
//      getInfo: info
// }

// let book2 = {
//     title:"JS",
//     price: "60$",
//     page_num: 130,
//     getInfo: info
// }

//  function info(){
//           return this.title + ",  " + this.price + ", " + this.page_num
//        }



// function getInfo(){}

 //console.log(book1.getInfo())

// function info(){
//     return this.title + ",  " + this.price + ", " + this.page_num
// }




// let armen = {
//     "name":"Armen",
//     age:23,
//     method: function(word){
//         console.log(word + " from " + this.name)
//     }
// }

// let karen = {
//     name:"Karen",
//     age:25,
//     //1.2
//     //method1:armen.method
// }

// //1.1
// karen.method1 = armen.method;
// karen.method1("Barevner");
// karen.method1("hello")



// global object window
//1.1

//  let age = 100;

// function funk(){
//     console.log(this.age)
// }

// funk()



//2. context binding


// function funk(){
//     console.log(this)
// }

// let obj = {
//     name:"armen",
//     print: function(){
//         console.log(this)
//     }
// }

// funk();
// obj.print()
// console.log(obj)



//3

let car = {
    model:"Audi",
    mark:"Q7",
    color:"white"
}

function getInfo(){
    console.log(`
        model: ${this.model}
        Mark: ${this.mark}
        color: ${this.color}
    `)
}

//getInfo()

//console.log(getInfo.bind(car))  // return another functio

//getInfo.bind(car)()



//4
 //getInfo.call(car);


//5

 //getInfo.apply(car,[]);




//function length

// function func() {

  
//     return func.length
// }

// console.log(func())

//! Այն կանստրուկցիաները որոնք ունեն առվազան մեկ ստատիկ հատկություն և
//! առնվազն մեկ դինամիկ հատկություն (մեթոդտ) կոչվում է օբյեկտ։

//========================================================================//

// var parametr = 100;
// let o = {
//     parametr:10,
//     method: function (){
//         //let x = this;
//          let test= ()=>{
//             console.log(this.parametr)
//             //console.log(x.parametr)
//         }
//         test()
//     }
// }

// o.method(); //...???

//=============================================================================

// function funk(){
//     console.log(this.name , this.age)
// }

// //object 1

// let armen = {
//     "name": "Armen",
//     age:23
// }

// //object 2

// let karen = {
//     "name":"Karen",
//     age:25
// }

// funk.call(armen)

// funk.call(karen)



//if function have parameters

// let armen = {
//     "name": "Armen",
//     age:233
// } 

// function funk(a){
//     console.log(this.name)
//console.log('HEllo world');
//     console.log(funk.length)

// console.log(arguments.length)
// }

// funk.call(armen,"Poghosyan",3)


//=============================================================

//recursia
// function a(n){
//   if(n>=1)
//   return n;
//   return a(n-1) + a(n-2)
// }

// console.log(a(6))

// const res = [0,1,2,3,4,5,NaN,false,"",undefined].filter((a)=> false)
// console.log(res);









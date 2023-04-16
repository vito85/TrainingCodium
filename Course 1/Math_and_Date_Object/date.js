//!========================= Date Object  ==========================

//1.
// let now = new Date();
// console.log(now);

//2.

// const year = 2007,
//      month = 0,
//      day = 1,
//      hours = 2,
//      minutes = 15,
//      seconds = 45;


     //let bd = new Date(year, month, day, hours, minutes, seconds)
   //console.log(bd);
// console.log()
// Get the parts of date

// bd.getFullYear();
// bd.getMonth(); // 0 -> january , 11-> Dectember
//  bd.getDate();
//  //bd.getDay(); // Week days , 0-> sunday , 6 -> suterday
//  bd.getHours();
//  bd.getMilliseconds();
//  bd.getTime();  // amount of milisecons from 1 january of 1970
//console.log(bd.getTime())

// set Date
// bd.setFullYear();
// bd.setMonth();
// //bd.setDate();
// //bd.setHours();
// bd.setMinutes();
// bd.setTime();

//   bd.setHours(22);
//  console.log(bd);

// bd.setDate(54)
// console.log(bd)


//Task: Recive rage of Dates;

// let start = new Date(2019,2,21);
// let end = new Date(2019,2,25);

// start = Date.parse(start);
//  console.log(start);

// end = Date.parse(end);
// //console.log(end - start);

// for(let i = start; i <= end ; i = i+ 24*60*60*1000){
//     console.log(new Date(i))
// }


//Format a Date object as a string
// let now = new Date();

// function formatDate(date) {
//     var monthNames = [
//       'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
//     ];
  
//     let day = date.getDate();
//     let monthIndex = date.getMonth();
//     let year = date.getFullYear();
  
//     return monthNames[monthIndex] + ' ' + day + ', ' + year;
//   }
  
//   console.log(formatDate(now)); // Output: 



// function isNahanj(year){
// let start = new Date(year,0,1);
// let end = new Date(year,11,31);
// let countDay = (Date.parse(end) - Date.parse(start))/1000/60/60/24  + 1

//   return countDay
// }
// console.log(isNahanj(451))

//!======================== JSON Format ================================
//!=========== JavaScript Object Notation ======================

//Methods
//1. JSON.parse
//2. JSON.stringify


//parse
//Example

//1.
//  let num = `["gurgen",2,3]`
//  console.log(num);
//   num = JSON.parse(num);
//   console.log(num);
//   console.log(num[0])


//2.
//  let admin = `{"anun":"Poghos","tariq":"25","pashton":"NetAdmin"}`;
//  console.log(admin);
//  admin = JSON.parse(admin);
//   console.log(admin);


//STRINGIFY
// //
// JSON.stringify({});  // `{}`
 //JSON.stringify(true);  // `true`
// JSON.stringify(`hello`);  // "`hello`"
 //JSON.stringify({x:15,y:25})// `{"x":15,"y":25}
// JSON.stringify([1,2,"admin"]) // `[1,2,"admin"]`

// console.log(JSON.stringify([1,2,"admin"]))
//1. 
// let tvyalner = {
//   "name":"Armen",
//   "age": 25,
//   "position":"admin",
//   "status": true
// }

//console.log( JSON.stringify(tvyalner))

//2.
// const admin = {
//   anun:"Armen",
//   tariq:25,
//   pashton:"NetAdmin"
// }
// console.log(admin);
// console.log(JSON.stringify(admin,["azganun","tariq","pashton"]))


//3.

// let admin = {
//   anun:"Martin",
//   tariq:24,
//   pashton:"NetAdmin",
//   pordz:{
//     sysAdmin:"3 tari",
//     netAdmin: "5 tari"
//   }
// }

//  console.log(admin);
//  let x = JSON.stringify(admin, " ",3)
//  console.log(typeof x);


// JSON to XML
//https://www.freeformatter.com/json-to-xml-converter.html


//!========================= Date Object  ==========================

//1.
// let now = new Date();
// console.log(now);

//2.

// const year = 1985,
//      month = 4,
//      day = 14,
//      hours = 2,
//      minutes = 15,
//      seconds = 45;


//  let bd = new Date(year, month, day, hours, minutes, seconds)
//  console.log(bd);
// console.log()
// // Get the parts of date
// bd.getFullYear();
// bd.getMonth(); // 0 -> january , 11-> Dectember
// bd.getDate();
// bd.getDay(); // Week days , 0-> sunday , 6 -> suterday
// bd.getHours();
// bd.getMilliseconds();
// bd.getTime();  // amount of milisecons from 1 january of 1970


// set Date
// bd.setFullYear();
// bd.setMonth();
// bd.setDate();
// bd.setHours();
// bd.setMinutes();
// bd.setTime();

// bd.setHours(22);
// console.log(bd);

// bd.setDate(54)
// console.log(bd)


//Task: Recive rage of Dates;

// let start = new Date(2019,2,21);
// let end = new Date(2019,2,25);

// start = Date.parse(start);
// console.log(start);
// end = Date.parse(end);
// console.log(end);

// for(let i = start; i <= end ; i = i+ 24*60*60*1000){
//     console.log(new Date(i))
// }

//!======================== JSON ================================
//!=========== JavaScript Object Notation ======================
 //19 // 1.30//
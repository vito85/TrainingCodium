//!====================================  String Methods ================================================ 
// String length
// String slice()
// String replace()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String charAt()
// String charCodeAt()




// let srt =` Hello Armen llllo`;

// let count = 0;
// for(let i = 0; i < srt.length; i++){
//     if(srt[i] === "L"){
//         count++
//     }
// }

// console.log(count)






// let text = "hello      ";
// let length = text.length;



// console.log(length);


// let text = "Hello Armen";
// let part = text.slice(2,7); 

//  console.log(part)

// console.log(text)




// let text = "Hello Armen jan Armen";
// let newText = text.replace("Armen", "Narek");
// console.log(text)
// console.log(newText)



// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();
// console.log(text2)




// let text1 = "Hello World!";       
// let text2 = text1.toLowerCase();
// console.log(text2)





// let text1 = "Hello";
// let text2 = "World";


// let text3 = text1.concat(" ",text2);

//  console.log(text3)



// let text1 = "      Hello World!      ";
// let text2 = text1.trim();

//  console.log(text1)
//  console.log(text2)





//  let text1 = "     Hello World!     ";
// let text2 = text1.trimStart();

// console.log(text1)
// console.log(text2)




// let text = "HELLO WORLD";
// let char = text.charCodeAt(0);

// //console.log(char)

// console.log("a" > "D")
// console.log("}".charCodeAt())


// let text = "HELLO WORLD";
// text[0] = "A";

// console.log(text)


//! split() method:

// let str = "HelloArmen";
// let str1 = str.split("")
// console.log(str1)


// let str = "Hello Armen";
// let str1 = str.indexOf("e")
// console.log(str1)


// գրել ֆունկցիա որը կվերադարձնի
// true եթե տրված տեքստը պոլինդրոմ է , հակառակ դեպքում false


// function isPolindron(text){
//     let text1 = text.toLowerCase()
//     let str = text1.split("")
//     str1 = str.reverse().join("");
//     if(str1 === text1){
//          return true
//     }else {
//         return false
//     }
// }

// console.log(isPolindron("AnnA"))

// const x = function(n){
//     if(n!= 4)
//     x(n+1)
//     console.log(n)
// }
// x(5)

// x(1) -> 1 ; x(2)-> 2 ; x(3) - > 3


//1-1000 թվերի շարքում հաշվել բոլոր այն թվերի քանակը,
// որոնք պարունակում են 3 թվանշանը:

// function is3(num){

//    let   srt = num + "";
//     return srt.split("").includes("3")
// }

// let count = 0
// for(let i = 1 ; i <=1000 ; i++){
//     if(is3(i)){
//         count++
//     }
// }

//console.log(count)




// let a = [1,2,3].reduce((a,b,c) =>a+b+c ,"")

// console.log(a)



//???



// function getElement(str){
//     for(let i = 0 ; i < str.length; i++){
//         if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
//             return str[i];
//         }else {
//             return "chkrknvox element chka"
//         }
//     }
// }









//let str = "absdfgfhjjf"
// let count = 0;
// function getElement(str){
//     for(let i = 0; i <str.length; i++){
//         count++
//         if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
//             return  `${str[i]}  loop count is ${count}`
            
//         }
//     }
//     return "not found"
// }

// console.log(getElement("baass"))

//
// let str = "ababsdfgfhjjf";
// let obj = {}

// for(let i = 0; i < str.length; i++){
//     if(obj[str[i]] === undefined){
//         obj[str[i]] = 1;
//     } else{
//         obj[str[i]] ++
//     }
// }

// let arr = Object.entries(obj)

// for(let i = 0; i < arr.length; i++){
//     if(arr[i][1] === 1){
//         console.log(arr[i][0])
//         break;
//     }
// }

// console.log()





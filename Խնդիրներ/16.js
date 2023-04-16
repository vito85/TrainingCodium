// Реализовать функцию, которая находит наибольшую общую 
// последовательность (НОП) двух строк Написать функцию, 
// которая принимает две строки и возвращает наибольшую общую 
// последовательность (НОП) двух строк. 
// Например, если входные строки "ABCDGH" и "AEDFHR", 
// то функция должна вернуть строку "ADH".







let str1 = "AABCDGH";
let str2 = "AEDFHR";
let str = "";
const obj = {};

for(let i = 0; i < str2.length; i++){
    if(obj[str2[i]] === undefined){
        obj[str2[i]] = true
    }
}

for(let i = 0 ; i < str1.length; i ++){
    if(obj[str1[i]]){
        str = str + str1[i];
    }
}
console.log(str)
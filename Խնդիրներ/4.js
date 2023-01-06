// հաշվել 1-10000 միջակայքում գտնվող բոլոր կատարյալ թվերը։

let n = 6 ; 

let arr = [];

for(let i = 1; i < n; i++){
    if(n % i === 0){
        arr.push(i)
    }
}

let arrSum = 0;

for(let i = 0; i < arr.length; i++){
    arrSum = arrSum + arr[i];
}

if(arrSum === n) {
    console.log("kataryal tiv")
} else {
    console.log("kataryal che")
}

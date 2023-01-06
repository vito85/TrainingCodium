//Տրված ստրինգի ֆիլտրել պռաբելով առանձնացված թվերը և սորտավորել ըստ այդ թվերի քաշի։

// const str = "191 20 200 99 31 22 44 667 7789 345 8";

// let arr = str.split(" ").sort((a,b)=>a-b);

// let obj = Object.entries(arr);

// let weightArr = []; 
// let result = []; 

// for(let i = 0; i < obj.length; i++){
   
//     obj[i][0] = weightElement(obj[i][1])
//     weightArr.push(obj[i][0])
// }

// weightArr.sort((a,b)=> a-b);

// for(let i = 0; i < obj.length; i++){
//     for(let j = 0; j < weightArr.length;j++){
//         if(weightArr[i] === obj[j][0]   ){
//           result.push(obj[j][1])
//            delete obj[j][0]
            
//         }

//     }
    
   
// }

// console.log(result)

// function weightElement(num){
//     let weightNum = 0;
//     const arr = num.split("");

//     for(let i = 0; i < arr.length; i++){
//         weightNum = weightNum + Number(arr[i])
//     }

//     return weightNum;
// }


//////////////////////////////////////////////////
// use function localeCompare for string

function sums(numstr) {
    return numstr.split('').reduce((total,c) => total += +c, 0);
  }
  
  function order(str) {
    return str.split(' ').sort((a,b) => {
      if(sums(a) === sums(b)) {
        return a.localeCompare(b)
      } else {
        return sums(a) - sums(b)
      }
    })
  }

  console.log(order("123 345 43"));
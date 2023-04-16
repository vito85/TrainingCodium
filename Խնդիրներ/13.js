// Ունենալով երկու ամբողջ թվերից բաղկացած a, b զանգավծներ և v թիվը,
//  գտեք՝ արդյո՞ք գոյություն ունի այնպիսի թվերի զույգ, 
//  որտեղ առաջին թիվը վերցված է a զանգվածից, 
//  երկրորդ թիվը վերցված է b զանգվածից և այդ թվերի գումարը հավասար է v-ի: 
//  Վերադարձրեք true, եթե այդպիսի զույգ գոյություն ունի և false,
//  եթե այդպիսի զույգ գոյություն չունի:

// const a = [4, 2, 5, 60, 11, 9, 15];
// const b = [67, 12, 0, 2, 11, 0];
// let v = 22;


// const obj = b.reduce(function(aggr, value) {
//   aggr[value] = true;
//   return aggr;
// }, {});

// console.log(obj);






// function sumPairExists(a, b, v) {
//     const obj = b.reduce(function(aggr, value) {
//         aggr[value] = true;
//         return aggr;
//     }, {});
    
//     for(let i = 0; i < a.length; i++) {
//       let target = v - a[i];   
//       if(obj[target] === true) {
//          return true;   
//       }
//     }
//     return false;
// }

// console.log((sumPairExists([4, 2, 5, 60, 11, 9, 15], [67, 12, 0, 2, 11, 0], 22)));


//2
function check (a,b,v){
    let res;

    for(let i = 0; i < a.length; i ++){
        if(b.includes(v - a[i])){
            res = true;
            break;
        }else{
            res = false;
        }
    }

    return res;
}

console.log(check([1,2,3],[3,2,1],5))






// const a = {
//   b : false , 
//   valueOf() {
//       if (this.b) {
//           return 6 ; 
//       }
//       this.b = true ;
//       return 5 ; 
//   }
// }

// console.log(new Number(5) == "5")


//    console.log(a == 5 && a == 6 )


// const a = new Map()
// a.set({"a":4},4)
// a.set("b",5)
// let x = Symbol(5)
// let y = Symbol(5)
// console.log()

// const c = {
//     name: "Mihran",
//     ["id"]: 10
// }

// console.log(c["id"])




// let x =  Symbol("art")
// let y = Object(x)
// console.log(x.description)
// console.log(x)
// console.log(typeof x)

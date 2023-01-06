//Տրված է թվերից կազմված մասիվ։ Ստանալ նոր մասիվ, որի էլեմենտները կլինեն հակառակ տրված մասիվի ելեմենտները հակառակ նշանով։

const arr = [1,-2,3,-4,5];






function getNewArr(arr){
    let arr1 = [];

    for(let i = 0; i < arr.length; i++){
       arr1.push(arr[i] * -1)
    }
    return arr1;
}




//дан два массив чисел и число. найти все возможные комбинации 
//чисел в  массив сумма которого    равен данному числу

//"Количество методов суммирования".
 


// function findCombinations(arr1, arr2, target) {
//     let count = 0;
  
//     // считаем количество методов суммирования
//     for (let i = 0; i < arr1.length; i++) {
//       for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] + arr2[j] === target) {
//           count++;
//         }
//       }
//     }
  
//     // генерируем все комбинации, удовлетворяющие количеству методов суммирования
//     let result = [];
//     for (let i = 0; i <= count; i++) {
//       for (let j = 0; j <= i; j++) {
//         let k = i - j;
//         if (j <= arr1.length && k <= arr2.length) {
//           let combination = [...arr1.slice(0, j), ...arr2.slice(0, k)];
//           if (combination.reduce((acc, curr) => acc + curr, 0) === target) {
//             result.push(combination);
//           }
//         }
//       }
//     }
  
//     return result;
//   }
  
//   // пример использования функции
//   console.log(findCombinations([1, 2, 3,4,5,6,7,8,9], [2, 5, 7,1,2,3,4,5], 8)); // [[1, 7], [2, 2, 3], [3, 5]]



  //2
  // function findCombinations(arr1, arr2, n) {
  //   let set = new Set(arr2);
  //   let result = [];
  
  //   for (let i = 0; i < arr1.length; i++) {
  //     let x = n - arr1[i];
  //     if (set.has(x)) {
  //       result.push([arr1[i], x]);
  //     }
  //   }
  
  //   return result;
  // }
  // console.log(findCombinations([1, 2, 3,4,5,6,7,8,9], [2, 5, 7,1,2,3,4,5], 8))
 
  //console.log(findCombinations([1, ,4, 2, 3], [0,2, 5, 7,8], 8));
   // [[1, 7], [2, 6], [3, 5]

  //  let a = new Set([2,3,4,5,6,7])
  //  console.log(a.has(8))

  const arr1 = [1, 2, 3,4,5,6,7,8,9];
  const arr2 = [2,4,5,6]
  let target = 8;

     let count = 0;
  
    // считаем количество методов суммирования
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] + arr2[j] === target) {
          count++;
        }
      }
    }

    console.log(count)
//Реализовать функцию, которая генерирует все перестановки заданной строки
// Написать функцию, которая принимает строку и возвращает 
// массив всех возможных перестановок этой строки.
//  Например, если входная строка "ABC",
// то функция должна вернуть массив ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"].


// алгоритмом рекурсивной генерации перестановок. 
//Кратко алгоритм можно описать следующим образом:

//1. Если строка пустая, вернуть пустой массив.
//2. Если строка содержит только один символ, вернуть массив с этим символом.
// Для каждого символа строки:
// Рекурсивно сгенерировать все перестановки оставшейся части строки.
// Добавить текущий символ к каждой из сгенерированных перестановок.
// Добавить все полученные перестановки в массив результатов.

// function getPermutations(str) {
//     if (str.length === 0) {
//       return [];
//     } else if (str.length === 1) {
//       return [str];
//     } else {
//       const result = [];
//       for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         const remainingChars = str.slice(0, i) + str.slice(i + 1);
//         const permutations = getPermutations(remainingChars);
//         for (let j = 0; j < permutations.length; j++) {
//           result.push(char + permutations[j]);
//         }
//       }
//       return result;
//     }
//   }
  
// const input = "ABC";
// const output = getPermutations(input);
// console.log(output); // ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]




//!алгоритм Backtracking (возврат к предыдущему состоянию).
//1. Начинаем с начального состояния, где все символы строки еще не рассмотрены.
//2. Выбираем следующий символ из оставшихся нерассмотренными.
//3. Добавляем выбранный символ к текущей перестановке.
//4. Рекурсивно вызываем функцию для оставшихся символов.
//5. После выхода из рекурсии удаляем добавленный символ и 
// возвращаемся на шаг 2 для выбора следующего символа.

// function getPermutations(str) {
//     const result = [];
//     backtrack(str.split(""), 0, result);
//     return result;
//   }
  
//   function backtrack(arr, start, result) {
//     if (start === arr.length) {
//       result.push(arr.join(""));
//     } else {
//       for (let i = start; i < arr.length; i++) {
//         [arr[start], arr[i]] = [arr[i], arr[start]]; // swap
//         backtrack(arr, start + 1, result);
//         [arr[start], arr[i]] = [arr[i], arr[start]]; // swap back
//       }
//     }
//   }
  
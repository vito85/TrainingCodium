// треугольник паскаля 
//Каждый элемент треугольника является суммой двух элементов,
// расположенных над ним, с исключением крайних элементов, которые равны 1.

function pascal(num) {
    const triangle = [];
    for (let i = 0; i < num; i++) {
      const row = [];
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          row.push(1);
        } else {
          row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
        }
      }
      triangle.push(row);
    }
    return triangle;
  }
  
  console.log(pascal(6));
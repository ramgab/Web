/* 1) Треугольник. Напишите цикл, выводит такой треугольник: */

let str = "#";
while (str.length<=7){
    console.log(str + "\n");
    str+="#";
}

/* 2) FizzBuzz. Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. 
Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5. */

for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0)
      output += "Fizz";
    if (n % 5 == 0)
      output += "Buzz";
    console.log(output || n);
}

/* 3) Шахматная доска. Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. 
На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска */

let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}
console.log(board);

/* 4) Минимум. Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них. */

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
}
console.log(min(5, 2))

/* 5) Считаем бобы. Символ номер N строки можно получить, добавив к ней .charAt(N) ( “строчка”.charAt(5) ) – схожим образом с получением
длины строки при помощи .length. Возвращаемое значение будет строковым, состоящим из одного символа (к примеру, “к”). 
У первого символа строки позиция 0, что означает, что у последнего символа позиция будет string.length – 1. 
Другими словами, у строки из двух символов длина 2, а позиции её символов будут 0 и 1.
Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество символов “B”, содержащихся в строке.
Затем напишите функцию countChar, которая работает примерно как countBs, только принимает второй параметр — символ, 
который мы будем искать в строке (вместо того, чтобы просто считать количество символов “B”). Для этого переделайте функцию countBs */

function countChar(string, ch) {
    var counted = 0;
    for (var i = 0; i < string.length; i++)
        if (string.charAt(i) == ch)
        counted += 1;
    return counted;
}
console.log(countChar("ihwhehudhhh", "h"));

/* 6) Сумма диапазона. Напишите функцию range, принимающую два аргумента, начало и конец диапазона, и возвращающую массив, 
который содержит все числа из него, включая начальное и конечное.Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. 
Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.В качестве бонуса дополните функцию range, 
чтобы она могла принимать необязательный третий аргумент – шаг для построения массива. Если он не задан, шаг равен единице. 
Вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]. Убедитесь, что она работает с отрицательным шагом так, 
что вызов range(5, 2, -1) возвращает [5, 4, 3, 2]. */

function range(start, end, step) {
    if (step == null) step = 1;
    let array = [];
  
    if (step > 0) {
      for (let i = start; i <= end; i += step)
        array.push(i);
    } else {
      for (let i = start; i >= end; i += step)
        array.push(i);
    }
    return array;
  }
  function sum(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++)
      total += array[i];
    return total;
  }
  console.log(sum(range(1, 10)));
  console.log(range(5, 2, -1));
 
/* 7) Обращаем массив вспять. Напишите две функции, reverseArray и reverseArrayInPlace. 
Первая получает массив как аргумент и выдаёт новый массив, с обратным порядком элементов. 
Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в том массиве, 
который был ей передан в качестве аргумента. Не используйте стандартный метод reverse. */
function reverseArray(array) {
    var output = [];
    for (var i = array.length - 1; i >= 0; i--)
      output.push(array[i]);
    return output;
  }
  
function reverseArrayInPlace(array) {
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
        var old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

  console.log(reverseArray(["A", "B", "C"]));
  var arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);




  /* rgr */

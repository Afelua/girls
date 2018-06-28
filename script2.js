var array = [ 'Маша', 'Даша', 'Катя'];
// глобальная переменная, есть доступ из любой части программы

// массив - несколько однотипных данных
// нумерация элементов с нуля
console.log(array[0]); // первый элемент
console.log(array[1]); // второй элемент
console.log(array[2]); // третий элемент


// функция без параметров
function showArray(){
  // Тело функции
  console.log(array);
}

showArray();

// функция с параметрами

function showArrayWithValues(values){
  console.log(values);
}

var my_array1 = [0, 30, 39, 90];
var my_array2 = ['мама', 'папа', 'брат'];
var my_array3 = [ true, false, true, false];

showArrayWithValues(my_array1);
showArrayWithValues(my_array2);
showArrayWithValues(my_array3);



// Функция с несколькими параметрами

function showTwoArrays(array1, array2){
  console.log(array1);
  console.log(array2);
}

showTwoArrays(my_array1, my_array2);


function Perimetr(a, b){
  console.log(2 * a + 2 * b);
}

Perimetr(3, 4);
Perimetr(10, 20);


function myFunc(){
  // локальная переменная
  // доступны только внутри самой функции
  var count = 10;
  console.log(count);
}

myFunc();

// объявление объекта
var user = {
  name: 'Андрей',
  surname: 'Иванов',
  age: 25,
  isAdmin: true

}

console.log(user);


// var объект = {
//   ключ1: значение1,
//   ключ2: значение2,
//   ключ3: значение,
// }

// объект.ключ1 ИЛИ объект['ключ1']
// объект.ключ2 ИЛИ объект['ключ2']


var student = {
  gerMarks: function(){
    return 5;
  }
}


// функция внутри объекта = это метод объекта

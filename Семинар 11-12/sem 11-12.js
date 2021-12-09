// Решены все задачи, кроме звездочек

/* 1) Создайте объект city1 (var city1 = {}), укажите у него свойства name (название города, строка) 
со значением «ГородN» и population (населенность города, число) со значением 10 млн */

let city1 = {};
city1.name = "ГородN";
city1.population = 10000000;

console.log("название: " + city1.name + " " + "население: " + city1.population);

/* 2) Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}. */

let city2 = {name: "ГородM", population: "1e6"};
console.log("название: " + city2.name + " " + "население: " + city2.population);

/* 3) Создайте у объектов city1 и city2 методы getName(), которые вернут соответствующие названия городов */

function getName(){
    return this.name;
}

city1.getName = getName;
city2.getName = getName;
console.log(city1.getName());
console.log(city2.getName());

/* 4) Создайте методы exportStr() у каждого из объектов. Этот метод должен возвращать информацию о городе в формате 
«name=ГородN\npopulation=10000000\n». Для второго города будет строка со своими значениями. 
Примечание: можно обращаться к каждому свойству через цикл for/in, но методы объекта возвращать не нужно */

function exportStr() {
    return this.name + "\n" + "population=" + this.population + "\n";
}

city1.exportStr = exportStr;
city2.exportStr = exportStr;  
console.log(city1.exportStr());
console.log(city2.exportStr());

/* 5) Создайте глобальную функцию getObj(), которая возвращает this. А у каждого из объектов city1 или city2 метод getCity, 
который ссылается на getObj. Проверьте работу метода. Примечание: к объекту вызова можно обратиться через this. */

function getObj (){
    return this 
}
 
city1.getCity = getObj;
city2.getCity = getObj;
console.log("Название: " + city1.getCity().name + " " + "население: " + city1.getCity().population);
console.log("Название: " + city2.getCity().name + " " + "население: " + city2.getCity().population);

/* 7) Создайте массив d1 с числовыми величинами 45,78,10,3. Добавьте в массив d1 еще одно число ( d1[7] = 100). 
Выведите в консоль весь массив и его элементы с индексами 6 и 7. */

let d1 = [45, 78, 10, 3];
d1[7] = 100;
console.log(d1[6])
console.log(d1[7])

/* 8) Создайте массив d2 с числовыми величинами 45,78,10,3. Посчитайте в переменную sum2 сумму чисел в нем, при помощи цикла for. */

let d2 = [45, 78, 10, 3];
let sum3 = 0;
for(let i in d2){
    sum3 += d2[i];
} 
console.log(sum3);

/* 9) Создайте массив d3 с числовыми величинами 45,78,10,3. Добавьте в массив d3 еще одно число (например, d[7] = 100) 
Посчитайте в переменную sum3 сумму чисел в нем, при помощи цикла for/in. */ 

let d3 = [45, 78, 10, 3];
d3[7] = 100;
let sum4 = 0;
for(let i in d3){
    sum4 += d3[i];
} 
console.log(sum4);

/* 10) Создайте массив d4 с числовыми величинами 45,78,10,3. Напишите функцию сортировки my(a,b), 
которая при вызове d4.sort(my) отсортирует элементы массива по убыванию чисел. Вызовите d4.sort(my) */

let d4 = [45, 78, 10, 3];

function my(a,b){
    return (b - a)
}

console.log(d4.sort(my))

/* 12) Векторный тип. Напишите конструктор Vector, представляющий вектор в двумерном пространстве. 
Он принимает параметры x и y (числа), которые хранятся в одноимённых свойствах.
Дайте прототипу Vector два метода, plus и minus, которые принимают другой вектор в качестве параметра, 
и возвращают новый вектор, который хранит в x и y сумму или разность двух (один this, второй — аргумент)
Добавьте геттер length в прототип, подсчитывающий длину вектора – расстояние от (0, 0) до (x, y). */

function Vector(x, y) {
    this.x = x;
    this.y = y;
}

function plus(otherVector) {
    let x = this.x + otherVector.x;
    let y = this.y + otherVector.y;
    return new Vector(x, y);
};
function minus(otherVector) {
    let x = this.x - otherVector.x;
    let y = this.y - otherVector.y;
    return new Vector(x, y);
};
function toString() {
    return "Vector{x: " + this.x + ", y: " + this.y + "}";
}

Object.defineProperty(Vector.prototype, "length", {
    get: function () {
      return Math.sqrt(Math.pow(this.y, 2) + Math.pow(this.x, 2));
    }
})


Vector.prototype.plus = plus;
Vector.prototype.minus = minus;
Vector.prototype.toString = toString;

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);

/* 14) Разработайте интерфейс, абстрагирующий проход по набору значений. 
Объект с таким интерфейсом представляет собой последовательность, а интерфейс должен давать возможность в 
коде проходить по последовательности, работать со значениями, которые её составляют, и как-то сигнализировать о том, 
что мы достигли конца последовательности.

Задав интерфейс, попробуйте сделать функцию logFive, которая принимает объект-последовательность и 
вызывает console.log для первых её пяти элементов – или для меньшего количества, если их меньше пяти.

Затем создайте тип объекта ArraySeq, оборачивающий массив, и позволяющий проход по массиву с использованием разработанного вами интерфейса. 
Создайте другой тип объекта, RangeSeq, который проходит по диапазону чисел (его конструктор должен принимать аргументы from и to). */

function logFive(obj) {
    newArr = obj.slice(0, Math.min(5, obj.length));
    newArr.map(function(element){
            console.log(element);
    });
}

function ArraySeq(arr) {
        return arr;
}

function RangeSeq(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
   return arr;
}

logFive(ArraySeq([1, 2]));
logFive(RangeSeq(100, 1000));

/* 15) Создайте конструктор function Card(from, to){...}, создающий объекты карточки со свойствами from, to и методом show(), 
возвращающим свойства отдельного объекта в виде строки «from,to», где на месте названий свойств будут их значения. 
Создайте переменную c1 с городами Екатеринбург и Москва */

function card(from, to){
    this.from = from;
    this.to = to;
    this.show = function(){
        return `${this.from},${this.to}`;
    }
}

c1 = new card("Екатеринбург","Москва");
console.log(c1.show());

/* 16) Опишите класс Human: для создания объектов со свойствами name, age и height конструктор класса должен принимать одноимённые аргументы. 
Создайте массив humans из десяти объектов:

«Коля», 23, 180,
«Даша», 19, 170,
«Ваня», 18, 192,
«Петя», 45, 178,
«Вася», 34, 197,
«Джони», 40, 168,
«Катя», 37, 160,
«Петя», 29, 200,
«Соня», 21, 172,
«Женя», 25, 175

a. Укажите классу метод getInfo (он должен возвращать строки вида «Коля, 23, 180»), метод геттер firstname 
(он должен возвращать свойство name объекта) */

class Human {
    constructor (name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    }

    getInfo() {
        return `${this.name},${this.age},${this.height}`
    }

    get firstname(){
        return this.name;
    }
}

humans = [
    new Human("Коля",23,180),
    new Human("Даша",19,170),
    new Human("Ваня",18,192),
    new Human("Петя",45,178),
    new Human("Вася",34,197),
    new Human("Джони",37,160),
    new Human("Катя",37,160),
    new Human("Петя",37,160),
    new Human("Соня", 21,172),
    new Human("Женя",25,175)
]

console.log(humans);
console.log(humans[1].getInfo());
console.log(humans[2].firstname);

/* 18) Получите в переменную dt1 дату соответствующую 0:00, 1 января 2045 года, при помощи конструктора Date() */

dt1 = new Date(2045, 0, 1, 0, 0, 0);
console.log(dt1)

/* 19) В переменную dt2 найдите кол-во секунд, которое прошло с 1 января 1970 года по текущий момент. */

dt2 = Date.now() / 1000; 
console.log(dt2 + " с.");

/* 20) Напишите функцию getDays, которая принимает год и месяц (пусть январь будет — 1, февраль — 2 и т.д.), 
а возвращает количество дней в месяце */

function getDays(y, m) {
    return new Date(y,m,0).getDate();
}

console.log(getDays(2004, 01) + " дн.");
console.log(getDays(1999, 02) + " дн."); 
console.log(getDays(2021, 03) + " дн.");

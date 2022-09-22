'use strict';

//Array

// 1. Declaration
// 배열 선언 2가지
const arr1 = new Array();
const arr2 = [1, 2];


// 2. Index position
const fruits = ['사과', '딸기'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);                 // 사과
console.log(fruits[1]);                 // 딸기
console.log(fruits[2]);                 // undefined
console.log(fruits[fruits.length - 1]); // 딸기


// 3. Looping over an Array
// print all fruits

// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
// forEach 원래 형태
fruits.forEach(function (fruit, index, array) {
    console.log(fruit, index, array);
});

// 필요한 매개값만을 사용한 축약형
fruits.forEach((fruit) => console.log(fruit));


// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('바나나', '배');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('바나나', '배');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);
// note!! shift, unshift are slower than pop, push

// splice: remove an item by index position
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1, 0, '바나나', '사과');
console.log(fruits);

// conbine two arrays
const fruits2 = ['망고', '체리'];
const newfruits = fruits.concat(fruits2);
console.log(newfruits);


// 5. Searching
// indexOf: find the index
// 앞에서 부터 체크
console.log(fruits);
console.log(fruits.indexOf('바나나'));  // index: 1

// includes
console.log(fruits.includes('사과'));   // true
console.log(fruits.includes('망고'));   // false

// lastIndexof
// 뒤에서 부터 체크
fruits.push('배');
console.log(fruits.indexOf('배'));      // 0
console.log(fruits.lastIndexOf('배'));  // 4
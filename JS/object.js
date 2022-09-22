'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instance of Object
// object = {key : value};

// 1. Literals and properties

// 객체가 없을 때 일일이 지정 및 출략
// const name = 'ellie';
// const age = 4;
// function print(name, age) {
//     console.log(name);
//     console.log(age);
// }
// print(name, age)

// 객체의 사용으로 간편해진 코드
const ellie = {name: 'ellie', age: 4};
function print(person) {
    console.log(person.name);
    console.log(person.age);
}
print(elli);

// obejct 만드는 방법 2가지
const obj1 = {};                // 'object literal' syntax
const obj2 = new Object();      // 'object constructor' syntax

// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);


// 2. Computed properties
console.log(ellie.name);
console.log(ellie['name']);      // key로 값 가져오기
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    // console.log(obj.key);    //error
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');


// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = new Person('elile', 30);
console.log(person3);

// 4. Constructor function
function Person(name, age) {
    // this = {}; 가 생략됌
    this.name = name;
    this.age = age;
    // return this; 가 생략됌
}


// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);   // true
console.log('age' in ellie);    // true
console.log('random' in ellie); // false


// 6. for.. in vs for.. of
// for (key in obj)
console.clear();
for (key in ellie) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (value of array) {
    console.log(value);
}


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3 ...])
const user = {name: 'ellie', age: '20'};
const user2 = user;         // user의 reference를 가져옴
user2.name = 'sungpyo';
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user);
const user5 = Object.assign({}, user);
console.log(user4);
console.log(user5);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);    // 뒤에 것으로 덮어 씌어짐
console.log(mixed);
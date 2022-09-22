// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';
// console.log("hello world!");

// 2. Variable, rw(read/write)
// let (added in ES 6)
let globalName = 'global name';
{
    let name = 'sungpyo';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName)
}
console.log(name);
console.log(globalName)

// var (don't ever use this!)
// 1) var hoisting (move declaration from bottom to top) 어디에 있든 선언을 맨 위로 끌어 올림
// 2) has no block scope -> block을 무시

// 3. Constant, r(read only)
// use const whenver possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS

// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes


// 4. Variable types (2가지)
// 4-1) primitive, single item : number, string, boolean, null, undefined, symbol / value가 메모리에 저장
// 4-2) object, box, container / reference가 메모리에 저장
// function, first-class function

const count = 17;   // integer
const size = 17.1;  // decimal number
console.log('value : ', count, 'type: ', typeof count);
console.log('value : ', size, 'type : ', typeof size);

// number - special numeric values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n;
console.log('value : ', bigInt, 'type : ', typeof bigInt);

// string
const char = 'c';
const sungpyo = 'sungpyo';
const greeting = 'hello' + sungpyo;
console.log(`value : ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${sungpyo}`;
console.log(`value : ${helloBob}, type: ${typeof helloBob}`);
console.log('value : ' + helloBob + ' type : ' + typeof helloBob);

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value : ${canRead}, type: ${typeof canRead}`);
console.log(`value : ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value : ${nothing}, type: ${typeof nothing}`);

// undefined
let x = undefined; // or let x;
console.log(`value : ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 == gSymbol2); //true
console.log(`value : ${symbol1.description}, type: ${typeof x}`); // symbol을 출력할 때 description을 사용해 string으로 변환해야함

// object, real-life object, data structure
const ellie = {name: 'ellie', age : 20};
ellie.age = 11;
console.log(ellie.age);

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value : ${text}, type : ${typeof text}`);
text = 1;
console.log(`value : ${text}, type : ${typeof text}`);
text = '7' + 6;
console.log(`value : ${text}, type : ${typeof text}`);
text = '8' / '2';
console.log(`value : ${text}, type : ${typeof text}`);


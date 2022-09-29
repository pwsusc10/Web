// Promise: JS에서 제공하는 비동기를 간편하게 처리할 수 있도록 도와주는 object

'use strict';

// Promise is a JavaScript object for asynchronous operation.
// 1) state: operation을 수행중인지, 다 완료가 되어 성공했는지 실패했는지
// state: pending -> fulfilled or rejected
// 2) producer vs consumer의 차이
// Producer vs Consumer

// 1. Producer
// prose가 만들어지는 순간 네트워크 통신을 수행
// when new Promise is created, the excutor runs automatically.
const promise= new Promise((resolve, reject)=> {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(()=> {
        resolve('sungpyo');                 // 성공
        reject(new Error('no network'));    // 실패
    }, 1000);
});

// 2. Consumer: then, catch, finally
// value: resolve()의 data
promise
.then((value)=> {
    console.log(value);
})
.catch(error=> {
    console.log(error);
})
.finally(()=> {
    console.log('finally')
});

// 3. Promise chaining
const fetchNumber= new Promise((resolve, reject)=> {
    setTimeout(()=>resolve(1), 1000);
})

fetchNumber
.then(num=> num * 2)
.then(num=> num * 3)
.then(num=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(num - 1), 1000);
    });
})
.then(num=> console.log(num));


// 4. Error Handling
const getHen= ()=> 
    new Promise((resolve, reject)=> {
        setTimeout(()=> resolve('chicken'), 1000);
    });

const getEgg= hen=>
    new Promise((resolve, reject)=>{
        setTimeout(()=> reject(new Error(`error!`)), 1000);
    });

const cook= egg=>
    new Promise((resolve, reject)=> {
        setTimeout(()=> resolve(`${egg}=> fried egg`), 1000);
    });

// getHen()
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));

// return과 받을 parameter가 하나라면 생략 가능
getHen()    //
.then(getEgg)
.catch(error => {return 'bread';})
// .catch(console.log)
.then(cook)
.then(console.log);
// .catch(console.log);
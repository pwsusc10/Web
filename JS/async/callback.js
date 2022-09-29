'use strict';

// Javascript is synchronous
// Execute the code block in order after hoisting.
// hoisting: var, function declaration들이 제일 위로 올라가는 것

console.log('1');
// callback function: 우리가 전달해준 함수를 나중에 너가 불러줘!
// setTimeout(function() {
//     console.log('2');
// }, 1000);
setTimeout(() => console.log('2'), 1000);
console.log('3');


// Synchronous callback
function printImmediately(print){
    print();
};

printImmediately(()=> console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
};
printWithDelay(() => console.log('async callback'), 2000);


// Callback Hell examle
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() =>{
            if(
                (id === 'sungpyo' && password === '1234') ||
                (id === 'ajou' && password === 'univer')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    } 

    getRoles(user, onSuccess, onError) {
        setTimeout(() =>{
            if(user === 'sungpyo') {
                onSuccess({ name: 'sungpyo', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage= new UserStorage();
const id= prompt("enter your id");
const passwd= prompt('enter your password');
// userStorage.loginUser(id,)
userStorage.loginUser(
    id,
    passwd,
    user => {
        userStorage.getRoles(
            user,
            userWithRole=> {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {console.log(error)}
);

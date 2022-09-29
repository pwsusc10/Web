// Callback Hell examle
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                if(
                    (id === 'sungpyo' && password === '1234') ||
                    (id === 'ajou' && password === 'univer')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('아이디와 비밀번호가 일치하지않습니다'));
                }
            }, 2000);
        });
    }
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                if(user === 'sungpyo') {
                    resolve({ name: 'sungpyo', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        })
    };
}

const userStorage= new UserStorage();
const id= prompt("enter your id");
const passwd= prompt('enter your password');

userStorage
.loginUser(id, passwd)
.catch(console.log)
.then(userStorage.getRoles)
.then(user=> alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);
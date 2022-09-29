// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json= JSON.stringify(true);
console.log(json);

json= JSON.stringify(['apple', 'banana']);
console.log(json);

const rabit= {
    name: 'lala',
    color: 'pink',
    size: null,
    birthdate: new Date(),
    // javascript에만 있는 특별한 데이터와 함수는 json에 포함되지 않는다
    // symbol: Symbol("id"), 
    jump: () => {
        console.log(`${name} can jump!`);
    }
};
json= JSON.stringify(rabit);
console.log(json);

json= JSON.stringify(rabit, ["name", "color"]);
console.log(json);

json= JSON.stringify(rabit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'sungpyo' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();

let obj= JSON.parse(json);
console.log(obj);

rabit.jump();
// obj.jump();     // 함수는 없음

console.log(rabit.birthdate.getDate());
// console.log(obj.birthdate.getDate());       // rabit의 birthdate는 object인데 string으로 변환되어 전달되었기 때문


// 객체를 받아오기 위해 콜백함수 사용
obj= JSON.parse(json, (key, value) =>{
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthdate' ? new Date(value) : value;
});

console.log(obj);
console.log(obj.birthdate);


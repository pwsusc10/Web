'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES 6
// - syntatical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie);
console.log(ellie.name);
console.log(ellie.speak());

// 2. Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            throw Error('age can not be negative');
        }
        this._age = value;
    }
}

// const user1 = new User('Steve', 'job', -1);
// console.log(user1.age);

// 3, Fields (public, private)
// constructor 생성자를 사용하지 않음
// #은 private
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


// 4. Static properties and methods
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
// console.log(article1.publisher);     //error - static은 class에서 접근가능
console.log(Article.publisher);
Article.printPublisher();


// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw() {
        super.draw();   // 부모 클래스의 메소드 가져오기
        console.log('triangle');
    }

    getArea() {
        return (this.width * this.height) / 2;  // 오버라이딩
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);    // true
console.log(triangle instanceof Rectangle);     // false
console.log(triangle instanceof Triangle);      // true
console.log(triangle instanceof Shape);         // true
console.log(triangle instanceof Object);        // true
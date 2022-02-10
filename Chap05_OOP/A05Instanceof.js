
console.log('---------------- Instanceof -----------------');

function Person(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.display = function () {
    console.log(`${this.name} / ${this.age}`);
};

var nolbu = new Person('NolBu', 30);
nolbu.display();

//누구 객체를 상속 받아서 사용하는지 체크 가능
console.log(nolbu instanceof Person); //true
console.log(nolbu instanceof Object);  //true
console.log('');

const today = new Date();
console.log(today instanceof Person); //false
console.log(today instanceof Date); //true
console.log(today instanceof Object); //true
console.log('');

//생성자 메서드로도 체크 가능
console.log(nolbu.constructor);
console.log(today.constructor);
console.log('');

//in - 가지고 있는지 체크
console.log('name' in nolbu); //true - 속성이 있으니까
console.log('address' in nolbu); //false


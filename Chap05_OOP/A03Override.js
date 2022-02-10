
console.log('---------------- property shadowing -----------------');

function Person(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.display = function () {
    console.log(`${this.name} / ${this.age}`);
};

var nolbu = new Person('NolBu', 30);
nolbu.display();

//disply를 다른방식으로 찍기 위해 오버라이드하고싶다 (오버라이드 개념은 없음)

console.log(nolbu);
//추가 전에 디스플레이 찍으면 NolBu / 30 나옴
nolbu.display = function () {
    console.log(`My name is ${this.name}`); // 디스플레이가 추가 되어서 자기의 디스플레이 사용

};

console.log(nolbu);
nolbu.display(); // 자기한테 디스플레이 추가해서 My name is NolBu 나옴
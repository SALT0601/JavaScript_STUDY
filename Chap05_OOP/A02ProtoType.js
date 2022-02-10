
console.log('---------------- prototype chain -----------------');

function Jumsu(name, kor, eng) {  //생성자 메서드
    this.name = name;

};

Jumsu.prototype.onTotal = function () {
    return this.name;
};

const nolbu = new Jumsu('NolBu');
console.log(nolbu.__proto__);
console.log(Object.getPrototypeOf(nolbu));

console.log(nolbu.__proto__ === Jumsu.prototype);

const arr = [10, 11, 100];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

var one = {
    name: 'One',
    display: function () { console.log(this.name); }
};

var two = {
    name: 'Two'
};

var three = {};


console.log(two);
two.__proto__ = one;             //부모의 prototype을 one으로 변경

console.log(two);
two.display();    //two에는 디스플레이가 없는데 부모를 one으로 바꿔 one에 있는 디스플레이실행
// 자기영역에 이름이 있니 하고 이름이 있으면 자기거 가지고 없으먼 그 위의 부모거 찾고 또 업으면 그 위으 부모거찾고
//올라가다보면 오브젝트도 찾음

//프로토타입 기반의 상속은 부모를 바꿀 수 있다.

Object.setPrototypeOf(three, one); //three에 one 프로토 타입 대입
console.dir(three);
three.display;    //자기한테는 이름도 없고 디스플레이도 없어서 부모인 one의것 가져옴

three.name = 'Three';
three.display(); //이제 자기 네임 가져서 이름은 자기거 가져옴


function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

const hungbu = new Person('흥부');

const obj = {
    display: function () {
        console.log(`My name is ${this.name}`);
    },
    greet: function (x) {
        console.log(`Hello ${x}`);
    }
};

console.log(hungbu.getName());
Object.setPrototypeOf(hungbu, obj); //흥부의 오브젝트는 obj로 바뀜

hungbu.display()
hungbu.greet('향단')
 
//console.log(hungbu.getName());  //에러

//이렇게 동적으로 바꾸면서 쓸 수 있는것이 자바스크립트의 특징
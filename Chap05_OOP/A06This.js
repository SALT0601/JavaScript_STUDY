
console.log('---------------- Object this -----------------');
//this의 값은 호출하는 곳 마다 동적으로 변경된다.
//스코프는 위로 올라가고 올라가면서 있으면 그것으로 동적 변경. 자기거 있으면 자기거 씀
const obj = {
    name: 'NolBu',
    age: 20,
    display() {
        console.log(`${this.name} / ${this.age}`);
    }
};
console.log(obj.name, obj.age);
obj.display(); // 여기 안의 this는 . 이 있으면 그 . 앞에 있는 객체가 this



function Person(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.display = function () {
    console.log(`${this.name} / ${this.age}`);
};

const nolbu = new Person('NolBu', 30);
nolbu.display();

const hungbu = new Person('HungBu', 30);
hungbu.display();   //
console.log('');

console.log(this);    //글로벌 영역에서 실행해서 this 는 항상 window
console.log('');

function onAdd() {
    console.log(this);
}

onAdd();    //함수를 호출할때 글로벌 영역에서 했으므로 this 는 window

const objA = {
    name: Object,
    onAdd: onAdd
};

console.log(objA.name);
objA.onAdd();   //호출이 obj에서 하므로 this는 objA
console.log('');

const arr = [10, 20, onAdd];
console.log(arr[0], arr[1]);
arr[2]();                   //배열 안에서 호출했으므로 this는 배열



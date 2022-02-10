
console.log('---------------- Primary Type And Reference Type-----------------');

var numA = 100;
var numB = numA;

// 비교
console.log(numA == numB, numA === numB); //둘다 true

numA = 200;  //A만 값이 바뀜
console.log(numA == numB, numA === numB); //둘다 false
console.log('');


var objA = {
    name: 'NolBu',
    age: 30,
};

var objB = objA; //같은 주소 쳐다봄
console.log(objA == objB, objA === objB); //둘다 true. 둘다 object 타입

objA.name = 'HungBu';
console.log(objA == objB, objA === objB); //둘다 true. 바꾼건 주소 안의 내용. 주소가 바뀐게 아님
console.log('');


// 값이 같은 새로운 객체 
var objC = {
    name: 'HungBu',
    age: 30,
};

console.log(objA === objC); // false
console.log('');


function func(x, y) {
    x = 1; //들어온 x를 1로 바꿈 (자기의 지역변수만 바뀜)
    y.name = 'ABC'; //들어온 y의 이름을 ABC로 바꿈(번지를 쫒아 바꾸므로 원번지의 내용이 바뀜)
};

let x = 100;
let y = { name: 'Y', num: 200 };


//값을 기본으로 넘기느냐 리퍼런스형으로 넘기느냐에 따라 달라진다.
console.log('----- 함수 호출 이전 -----');
console.log(x, y); //함수 영역에서 지정한 1은 지역변수라 {}를 넘어오지 못하므로 그대로 100가져옴

func(x, y);


console.log('----- 함수 호출 이후 -----');
console.log(x, y);


console.log('---------------- 중첩함수, 콜백함수 -----------------');
/*
함수는 일급객체
    1. 리터럴에 의해 생성 가능(변수의 값이 될 수 있다)
    2. 변수나 배열요소, 객체의 프로퍼티로 할당 가능
    3. 함수의 인자나 리턴 값으로 사용 가능
    4. 동적으로 프로퍼티 생성 가능
*/

const arr = [10, 20, function () { return 100; }];
console.log(arr[2]());


const obj = {
    name: 'NolBu',
    info: function () {
        return this.name;
    }
};
console.log(obj.info());

// 중첩함수
function outer() {
    let x = 10;
    console.log('Outer=> ', this);          //호출이 Global=> window
    function inner() {
        let y = 20;
        let result = x + y;
        console.log('Inner=> ', this);      //window
        console.log(`${x} + ${y} = ${result}`);
    }
    //inner함수는 내부에서만 호출 가능. outer 내부에 정의했기때문
    inner();
}
outer();
console.dir(outer);
console.log('');


//리턴 값으로 함수 이용. 많이 쓰이는 방법
function outer2(x) {
    let num = x;
    let name = 'Outer';

    function inner2() {
        return `Inner2 Function - ${num} / ${name}`;
    }

    return inner2; //괄호 치면 실행함. 안 치면 저 함수 문자 그대로 리턴
    //이러면 밖에 꺼내쓸 수 도 있다.
}
const inner2 = outer2(100);
console.log('inner2 => ', inner2);
const result = inner2();
console.log(result);
console.log('');





// 함수의 인자나 리턴 값이 될 수 있다.

function onAdd(x, y) {
    return x + y;
}

function onMin(x, y) {
    return x - y;
}

const r = onAdd(10, 20);
console.log(r + 100);
console.log(r - 2);


function func(x, y, fn) { //fn에는 아래의 num함수가 들어감
    let result = onAdd(x, y);
    fn(result); //사용자가 어떻게 처리할 것인지를 결정하도록 한다.
    //시간이 걸리는 작업을 외부로 빼서 현재의 흐름을 정상적으로 처리하게 할 목적 등
};

//호출한 함수가 일차적인 작업을 완료하고 그 이후에 각각 다른 처리 작업을 
//하나의 이름으로(함수) 묶어서 전달
//매개변수로로 함수로 넘길 수 있다.
func(20, 30, function (num) { //num에는 50이 들어감
    console.log(num + 10);
});

func(30, 5, function (num) { //num에는 35이 들어감
    console.log(num - 10);
});

function onDiv(num) {  //num에는 12이 들어감
    if (num !== 0) {
        //return num / 2;
        console.log(num / 2);
    } else {
        //return 0;
        console.log('나눌 수 없습니다');
    }
}
const div = func(10, 2, onDiv);


//일반적인 함수 선언문
function onAdd() {
    let x = 10;
    let y = 20;
    let result = x + y;
    console.log(`${x} + ${y} = ${result}`);
}


//Arrow 함수 형태 (ES6애 추가됨)
//함수 선언문 형태는 Arrow 함수로 정의 안된다.
//함수 표현식 방식만 Arrow 형태로 기술

const onMin = function () {  //표현식 방식
    let x = 10;
    let y = 20;
    let result = x - y;
    console.log(`${x} - ${y} = ${result}`);
};

//function을 삭제하고 매개변수지정 () 다음에 => 를 붙인다

const onMulti = () => {
    let x = 10;
    let y = 20;
    let result = x * y;
    console.log(`${x} * ${y} = ${result}`);
};

onMin(10, 2);
onMulti();


//Arrow 함수에 반환값 구문 1줄만 존재하는 경우 {} 와 return 키워드를 생략하고 한줄에 기술
//return 키워드를 기술하면 에러
const onDiv = (x, y) => x / 2;

//매개변수가 1개인 경우는 () 생략할 수 있다.
const onDouble = (x) => 2 ** x; //2의 x승 

console.log(onDiv(10, 2));
console.log(onDouble(3));





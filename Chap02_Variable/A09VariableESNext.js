
console.log('---------------- let, const -----------------');
//var은 window에 저장. 그래서 alert같은 이미 지정된 변수들도 변형될 가능성이 생김
var nickname = 'NolBu';
var nickname = 'HungBu';  // 재 정의 에러 아님(덮어 씀)
var A = 'Global';
{
    //함수를 제외한 { } 범위를 갖지 않는다. if, for, while, switch
    var nickaname = 'BangJa';
}
console.log("nickname: " + nickname);
console.log(window);

//var는 윈도우 영역(글로벌)에 저장되어 alert가 변형되어 에러남

//alert = 100;

//window.alert('Hello');
console.log(window.A);

console.log('');


// let => ECMA 2015 (ES6) 익스클로러 11 이하는 사용 제약이 따른다
//console.log(A1);
// hosting은 이루어지지만 변수가 저장되는 객체가 다르다.
// let은 TDZ(Tempalte Dead Zone)이라고 하는 영역에 저장
let A1 = 'LET Global';
//let은 글로벌 영역에 저장되지 않아 정상 실행됨
let alert = 'Hello World';
//window.alert('Let Scople');

//값이 변경되는 변수를 선언
let x = 10;

//1. 선언 한 변수를 재 선언할 수 없다.
//let x = 20;       //에러난다.
// x = 20; 처럼 변경은 가능

//2. 모든 { } 범위를 갖는다.
let y = 20;
if (true) {
    let y = 'Hello World';
    let z = 100;
    console.log('if block y => ', y);
}
//console.log(z); //에러
console.log('global y =>', y);

//const => ES2015 (es6)
//상수를 정의. 보통 대문자로 변수명을 기술한다.
const MY_PI = 3.1519;
//MY_PI = 100; //에러 
console.log(My_PI, typeof (MY_PI));




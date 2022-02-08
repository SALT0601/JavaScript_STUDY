
console.log('---------------- Hosting -----------------');

// <호이스팅> - 즉 먼저 메모리에 올라간다..... 그래서 일단 코드에 선언만 되어있으면 에러는 안 뜸
//var 키워드는 선언한 변수를 재 선언해도 에러가 아니다.
// 자바스크립트은 먼저 문서를 읽어서 변수와 함수를 메모리 공간에 먼저 정의부터 한 후에
//첫줄부터 실행하기 시작한다. 
//var 변수는 초기화 문장을 만날때 값이 대입된다.
// 이후 정의된 변수가 있으면 덮어쓰기(재 정의)한다. (에러 아님)
var d = 'HungBu';
console.log('d: ' + d + ' typeOf(d): ' + typeof (d));

//없는 변수를 선언하면 Error
//console.log('e: ' + e + ' typeOf(e): ' + typeof (e));

//메모리에는 변수가 선언되어 있음. 값은 undefined 값으로 초기화 되어 있음
var f;
console.log('f: ' + f + ' typeOf(f): ' + typeof (f));

// 메모리에 이미 정의는 되어 있음(초기화 구문은 아직 실행 안됨. 변수는 실행하기 전에 이미 변수를 올려 놓음
console.log('g: ' + g + ' typeOf(g): ' + typeof (g)); //undefined
var g = 10;
//여기서는 초기화를 만나서 아래 구문은 잘 실행됨
console.log('g: ' + g + ' typeOf(g): ' + typeof (g));
console.log('');

var intValue = 10;
var floatValue = 10.25;
var str = 'Hello';
var check = true;
var unType = undefined;
//undefined도 없이 아예 비워놓을 때는 null
var nullType = null;

//이것만 기본형 타입
console.log('intValue: ' + intValue + ' typeOf(intValue): ' + typeof (intValue));
console.log('floatValue: ' + floatValue + ' typeOf(floatValue): ' + typeof (floatValue));
console.log('str: ' + str + ' typeOf(str): ' + typeof (str));
console.log('check: ' + check + ' typeOf(check): ' + typeof (check));
console.log('unType: ' + unType + ' typeOf(unType): ' + typeof (unType));
console.log('nullType: ' + nullType + ' typeOf(nullType): ' + typeof (nullType));

//이스케이프 문자
console.log('a\t\tb');
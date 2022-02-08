
console.log('---------------- Variable -----------------');

// 변수는 식별자라고도 한다.
var x = 10;
var y = 10.25;
var str = 'NolBu';

console.log(typeof (x), typeof (y), typeof (str));
console.log('x: ' + x + ' typeOf(x): ' + typeof (x));

x = 'Hello';
console.log('x: ' + x + ' typeOf(x): ' + typeof (x));

//typeOf()의 출력값으로 기본형 변수 이외의 값은 object로 출력된다.
x = new Date();
console.log('x: ' + x + ' typeOf(x): ' + typeof (x));

//변수의 선언 방식
var z = 10;
//여러개를 동시에 선언
var a = 1, b = 2, c = 3.5;

//변수의 초기화는 나중에
var d;
d = 100;
console.log('d: ' + d + ' typeOf(d): ' + typeof (d));



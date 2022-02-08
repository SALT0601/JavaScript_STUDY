
console.log('---------------- Comparison Operator -----------------');

var x = 10;
var y = 3;

var result = x > y;
console.log('x > y => ' + result);

result = x >= y;
console.log('x > y => ' + result);
console.log('');


// 동등 비교
result = x == y;
console.log('x > y => ' + result);

result = x != y;
console.log('x > y => ' + result);
console.log('')

// 일치 비교
// == 는 값을 자바스크립트 엔진이 형 변환을 해 보고 값이 같으면 true로 표시

//1 == "1"
// "1" => Number("1")을 먼저 해보고 비교
//true => 1로 변환 후 비교, flase => 0으로 변환 후 비교
var x = true;
var y = 1;

result = x == y;
console.log('true == 1 => ' + result);

//=== 짜리는 typeof끼지 해보고 타입이 다르면 형 변환하지 않는다.
// 1 = 1 and 'boolean' == 'string'
result = x === y;
console.log('true === 1 => ' + result);
console.log('');

//삼항연산자
var name = 'Nolbu';
result = (name === 'Nolbu') ? '놀부' : '누군지 모름';
console.log(result);




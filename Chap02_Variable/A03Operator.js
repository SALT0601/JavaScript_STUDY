
console.log('---------------- Operator -----------------');

var x = 10;
var y = 3;

// 이항 산술 연산자
var result = x + y;
console.log(x + ' + ' + y + ' = ' + result);

result = x - y;
console.log(x + ' - ' + y + ' = ' + result);

result = x * y;
console.log(x + ' * ' + y + ' = ' + result);

result = x / y;
console.log(x + ' / ' + y + ' = ' + result);

result = x % y;
console.log(x + ' % ' + y + ' = ' + result);
console.log('');


// 단항 산술 연산자. ++, --
var z = 10;
z = z + 1;
z++;
console.log(z);
console.log('');

z = 10;
//대입은 ++ 앞에 있으면 피 연산자(z)를 먼저 증가하고 값을 대입
var result = ++z;
console.log(z, result);  //11, 11

z = 10;
//대입은 ++ 뒤에 있으면 피 연산자(z)의 값을 먼저 result에 대입하고 z를 1개 증가
result = z++;
console.log(z, result);  //11, 10
console.log('');

x = 10;
y = 20;
result = ++x + y++;
console.log(x, y, result); //11, 21, 31

//할당 연산자. +=, -=, *=, /+, %=
x = 10;
x = x + 3;

y = 20;
y += 3;   //y = y + 3;
console.log('');


//Math

// 0~ 0.999999999999999
console.log(Math.random()); //소숫점 16자리 난수

//무조건 올림
console.log(Math.ceil(10.0000000001));

//무조건 버림
console.log(Math.floor(5.99999999999));

//숫자 관련 전역 함수
var random = Math.random() * 5;
console.log(random);
console.log('parseInt => ', parseInt(random)); //정수 값만 리턴한다
console.log('parseFloat => ', parseFloat(random)); //실수 값만 리턴한다. 그래서 똑같이 나옴
console.log('');

random = Math.ceil(Math.random() * 5);
console.log('ceil => ', random);

random = Math.floor(Math.random() * 5 + 1);
console.log('floor => ', random);
console.log('');




//문자열을 숫자로 변환해준다.(문자가 포함되면 문자전까지 숫자만)
//시작이 문자로 시작되면 안된다. => NaN(숫자가 아니다)
//Number()는 문자가 포함되어 있으면 변환 안됨
var str = '10.25a';
console.log(parseInt(str) + 10, parseFloat(str), Number(str));

//문자가 없으면 Numbere도 변환됨.
str = '10.25';
console.log(parseInt(str) + 10, parseFloat(str), Number(str) + 10);

//빈 문자열의 경우 parseInt, parseFloat => Nan
//Number => 0으로 치환해 준다. (ex 폼 입력 값이 비어서 넘어옴)
//그래서 Number를 더 많이 쓴다.
str = '';
console.log(parseInt(str) + 10, parseFloat(str), Number(str) + 10);





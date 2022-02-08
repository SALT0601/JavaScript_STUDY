
console.log('---------------- Logical Operator -----------------');

var x = 10;
var y = 5;
var z = 5;
var result;

result = (x > y) && (x > y);
console.log('(x > y) && (x > y) => ' + result);

//&&는 앞의 조건이 false면 뒤를 체크하지 않는다.
//||는 앞의 조건이 true면 뒤를 체크하지 않는다.
result = (x < y) && (x < z++);
console.log(result, z);

// 연산자로 사용.
var age;

if (age) {
    console.log('True');
} else {
    console.log('False');
}

//typeof 함수를 지원하면...
if (typeof (10)) {
    console.log('True');
} else {
    console.log('False');
}

//&&, ||를 연산자로 사용

//앞의 값(age의 값)이 있으면 age의 값을 result에 대입
//없으면 뒤가 평가되서 10이라는 값을 result에 대입
//그래서 값을 대입할 땐 ||를씀
var result = age || 10;
console.log('||의 경우 => ', result + 100);

//앞의 값(age의 값)이 있으면 뒤가 평가되서 10을 result에 대입
//없으면  age 값이 result에 대입
var result = age && 10;
console.log('&&의 경우 => ', result);

//react
//age의 값이 있으면 <DIV>요소가 화면에 출력됨
age = 10;
console.log(age && '<div>Hello World</div>');

//** => ES7(ECMA 2016)
var two = 2;
result = two ** 3 // 2 * 2 * 2
console.log(result);

//boolean 값으로 변환. 값이 있으면 true 없으면 false
console.log(!!0);
console.log(!!10);
console.log(!!'');
console.log(!!'A');
console.log(!!undefined);
console.log(!!null);



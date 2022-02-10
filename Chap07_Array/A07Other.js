
console.log('---------------- Number -----------------');
var str = '123.56';
let x1 = parseInt(str);             //123 (numner 타입)
let x2 = parseFloat(str);           //123.56 (numner 타입)
let x3 = Number(str);               //123.56(numner 타입)

console.log(x1, typeof (x1));
console.log(x2, typeof (x2));
console.log(x3, typeof (x3));

var str = '';
//parseInt => NaN, parseFloat => Nan, Number => 0 그래서 Number를 많이 쓴다.


let num = 12345.6789545;
x1 = num.toFixed(2);
console.log(x1, typeof (x1));       //12345.48 (String 타입)

str = '124N';
let check1 = isNaN(str);              //숫자가 아니니?
let check2 = isNaN(num);              //숫자가 아니니?
console.log(check1, check2);            //아니면 true, 숫자면 false

console.log('---------------- Math -----------------');
//난수 발생
x1 = Math.random();
//무조건 올림
x2 = Math.ceil(10.00001);
//무조건 버림     
x3 = Math.floor(10.99999);

console.log(x1, typeof (x1));
console.log(x2, typeof (x2));
console.log(x3, typeof (x3));


console.log('---------------- Date  -----------------');

let today = new Date();             //현재 시간
console.log(today);                 //Date.toString() 메서드가 호출
let today2 = new Date('2022-12-25 12:25:30');
console.log(today2);


let year = today.getFullYear();  //today.setFullYear(2025); - 이렇게 set으로 바꿀 수 있음
//0이 1월, 1이 2월 . 시작이 0부터 시작된다.
let month = today.getMonth() + 1;
let date = today.getDate();

//요일. 0이 일요일, 1이 월요일
let day = today.getDay();

let yoil = ['일', '월', '화', '수', '목', '금', '토'];
console.log(`${year}-${month}-${date} ${yoil[day]}`);

let hour = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();
let millSec = today.getMilliseconds();        //1초는 1000
console.log(`${hour}:${min}:${sec}:${millSec}`);
console.log('');

let x = today.toLocaleDateString();
let y = today.toLocaleTimeString();
let z = today.toLocaleString();
console.log(x, y, z);

//기억하기
let times = Date.now();
//1970.01.01 00:00:00 부터 현재 시간까지 경과 시간을 mill초로 환산해서 돌려준다.
console.log(times);

let obj = { id: Date.now(), name: 'TV' };
console.log(obj);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);

console.log('---------------- String  -----------------');
str = ' abc 123 DEF 456 ';

console.log(str.length);

x = str.trim();
console.log(x, x.length);

console.log(str.toUpperCase(), str.toLowerCase());

console.log(x.substr(4, 8));        //4부터 8개 추출
console.log(x.substring(4, 8));        //4부터 8-1까지 추출

y = x.replace('123', '일이삼');
console.log(y, x);

y = x.replace('1', '일이삼');
console.log(y, x);

y = x.indexOf('D');
console.log(y);

y = x.indexOf('D', 3);
console.log(y);

y = x.indexOf('x');  //앖으면 -1
console.log(y);



console.log('---------------- try ~ catch  -----------------');
//프로그램의 정상 종료를 위해 씀
//에러 구문을 만나면 에러 밷고 아래에 있는거 실행 안됨. 
//그래서 그걸 회피할 수 있게 만들어야함
//회피해서 처리하고 다른식으로 처리해서 정상종료하게 만드는것.
const arr = [10, 11];
try {
    console.log(abc);
} catch (err) {
    console.log(err.message);
    console.log('에러입니다');
}

try {
    if (true) {
        throw new Error('이게 표시될 에러 메세지');
    }  // 하면 안되는 에러 하면 밑에거 실행 안되게 하고 캐치구문 나옴
    console.log('여기는 실행 안됨');
} catch (err) {
    console.log(err.message);
} finally {
    console.log('이건 항상 실행 안됨');
}
console.log('종료');
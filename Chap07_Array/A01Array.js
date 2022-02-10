
console.log('---------------- Array -----------------');

var nolbu = 'NolBu';
var kor = 100;
var eng = 80;
var total = kor + eng;
var avg = total / 2;
console.log(nolbu + '님의 총점은 ' + total + '이고 평균은 ' + avg + '입니다');
console.log(`${nolbu}님의 총점은 ${total}이고 평균은 ${avg}입니다.`);
console.log('');

let onTotal = (kor, eng) => kor + eng;
let onAvg = (total) => total / 2;
let display = (total, avg) => `총점은 ${total}이고 평균은 ${avg}입니다.`;

//이렇게 짤일은 없겠지만 가능은 하다.
const hungbu = [90, 80, 0, 0, onTotal, onAvg, display];
hungbu[2] = hungbu[4](hungbu[0], hungbu[1]);
hungbu[3] = hungbu[5](hungbu[2]);
const result = hungbu[6](hungbu[2], hungbu[3]);
console.log(result);
console.log('');

//배열
const arr = [10, 11, 100, 101, 1000];
console.log(arr);

//개수가 정해지지 않은 배열을 생성
const arrTwo = new Array();
console.log(arrTwo);
//[] 이용하여 값을 추가한다
// 배열의 시작은 0부터 시작한다
arrTwo[0] = 10;
arrTwo[1] = 11;
arrTwo[2] = 100;
console.log(arrTwo);

//개수가 정해진(?) 배열을 생성
//사실 동적타입언어라 6번째 넣어도 들어감(늘어남)
const arrThree = new Array(5);
console.log(arrThree);
arrThree[0] = 10;
arrThree[1] = 11;
arrThree[2] = 100;
arrThree[3] = 101;
arrThree[4] = 1000;
arrThree[5] = 1001;
console.log(arrThree);

//값의 수정
arrThree[1] = 21;
console.log(arrThree);

//배열은 타입을 혼합해서 넣을 수 있다.

const arrFour = [10, 'NolBu', true, undefined, null, function () { return 100; }, new Date()];
console.log(arrFour[0]);
console.log(arrFour[1]);
console.log(arrFour[2]);
console.log(arrFour[3]);
console.log(arrFour[4]);
//함수도 값이므로 함수 자체 그대로를 던지니 괄호를 쳐야 실행함
console.log(arrFour[5]());
console.log(arrFour[6]);
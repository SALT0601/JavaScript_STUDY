
console.log('---------------- Object -----------------');

var nolbu = 'NolBu';
var kor = 100;
var eng = 80;
var total = kor + eng;
var avg = total / 2;
console.log(nolbu + '님의 총점은 ' + total + '이고 평균은 ' + avg + '입니다');
console.log(`${nolbu}님의 총점은 ${total}이고 평균은 ${avg}입니다.`);
console.log('');

//객체 만들기
//객체 Object를 이용하여 하나의 이름으로 묶자 관리가 용이해짐
// Object()는 메모리의 영역만 잡는다.
let hungbu = new Object();
//Object() 메모리에 name이라는 영역을 만들어서 흥부가 들어감
hungbu.name = '흥부';
//Object() 메모리에 kor이라는 영역을 만들어서 100가 들어감
hungbu.kor = 100;
hungbu.eng = 70;
hungbu.total = hungbu.kor + hungbu.eng; //this로 하면 놀부값 가져옴
hungbu.avg = hungbu.total / 2;
console.log(`${hungbu.name}님의 총점은 ${hungbu.total} / 평균은 ${hungbu.avg}`);

//함수가 global 영역에서 선언되었으므로 this는 window
function outer() {
    console.log(this);
}
console.log(outer());
//new Object()를 { }로 변경해서 묶을 수 있다.
//자바에서 VO랑 비슷하다.
//함수 이외의 { } 영역의 this는 window
let hangDan = {
    name: '향단',
    kor: 100,
    eng: 100,
    //this는 window 
    total: this.kor + this.eng,
    avg: this.total / 2, //마지막 ,는 es6부터는 다음이 없어도 에러가 아님
};
console.log(hungbu);
console.log(hangDan.total);

console.dir(hungbu);
console.dir(hangDan);

//object는 key: value 쌍의 집합이다.
//key는 JavaScript의 변수 명명 규칙을 따른다.
//그렇지 않은 경우는 문자열로 이름을 정의한다.
//key가 number면 문자열로 자동 치환한다.
//문자열의 key 값은 "객체명[문자열]" 형태로 참조
const bangJa = {
    name: '방자',
    'bangja-kor': 100,
    'bangja-eng': 50,
    100: 150,
    //avg: this.100 / 2;
};

console.log(bangJa);
//console.log(bangJa["bangja-kor"]); //NaN
console.log(bangJa['bangja-kor']);
//console.log(bangJa.100);   //에러
console.log(bangJa['100']);

const hong = {
    name: '홍길동',
    kor: 100,
    eng: 90,

    //객체 내부에 객체의 프로퍼티 값을 참조하는 함수를 메서드라고 한다.
    total: function () {
        return this.kor + this.eng;
    },
    avg: function (num) {
        return this.total() / num;
    }

};

console.log(hong);
console.log(hong.total());
console.log(hong.avg(2));
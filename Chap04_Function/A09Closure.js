
console.log('---------------- Closure -----------------');
//1. 함수 내부의 지역함수를 밖에서 꺼내쓸 때
//
let num = 0;

const incOne = function () {
    return num++;
};
console.log(incOne());
console.log(incOne());
console.log(incOne());
console.log(incOne());
console.log(incOne());
console.log(incOne());

num = 100;
console.log(incOne());
console.log(incOne());
console.log(incOne());

function incTwo() {
    let cnt = 0;        //호출할때마다 0으로 초기화
    return cnt++;
}
// cnt = 100;           //var 선언이 없으면 Global 영역에 변수를 만든다.
//console.log(cnt);     //에러
console.log(incTwo());
console.log(incTwo());
console.log(incTwo());
console.log('');

console.log('--------------------closure를 이용한 증가--------------------');
//closure
//2. 위의 문제를 해결하기 위해 씀
function incThree(x) {
    let cnt = x;
    function inner() {
        return ++cnt; //cnt가 없으니 상위의 inc 쳐다봄.그래서 메모리상에서 사라질 수 없다..
    };
    return inner; //이 객체가 반환됨
}
const three = incThree(0); //inner 봄

console.log(three());
console.log(three());
console.log(three());

//함수는 호출할때마다 새 스택 메모리(새 실행 영역)를 잡고 있음
const three1 = incThree(10); //메모리상에 또 inner 만들고 그 이너는 아우터 쳐다봄

console.log(three1());
console.log(three1());
console.log(three1()); //새로 메모리 만들어서 새로 함수 실행됨




var alert = 10;

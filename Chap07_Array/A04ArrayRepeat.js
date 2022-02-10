
console.log('---------------- Array 반복 메서드 -----------------');

var ary = [10, 11, 100, 101, 1000];

console.log('---------------- Array For -----------------');
for (let i = 0; i < ary.length; i++) {
    console.log(ary[i]);
}




console.log('---------------- Array ForEach -----------------');
var ary = [10, 11, 100, 101, 1000];
ary.forEach(function (item, index) {
    console.log(item, index);
});
console.log('');
//한줄로 기술할때 => 뒤의 구문이 값이 아니면 실행. 값인 경우만 return을 해준다.
ary.forEach((item, index) => { console.log(item, index); });
console.log('');
//리턴이 없음 맵은 리턴 있어서 새로운 값 반환가능


console.log('---------------- Array map -----------------');
//배열의 값을 forEach와 같이 순차적으로 1개씩 순서대로 꺼내 콜백함수에 대입해준다.
//리턴구문이 있으면 리턴값을 하나의 배열로 모아서 반환한다.
var ary = [10, 11, 100, 101, 1000];

let x = ary.map(function (item, index) {
    console.log(item, index);
    return item * 2;
});
console.log(x);
console.log('');

//react에서 많이 사용되는 구문
//arrow 함수의 주의점 중 하나. 객체를 리턴하려면 (괄호)적어야함
//객체를 리턴하고 싶은데 중괄호 쓰면 함수의 끝과 시작을 나타내는 구문임.
//그래서 중괄호만 적으면 어로우 함수의 시작과 끝이라고 생각함
//근데 함수내부에 i: index, value: item * 2 적는 경우가 없어서 문법 에러
//그래서 함수가 아니라 객체라는걸 인식시켜주기 위해 괄호로 감쌈
//그래서 i: index, value: item * 2 리턴해줌

let y = ary.map((item, index) => ({ i: index, value: item * 2 }));
console.log(y);
console.log('');

console.log('---------------- Array filter -----------------');
//걸러내는 작업을 한다. 
//따라서 조건문이 필요하고 조건이 true인 요소만 모아서 배열로 만들어 리턴한다.
var ary = [10, 11, 100, 101, 1000];
x = ary.filter(function (item, index) {
    if (item % 2 === 0) return true;        //true인 순환요소의 값이 x 배열에 추가
    else return false;
});
console.log(x);




console.log('---------------- Array reduce -----------------');
//누적구할때 많이 씀
var ary = [10, 11, 100, 101, 1000];

x = ary.reduce(function (init, item) {
    let total = 0;
    total = init + item;
    return total;
}, 0);                //0이 INIT 값. 처음 1번만 반영된다.
console.log(x);

//{'NolBu': 1}
//{'NolBu': 1, 'HungBu':1} ... 이런식으로 누적
var names = ['NolBu', 'HungBu', 'BangJa', 'HongGilDong', 'HungBu', 'BangJa',];
x = names.reduce((obj, item) => {
    if (!obj[item]) {//obj['NolBu'] 값이 있니의 반대이므로 없니> 없으면 true됨
        obj[item] = 1;
    } else {
        obj[item] += 1;
    }

    return obj;
}, {});
console.log(x);





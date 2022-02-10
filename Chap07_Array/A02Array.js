
console.log('---------------- Array -----------------');

var ary = [10, 11, 100, 101, 1000, 11, 100];

//배열의 전체 개수
console.log(ary.length);

//배열 맨 뒤에 값 추가. x는 추가 후 length 값
let x = ary.push(20);

//배열 맨 앞에 값 추가. y는 추가 후 length 값
let y = ary.unshift(0);
console.log(x, y, ary);


//배열 맨 뒤에 값 삭제. x는 삭제된 length 값
x = ary.pop();

//배열 맨 앞에 값 삭제. y는 삭제된 length 값
y = ary.shift();
console.log(x, y, ary);

console.log('---------------- **splice로 중간값 조작(to리스트에 씀)-----------------');

//배열의 중간 값을 수정, 삭제, 추가
//[10, 11, 100, 101, 1000, 11, 100]
//splice(시작번호, 치환개수, 대치 또는 대입값)
x = ary.splice(2, 0, 200);  //치환 개수가 0이면 추가
console.log(x, ary);

//[10, 11, 100, 101, 1000, 11, 100]
//중간의 치환 개수만큼을 배열로 리턴
x = ary.splice(2, 1, 222);    //2번째 위치에서 1개를 222로 치환
console.log(x, ary);

//2번째 위치에서 2개를 333로 치환. 2개 222와 100이 대치되는 333으로 변경
x = ary.splice(2, 2, 333);
console.log(x, ary);

//[10, 11, 100, 101, 1000, 11, 100]
//2번째 위치에서 1개를 30, 31로 치환 1개는 수정 1개는추가
ary.splice(2, 1, 30, 31);
console.log(ary);

//뒤 부분을 삭제하는 것은 이렇게도 가능
ary = [10, 11, 100, 101, 1000, 11, 100];

ary.length = 2;
console.log(ary);

//delete 로도 삭제 가능. 값만 삭제. length는 그대로
ary = [10, 11, 100, 101, 1000, 11, 100];
delete ary[3];
console.log(ary);
console.log('');

console.log('---------------- slice로 짤라내기 -----------------');
ary = [10, 11, 100, 101, 1000, 11, 100];

//원본 배열은 그대로 유지된다.
x = ary.slice(3);           //시작번호부터 마지막까지(.length)
console.log(x, ary);

x = ary.slice(3, 5);           //번호3부터 5까지(.length)
console.log(x, ary);

x = ary.slice(-3);           //뒤에서 3째부터 끝까지(.length)
console.log(x, ary);

x = ary.slice(-5, -3);           //뒤에서 5번째부터 번호3까지(.length)
console.log(x, ary);
console.log('');

console.log('---------------- join을 이용하여 연결(문자열이 된다.) -----------------');

ary = [10, 11, 100, 101, 1000, 11, 100];
let str = ary.join('-');
console.log(str, typeof (str));

str = ary.join(', s');
console.log(str, typeof (str));
console.log('');


console.log('---------------- ***concat을 이용한 새 배열 생성-----------------');
//react에서 엄청 사용
//새로운 배열을 리턴해준다.
ary = [10, 11, 100, 101, 1000, 11, 100];
x = ary.concat(200); //새배열
console.log(x, ary);
console.log('');

console.log('---------------- indexOf 로 위치 찾기 -----------------');
ary = [10, 11, 100, 101, 1000, 11, 100];
x = ary.indexOf(11);
console.log(x, ary);


//앞에서 3번째부터 검색해서 11의 위치를 찾아라
x = ary.indexOf(11, 3);
console.log(x, ary);

//뒤에서부터 찾아라. 카운트는 항상 앞에서부터 한다 => 5
x = ary.lastIndexOf(11);
console.log(x, ary);


//찾는 값이 없으면 -1이 리턴된다.
x = ary.lastIndexOf(123);
console.log(x, ary);

//중복 방지
if (ary.indexOf(100) === -1) {
    ary.push(100);
}

//es6
x = ary.includes(11);
console.log(x, ary);

//중복방지
if (!ary.includes(100)) {
    ary.push(100);
}
console.log('');


console.log('---------------- Sort -----------------');

var names = ['NolBu', 'BangJa', 'HungBu'];

let sorted = names.sort();
console.log(sorted);

ary = [10, 11, 100, 101, 1000, 11, 100];
let sortAry = ary.sort();
console.log(sortAry);           //sort는 문자베이스라서 숫자를 문자로 바꿔서...정렬



sortAry = ary.sort(function (x, y) { //콜백함수 (매개변수를 함수로)
    if (x > y) return 1;
    else if (x < y) return -1;
    else return 0;
});
console.log(sortAry);

sortAry = ary.sort((x, y) => { //애로우 함수(매개변수를 함수로)
    if (x > y) return 1;
    else if (x < y) return -1;
    else return 0;
});
console.log(sortAry);
//배열함수. (x,y) 두개의 값을 비교하면서 배열 안의 모든 값들을 비교
//음수면 왼쪽의 x우선순위가 높음
// 0이면 x와 y 우선순위 같음
// 양수면 오른쪽에 있는 y가 우선순위 높음
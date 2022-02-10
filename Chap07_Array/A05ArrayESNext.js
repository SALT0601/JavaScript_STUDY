
console.log('---------------- Array Callback -----------------');

// ES6
let ary = new Array(10);    //empty * 10
ary.fill(0, 0);     //0 초기화
console.log(ary);

ary.fill('A', 2, 7);
console.log(ary);

//includes
let arr = [10, 11, 100, 101, 1000];
console.log(arr.includes(100));
console.log(arr.includes(123));
console.log('');



console.log('---------------- Array find, findIndex-----------------');
//자바스크립트에서 가장 많이 사용되는 형태
//자바라면 ArrayList에 VO 객체가 대입되어 있는 상태
var objArray = [
    { id: 1, name: 'NolBu', age: 35 },    //0
    { id: 2, name: 'BangJa', age: 18 },   //1
    { id: 3, name: 'HungBu', age: 25 },   //2
    { id: 3, name: 'BangJa', age: 18 },   //3
];


function findItem(index) {
    return objArray[index];
};


let x = findItem(4);  //배열에서는 4번째 인덱스가 존재하지 않음
console.log(x);

//id와 매칭되는 인덱스 번호를 가져오자 (순서가 필요할 시)
x = objArray.findIndex((item, index) => item.id === 3);

//아이템은 객체 하나하나 인덱스는 0,1,2 순번 가져옴
//똑같은거 2개면 처음거 가져옴
//매칭해서 index 반환
console.log(x);
console.log('');


//item 객체 자체를 통채로 리턴.
x = objArray.find((item, index) => item.id === 3 && index === 3);
console.log(x);


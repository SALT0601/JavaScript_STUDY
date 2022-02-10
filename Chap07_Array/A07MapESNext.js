
console.log('---------------- Map ES6 -----------------');

//key, value 쌍으로 넣음
let myMap = new Map([
    [0, 'NolBu'],
    [1, 'HungBu'],
    [2, 'BangJa'],
]);

//크기
console.log(myMap.size, myMap);

//추가
myMap.set(3, 'HangDan');
console.log(myMap.size, myMap);

//삭제(key로)
myMap.delete(3);
console.log(myMap.size, myMap);

//값읽기 -참조(key로)
console.log(myMap.get(2));

//keys() - 모든 키값 열거, values() -모든 값 열거, entries() - 모든 데이터 열거 도 다 있음

let value = myMap.values(); //모든 값 열거
console.log(value);

for (let item of myMap) {
    console.log(item, item[0], item[1]);
}

//값을 묶을 목적으로 사용한다.
let tv = [
    { id: 1, company: 'Samsung', model: 'ABC', price: 1000 },
    { id: 2, company: 'LG', model: 'LG-1', price: 200 },
    { id: 3, company: 'Samsung', model: 'S-500', price: 300 },
];

let phone = [
    { id: 1, company: 'Samsung', model: 'S22', price: 22000 },
    { id: 2, company: 'LG', model: 'LG-2', price: 15000 },
    { id: 3, company: 'Samsung', model: 'S10', price: 30000 },
];

const product = new Map([
    ['tv', tv],
    ['phone', phone]
]);

let getTv = product.get('tv');
let getPhone = product.get('phone');

console.log(product);
console.log(getTv);
console.log(getPhone);


console.log('---------------- Object -----------------');

const X = 10;
//x = 100; 에러남
const obj = {
    name: 'NolBu',
    address: 'Seoul',
    info: function () {
        console.log(this.name + ' / ' + this.address);
    }
};

/*obj = {
    name; 'ABC'
}; 에러이다*/
const arr = [10, 20, 30];
arr[0] = 100;

//프로퍼티 추가
obj.age = 30;
console.log(obj);

//프로퍼티 값 변경. 존재하는 프로퍼티에 다른 값 대입
obj.name = 'HungBu';
console.log(obj);

//프로퍼티 삭제. delete 명령으로 기본형 변수는 삭제할 수 없음.
delete obj.age;
console.log(obj);


//메서드도 추가 가능하다.

obj.display = function () {
    console.log(this.address);
};
console.log(obj);
obj.display();

delete obj.display;
console.log(obj);
console.log('');

//열거 가능한 속성으로 지정된 요소만 출력 가능
for (let key in obj) {
    //console.log(typeof (key)); //string
    console.log(key, obj[key]);  //obj.'name'(x) => obj['name']
}
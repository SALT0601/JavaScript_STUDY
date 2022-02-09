
console.log('---------------- Internal Slot, Method -----------------');


var obj = {
    // 데이터 프로퍼티
    firstName: 'Hong',
    lastName: 'GilDong',
    age: 30,
    role: 1,
    display: function () {
        console.log(`${this.firstName} / ${this.lastName}`);
    },

    // 접근자 프로퍼티 => 정의는 함수 형태로 하고 사용은 프로퍼티 형태로 한다.
    // 
    get fName() {
        return this.firstName;
    },
    set fName(str) { //set은 값을 받아와서 그걸로 수정함. 매개변수는 1개만 가능
        if (this.role > 3 && typeof (str) === 'string') { //숫자 3등급 이상만 접근해서 수정가능
            this.firstName = str;
        };
    }
};

console.dir(obj);
console.log(obj.firstName, obj.fName);
obj.fName = '홍';
console.log(obj.firstName, obj.fName);
console.log('');

console.log(obj.__proto__); //obj가 상속받은 프로토타입 함수들 보여줌
console.log(Object.getPrototypeOf(obj)); //표준 

console.log(Object.getOwnPropertyDescriptor(obj, 'firstName')); //362페이지

//firstName의 값을 변경 불가로 설정
Object.defineProperty(obj, 'firstName', { writable: false });
console.log(Object.getOwnPropertyDescriptor(obj, 'firstName'));

obj.firstName = '박';  //변경 안됨
console.log(obj.firstName);

obj.fName = '김';  //변경 안됨
console.log(obj.firstName, obj.fName);
console.log('');
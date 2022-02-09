//var로 선언된 변수는 window(global)영역을 오염시킨다.
//let와 const는 TDZ에 선언되므로 window(global)영역을 오염시키지 않는다.

console.log(this);
console.log(this == window);
//this가 윈도우를 쳐다봄 ㅡ윈도우에 이미 지정된 많은 객체들

this.A = 10;
window.A1 = 20;
//위 2개 같은 말. 그런데 this와 window는 생력이 가능
A2 = 30;
//이렇게 적어도 선언됨.
//그래서 var로 선언하지 않으면 global 영역에 정의됨

console.log(A3); //undefined
//var 변수로 선언하면 함수와 오브젝트 이외는 참조하는 this 객체에 변수 정의
var A3 = 40;
//여기서 var은 글로벌에 만들어서 글로벌 영역에 만들어짐

var alert = 'Hello';
//글로벌에 이미 지정되어있는 alert가 Hello로 바뀜
//이렇게 되면 window 영역에 빌드인 함수 등을 못 쓰게 됨.
//이러한 것을 해소하기위해 let, const  만듦

var A3 = 30;
//재정의해도 에러 아님

{
    var A3 = 'Nolbu';
}
//var는 함수, 객체 이외의 중괄호에 대한 스코프(범위)가 없다.


//let, const로 선언된 변수는 global 영역에 만들어지지 않는다.
//그래서 표시가 되지 않는다.
//console.log(A10); //hosting은 발생하지만 먼저 꺼내쓸 수 없어서 에러
let A10 = 10;

//var 변수로 선언되든 let로 선언되든 중복 선언은 불가능
//글로벌에 있든 TDZ에 있든 재선언은 안되게 함
//빌드인 객체는 안건들고 여기 선언된 변수만 말하는 것.
//let A3 = 100;
//let alert = 'hi';

{
    let A10 = 20;
    console.log('{} 내부 => ', A10);
} //이 } 를 만나면 {} 내부애 선언된 let 변수는 모두 삭제된다(지역변수)
console.log('{} 외부 => ', A10);
//console.log('{} 외부 => ', A11); // 선언된 변수 없어서 에러
console.log('');

//기본형 변수
const A20 = 100;
console.log('A20 => ', A20);
//A20 = 200; //const는 게터만됨. 그래서 값 설정은 안됨.

//리퍼런스 형 
const obj = {
    name: 'NolBu'
};

obj.age = 30;
obj.name = '홍길동';

//TDX에 정의한 변수의 메모리 번지수 값을 변경하려고 함. 에러
//obj = {
// address: 'Seoul'
//};

const arr = [10, 20, 30];
arr[0] = 100;
arr[3] = 40;




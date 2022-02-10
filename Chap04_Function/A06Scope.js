
console.log('---------------- Scope -----------------');
//함수는 this와 scope
var x = 'Global';

function out() {
    var x = 'Local';
    console.log('Function IN: ', x);    //Local
}
out();

console.log('Function OUT: ', x);       //Global


// 함수가 만들어지는 순서
// 1. arguments 객체 생성
// 2. scope chain을 생성한다. 
// 3. 내부 변수 선언
// 4. this 바인딩
// 5. 실행
var x = 'Global X';
var y = 'Global Y';

function outer() {
    var z = 'Outer Local z';

    console.log('outer x=> ', x); //자기 스코프에 없어 상위로감(글로벌)
    console.log('outer y=> ', y); //자기 스코프에 없어 상위로감(글로벌)
    console.log('outer z=> ', z); //자기 스코프에 있다.

    function inner() {
        var z = 'Inner Local z';
        console.log('outer x=> ', x); //Global X
        console.log('outer y=> ', y); //Global Y)
        console.log('outer z=> ', z); //Inner Local z
    }
    return inner;
};

outer();
console.log('');

var x = 'Global X';

function foo() {
    var x = 10;
    console.log('bar() 실행');
    //위에 함수 만들어질때 순서 참조해보면
    //2번 스코프 체인이 만들어지면서 scope가 결정된다.
    bar();          // console.log(x);
    //이 안에 함수 bar를 지정하면 10이 나옴
    // function bar() { 
    //     console.log(x); 
    // };

};

function bar() { //글로벌에 선언되어 있음
    console.log(x); //Global X
};

//bar();
foo();
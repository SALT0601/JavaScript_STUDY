
console.log('---------------- 함수 표현식 -----------------');

// 변수이므로 undefined가 할당. 함수 형식으로 호출할 수 없음.
onAdd; //에러 안남. onAdd는 변수라 호이스팅됨.
console.log(onAdd);
//onAdd(); //에러가 난다. 함수로 동작하려면 값을 만나야함 (초기화구문을 만난다음에써야한다)

// 함수 표현식. 익명함수를 이용한다. 이름을 붙이면 기명함수라 한다.
// 표현식 방식의 함수 선언(익명함수)


var onAdd = function () { //함수가 변수의 값이 될 수 있고 배열이될 수 있다(일급객체)
    let x = 10;
    let y = 20;
    //console.log(this); // Global 영역에서 호출된다. this는 window가 된다.

    let result = x + y;
    console.log(`${x} + ${y} = ${result}`);
};
onAdd();
console.log('');

let factorial = function (n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
};
console.log(factorial(10));
console.dir(factorial);


// 표현식 방식의 함수 선언(기명함수)
//익명함수에 함수 이름을 기술하면 내부에서만 사용 가능하다(외부 사용 에러)
let factorial1 = function fact(n) { //fact 가 이름
    if (n === 1) return 1;
    return n * fact(n - 1);
};
console.log(factorial1(10));
console.dir(factorial1);


// Function 생성자 함수 이용 => 거의 안씀
var onMin = new Function('x', 'y', 'return x - y');
console.log(onMin(10, 2));


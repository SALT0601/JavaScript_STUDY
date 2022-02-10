
console.log('---------------- Arguments -----------------');

//함수 내부에서 매게변수를 관리하기 위해 만들어지는 유사 배열이다.
//자바스크립트는 함수의 매개변수를 체크하지 않는다.

function onAdd(x, y) {
    //console.log(arguments);  Arguments(5) [10, 20, 30, 40, 50, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    //console.log(arguments[2]); //결과 : 30

    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        let num = Number(arguments[i]);
        if (isNaN(num)) { //isNan() => ()의 값이 숫자가 아니면 true 
            continue;
        }
        result = result + arguments[i]; //arguments는 배열처럼보이지만 아니다. 객체다
    }
    console.log(`Argument Length: ${arguments.length} / Total: ${result}`);
}

onAdd();
onAdd(10, 20, 30, 'a', 40, 50); //에러 안남



function onAdd1(x) {

    let result = 0;

    //x 매개변수가 첫번째 arguments[0]
    for (let i = 1; i < arguments.length; i++) {
        let num = Number(arguments[i]);
        if (isNaN(num)) { //isNan() => ()의 값이 숫자가 아니면 true 
            continue;
        }
        result = result + arguments[i]; //arguments는 배열처럼보이지만 아니다. 객체다
    }
    console.log(`${x}: ${arguments.length} / Total: ${result}`);
}


onAdd1('합계', 10, 20, 30, 'a', 40, 50); //에러 안남


// ES6에서 좀 쉽게 바뀜
//첫번째 매개변수 이외는 rest라는 배열로 담겨 넘어온다.
function onAdd2(x, ...rest) {
    // rest 는 순수한 배열이라 추가같은거도 됨
    //arguments는 유사 배열이라 추가 안됨
    let result = 0;

    //x 매개변수가 첫번째 arguments[0]
    for (let i = 0; i < rest.length; i++) {
        let num = Number(rest[i]);
        if (isNaN(num)) { //isNan() => ()의 값이 숫자가 아니면 true 
            continue;
        }
        result = result + rest[i]; //arguments는 배열처럼보이지만 아니다. 객체다
    }
    console.log(`${x}: ${rest.length} / Total: ${result}`);
}


onAdd2('합계', 10, 20, 30, 'a', 40, 50); //에러 안남
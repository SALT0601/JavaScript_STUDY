
console.log('---------------- Closure -----------------');
// Immediately Invoked Function Expression
//즉시 실행 함수 (function () { }());
//한번 실행하면 끝.

(function () {
    console.log('즉시 실행 함수 1');
}());

(function () {
    console.log('즉시 실행 함수 2');
})();           //;를 잊지 말고 붙이자.

let x = 10;
(function (num) {
    console.log('즉시 실행 함수 3 => ', num);
})(x);

function start() {
    console.log('원래 함수');
}

start(); //원래는 이렇게 따로 함수 호출해야함

const result = (function () {
    var x = 10;
    var y = 20;
    var result = 0;
    var alert = '값이 올바르지 않다.';

    return x;
})();         //이 줄이 끝나면 내부의 변수는 사라지는 변수라 var로 alert 써도됨

console.log(result);




const calc = (function () {
    var x = 10;
    var y = 20;
    var result = 0;
    var alert = '값이 올바르지 않다.';

    let onAdd = function () {
        result = x + y;
        return result;
    };

    let onMin = function () {
        return x - y;
    };
    let getResult = function () {
        return result;
    };

    return {
        result,             //0으로 초기화되어서 이미 리턴됨(즉시실행해서)
        alert,
        onPlus: onAdd, //값을 가져온거지 함수 호출한거 아님
        onMin,
        getResult
    };
})();

console.log(calc);
console.log(calc.onPlus());
console.log(calc.onMin());
console.log(calc.alert);
//onPlus()를 호출했다고 하더라도 즉시 실행함수가 실행된 상태에서 리턴된 값은
//이미 0인 상태에서 result 값이 리턴됨. 
console.log(calc.result);
console.log(calc.getResult());

//이 방법으로도 구현된다.
(function () {
    var x = 10;
    var y = 20;
    var result = 0;
    var alert = '값이 올바르지 않다.';

    let onAdd = function () {
        result = x + y;
        return result;
    };

    let onMin = function () {
        return x - y;
    };
    let getResult = function () {
        return result;
    };

    let obj = {
        result,
        alert,
        onPlus: onAdd,
        onMin,
        getResult
    };
    console.log(this); //window
    window.myLib = obj;
})();

console.log(myLib);
console.log(myLib.onPlus());
console.log(myLib.onMin());
console.log(myLib.alert);
//onPlus()를 호출했다고 하더라도 즉시 실행함수가 실행된 상태에서 리턴된 값은
//이미 0인 상태에서 result 값이 리턴됨. 
console.log(myLib.result);
console.log(myLib.getResult());






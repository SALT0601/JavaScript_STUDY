
console.log('---------------- Closure -----------------');

var x = 10;

function one() {
    var x = 'one';
    console.log(x); //one
    two();
}

function two() {
    console.log(x); //10
};

one();

//클로저 구조
function three() {
    let x = 'Three X';
    let y = 'Three Y';

    function inner() {
        return x;
    }
    return inner;
}
const threeIn = three(); // inner 함수로 리턴
console.log(threeIn);
const threeX = threeIn(); //그래서 함수로 쓸 있음
console.log(threeX);

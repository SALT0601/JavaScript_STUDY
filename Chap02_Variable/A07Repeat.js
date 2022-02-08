
console.log('---------------- Loop Statument -----------------');

var result = 0;

//for
for (var i = 1; i <= 10; i++) {
    result = result + i;
}
console.log(result);

//while
result = 0;
var i = 1;
while (i <= 10) {
    result = result + i;
    i++;
}
console.log(result);

//do ~ while
//먼저 시작을 해보고 시작의 결과를 가지고 조건을 체크할 경우 사용
result = 0;
var i = 1;
do {
    result += i;
    i++;
} while (i <= 10);
console.log(result);


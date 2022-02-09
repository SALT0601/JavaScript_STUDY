
console.log('---------------- Object Clone, Spread Operator -----------------');

var objA = {
    name: 'NolBu',
    age: 30
};

var objB = {
    address: 'Seoul',
    age: 100
};

// shallow Clone(얕은 복사)

//프로토타입 싱속(복사) 
//자바스크립트는 객체 만들어질때 프로토타입도 만들어짐
const one = Object.create(objA); //오브젝트가 부모인데 objA를 부모로 함. 그런데 objA부모가 오브젝트이므로 오브젝트도 가져옴
//오브젝트는 할아버지가 됨 ㅋㅋ
one.name = '흥부';
//자기거 있으면 자기거 우선 쓰고 없으면 부모꺼 씀

//[[Prototype]]을 확인
console.log(one);
console.log(one.name, one.age);
console.log('');

//복사 CLONE
const two = Object.assign({}, objA); //빈객체를 주면 복사(새롭게 만들어짐)
console.log(two);
console.log(two == objA); //복사라서 false 나옴(새 주소값에 할당되어 주소값이 다름)
console.log('');

//동일한 속성이 있으면 복사되는 객체의 값을 덮어쓴다.
//objA 자체가 변경된다 (빈객체가 아니라서 복사가 아닌 변경 개념)
//assign(복사대상 또는 변경 대상이 되는 객체, 값을 가져와 앞에 추가할 객체)
const three = Object.assign(objA, objB);
console.log(three);
console.log(objA);
console.log('');

// ECMA2015 ES6 Spread Operator - 위의 내용보다 더 쉽게 변경가능
var objC = {
    name: 'NolBu',
    age: 30
};

var objD = {
    address: 'Seoul',
    age: 100
};

///...을 펼친다라고 한다.
const four = { ...objC }; //assign {} 복사와 똑같은 개념
console.log(four, objC);

const five = { id: 1, ...objC }; //id는 그대로있고 objC가 복사됨
console.log(five);

//중복되는 프로퍼티는 뒤에 있는 객체 값으로 덮어쓴다.
const six = { ...objC, ...objD };//하나씩 펼쳐서 비교해서 대입복사함
console.log(six);



var objE = {
    name: 'NolBu',
    age: 30,
    info: {
        tel: '010-1234-5678',
        address: 'Seoul'
    }
};


//얕은 복사
//복시를 해서 새 주소값을 가진 객체를 만들어 내용들을 그대로 가져옴
//info는 주소값을 가지고 있기때문에 복사를 하면 그 주소값을 가져와
//info는 같은 주소값을 쳐다봄
const seven = { ...objE };

seven.name = '방자';
seven.info.tel = '010-0000-0000';
console.log(objE);
console.log(seven);

//깊은 복사
//즉 안에 있는것도 펼치면 깊은 복사 가능하다.
const deep = {
    ...objE, //objE풀고
    info: {
        ...objE.info //objE의 info도 풀어야함
    }
};

seven.name = '향단';
seven.info.tel = '010-7894-5612';
console.log(objE);
console.log(seven);

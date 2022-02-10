//객체지향
console.log('---------------- OOP -----------------');

var person = 'NolBu';
var kor = 100;
var eng = 80;
var onTotal = function () {
    return kor + eng;
};
var onAvg = function () {
    return onTotal() / 2;
};
var display = function () {
    console.log(`${person} / ${onTotal()} / ${onAvg()}`);
};
display();;

const hungbu = {
    name: 'HungBu',
    kor: 100,
    eng: 80,
    onTotal: function () {
        return this.kor + this.eng;
    },
    onAvg: function () {
        return this.onTotal() / 2;
    },
    display: function () {
        console.log(`${this.name} / ${this.onTotal()} / ${this.onAvg()}`);
    },

};
hungbu.display();

//Class. 함수의 이름을 대문자로 기술(관례)
//클래스는 기본적으로 리턴이 없고 new하고 선언되면
//호이스팅되어서 클래스 객체가 메모리에 그대로 올라감
//올라가면서 this라는게 만들어지고 그 안에 객체들이 있음
//new 하면 this 객체에 있던거 받아서 던져줌 . 그럼 그 객체값 그대로 가져와서 초기화
function Jumsu(name, kor, eng) {  //생성자 메서드
    this.name = name;
    this.kor = kor;
    this.eng = eng;

    this.onTotal = function () {
        return this.kor + this.eng;
    },
        this.onAvg = function () {
            return this.onTotal() / 2;
        },
        this.display = function () {
            console.log(`${this.name} / ${this.onTotal()} / ${this.onAvg()}`);
        };
};

const bangJa = new Jumsu('방자', 80, 90);
const hangDan = new Jumsu('향단', 50, 90);
//이러면 같은 내용이 각각의 인스턴트에 만들어짐
console.log(bangJa);
console.log(hangDan);
bangJa.display();
hangDan.display();
console.log('');





//그래서 바꿀 내용만 넣어줌
//프로토타입 체인
function JumsuProp(name, kor, eng) {  //생성자 메서드
    this.name = name;
    this.kor = kor;
    this.eng = eng;
};

//점수 피알오피가 부모가되고 부모가 가진 프로토 타입을 자식이 그대로 물려받는다.
JumsuProp.prototype.onTotal = function () {
    return this.kor + this.eng;
};
JumsuProp.prototype.onAvg = function () {
    return this.onTotal() / 2;
};
JumsuProp.prototype.display = function () {
    console.log(`${this.name} / ${this.onTotal()} / ${this.onAvg()}`);
};

const bangJa2 = new JumsuProp('방자', 80, 90);
const hangDan2 = new JumsuProp('향단', 50, 90);
//이러면 같은 내용이 각각의 인스턴트에 만들어짐
console.log(bangJa2);
console.log(hangDan2);

//this는 호출하는 곳(객체)
bangJa2.display(); //앞의 방자가 디스. 방자 없으면 윈도우가 디스
hangDan2.display();



Object.prototype.toText = function () {
    console.log('Hello');
};
String.prototype.toTrim = function () {
    console.log('String to trim');
};


let obj = {};
obj.toText();
//obj.toTrim(); //에러

let arr = [];
arr.toText();

let str = 'ABC';

str.toText();
str.toTrim();


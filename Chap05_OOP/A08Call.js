
console.log('---------------- [354] call, apply, bind -----------------');

var count = 100;

var myObj = {
    count: 0,

    visit: function () {
        this.count++;
        console.log('visit=> ', this.count, this);

        function inner(x) {
            this.count = this + x;                      //this => window
            console.log('call, apply this=> ', this.count, this);
        }

        //this를 동적으로 변경. call, apply 사용
        //inner.call(myObj, 2); //매개변수 없으면 (myObj)로 쓰고 없으면 저렇게 매개변수 순차적으로 써주면 됨
        //inner 함수 내부의 this를 myObj로 변경해서 실행
        inner.apply(myObj, [2]); //배열로 쓰는건 apply

    }
};
myObj.visit();
console.log('합계', myObj.count);
console.log('');


console.log('--------------- bind의 이용 ---------------');
var count = 200;

var yourObj = {
    count: 0,

    visit: function () {
        this.count++;
        console.log('visit=> ', this.count);

        function inner(x) {
            this.count += x;
            console.log('bind this=> ', this.count);
        }

        //inner(2);
        //this 가 변경된 메서드를 새롭게 생성
        //inner 메서드의 this의 참조를  yourObj로 변경한 후에 
        //함수 내용을 그대로 즉, 함수 자체를 bindInner라는 변수에 대입
        //따라서 bindInner와 inner의 내용은 동일하지만 this의 참조만 달라진다.
        //그래서  bindInner도 함수가 됨
        let bindInner = inner.bind(yourObj);  //내부 함수인 inner의 this는 yourObj됨

        //console.log(bindInner);
        bindInner(3);
    }
};
yourObj.visit();
console.log('합계', yourObj.count);
console.log('');



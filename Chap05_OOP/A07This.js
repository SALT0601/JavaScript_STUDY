
console.log('---------------- this -----------------');
console.log('--------------- 함수 내부의 함수 ---------------');
// 객체 내부 메소드 내부의 함수.
var count = 100;

const myObj = {
    count: 0,

    //객체에 기술된 함수(메서드)애서 this는 객체 자체를 의미
    visit: function () {
        ++this.count;
        console.log('visit: ', this.count);

        //메서드 내부 함수 또는 함수 내부에 함수에서는 this가 무조건 window가 된다.
        function inner(x) {
            this.count = this.count + x;
            //let count = 100는 TDZ에 올라가서 window에 있는게 아니니까 NaN가 됨
            console.log('visit Inner: ', this.count);
        }
        inner(2);
    }
};

myObj.visit();
console.log('');


console.log('--------------- 편법 that ---------------');
let count1 = 100; // (여기서는 var let 둘다 가능)

const myObj2 = {
    count1: 0,

    visit: function () {
        ++this.count1;
        console.log('visit: ', this.count1);


        //여기까지는 this가 myObj2인 상태. 여기서 that은 myObj2이다
        //this가 아닌 변수로 선언했으므로 scope chain을 따른다.
        //변수는 동적으로 바뀌는게 아니라 스코프 체인을 따라 올라간다.
        let that = this;
        function inner(x) {
            that.count1 = that.count1 + x;

            console.log('visit Inner: ', that.count1);
        }
        inner(2);
    }
};

myObj2.visit();





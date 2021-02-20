//인간에게는 이름이 있다.
//우리가 쓰는 표현중에는 대명사가 있고,
// 나자신을 가르키는 대명사가 있다.
// '나' 'me' 자기 자신을 가르키는 표현
// 프로그래밍적을 자기 자신을 가르키는 표현은 this 이다.

let hyunjin = {
  name: "hyunjin",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};
//키로 접근
//console.log(hyunjin.sum(hyunjin.first, hyunjin.second));
console.log(hyunjin.sum());
//자바스크립트의 객체지향에서 중요한점 자기가 속한 객체를 가르킨다. 특수한 예약어이다!
//this 로 객체 내부적인 상태를 참조할 수 있다.

//객체를 찍어내는 공장을 만들기 constructor

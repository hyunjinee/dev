//객체를 찍어낸다는 관점에서 생각했을 때
// 수정하나를 했을 때 같은 작업을 모든 객체에 다 해주어야한다.
//이런 작업은 비효율적이기 때문에 constructor 라는 개념이 생긴것
//객체를 찍어내는 공장을 만들고 객체를 양산하자.

let hyunjin = {
  name: "hyunjin",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};
let lee = {
  name: "lee",
  first: 13,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};
console.log(hyunjin.sum());
console.log(lee.sum());

let d1 = new Date("2019-4-10");
let d2 = new Date("2029-4-10");
// Date 객체의 내부적인 메커니즘은 이해를 못한다. 하지만 이것을 이용해 객체를 양산 할 수 있다. Factory특성

console.log(d1);
console.log(d2);
console.log("d1.getFullyear()", d1.getFullYear());
console.log("d1.getMonth()", d1.getMonth());

//객체를 만드는게 함수를 호출하는것이랑 비슷하다.
//Date 는 함수이다?
//맞다
console.log("Date", Date);
//Date 는 함수이고 그 내용은 { [native code]} 즉 내장된 코드이다.
// function Person() {
//   this.name = "hyunjin";
//   this.first = 10;
//   this.second = 20;
//   this.third = 30;
//   this.sum = function () {
//     return this.first + this.second + this.third;
//   };
// }
console.log("Person()", Person());
console.log("new Person()", new Person());
//함수를 호출하면 그냥함수
//new 를 붙이면 객체를 생성하는 생성자 constructor
//new 를 붙이면 생성자 함수라고 한다.
//내부적으로 입력값을 주입해서 생성되는 객체를 바꿔야해!!!
// new Person(10,20 ,30) 요런식으루
function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function () {
    return this.first + this.second + this.third;
  };
}
// 이것이 바로 객체를 찍어내는 생성자 함수를 만드는 방법이다.

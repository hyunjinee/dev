//js 내장 객체를 알아보자
console.log("Math.PI", Math.PI);
console.log("Math.random()", Math.random());
console.log("Math.floor(3.9): ", Math.floor(3.9));
//js 를 쉽게 개발하라고 수학적인것과 관련됫것들을 개발자들이 제공 날짜 문자 등 수많은 기능 정리정돈해서 제공
//Math 에는 수학과관련된 변수 또는 함수를 그루핑해서 관리한다.
// 이미 만들어진 객체를 사용하지않고 자바스크립트를 사용하는 것은 어렵다
// 객체는 낯선것이아니라 이미우리는 사용하고 있었다.
//함수가 객체에 소속되어있을때는 메서드이다.

// 객체를 만들어보자
let MyMath = {
  PI: Math.PI,
  random: function () {
    return Math.random();
  },
  floor: function (val) {
    return Math.floor(val);
  },
};
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
// 객체를 통해 서로 연관된 함수와 변수를 그루핑해서 정리

//이렇게 나눠지는거지 객체가 없으면. 접두사로 충돌을 해결하겠지만 디렉토리 즉 객체가 존재한다면,
//정리정돈이 가능해지고 이를 객체로 표현한것이다.
let MyMath_PI = Math.PI;
function MyMath_random() {
  return Math.random();
}

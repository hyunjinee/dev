var kim = { name: "kim", first: 10, second: 20 };
var lee = { name: "lee", first: 10, second: 10 };
lee.__proto__ = kim;
//lee 의 부모는 kim
function sum(prefix) {
  return prefix + (this.first + this.second);
}
//sum 은 객체에 속해있지 않지만, this 를 쓰고 있다.
// sum(); ===
sum.call(kim, "=> ");
// this -> kim 이된다.
//함수도 객체이다 모든함수는 call 이라는 메서드를 가지고 있다.
//sum 이라는 객체를 실행
// 첫째인자는 함수 내부적으로 this 값 가질 대상, 두번째 인자는 매개변수
let kimSum = sum.bind(kim, "->");
console.log("kimsum()", kimSum());
//함수는 객체이기때문에 call bind 등의 메서드를 가지고있습니다.

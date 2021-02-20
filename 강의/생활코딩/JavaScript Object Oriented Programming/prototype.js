//사물의 공통된 모습 즉 원형.

// js에서 prototype 이라는 것은
// prototype based language
// 프로토 타입은 js 의 기반이다.
// 밑에객체에서 sum 함수는 객체가 생성될 때마다 생성된다. 즉 컴퓨터 메모리의 낭비이다.
// 따라서 객체를 생성할 때 마다  함수를 생성하는데 시간이들고 메모리 사용은 성능저하이다.
//
function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  //   this.sum = function () {
  //     return this.first + this.second + this.third;
  //   };
}
//생성자안에서 메서드를 갖는 단점 즉 생산성이 떨어진다. 그렇기 때문에, 모든 객체가 공통된 메서드를 갖으면 좋겠다.
//이게 prototype 이다.
Person.prototype.sum = function () {
  return this.first + this.second;
};
let kim = new Person("kim", 1, 20);
kim.sum = function () {
  return "modified: " + this.first + this.second;
};
//객체 자신의 속성이 최우선, 그다음 없다면 ? prototype

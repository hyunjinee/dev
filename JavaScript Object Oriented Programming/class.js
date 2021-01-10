//js는 문법적 거부감없이 js에 안착시키기위해 class같은거 채택
//객체를 만드는 공장으로써의 클래스
//js 는 지원하지 않다가 지원하게됨
//객체를 찍어내는 constructor fucntion 의 대체제
//객체지향 to class

// new 는 객체를 리턴한다.
//constructor 함수는 객체를 만들고 객체의 초기상태를 세팅한다.
// 객체가 만들어기 직전에 실행되도록 약속되어있는 함수 constructor()
class Person {
  constructor(name, first, second) {
    (this.name = name), (this.first = first), (this.second = second);
    console.log("constructor");
  }
  sum() {
    return "prototype:" + (this.first + this.second);
  }
}
// Person.prototype.sum = function () {
//   return "prototype:" + (this.first + this.second);
// };
let kim = new Person("kim", 20, 30);
console.log("kim", kim);
console.log(kim.sum());

//확장 상속 중복의제거 코드양 줄이고, 하나를 바꾸는 것으로 상속된 클래스들 동시다발적 변경 유지보수의 편의성.
class PersonPlus extends Person {
  constructor(name, first, second, third) {
    super(name, first, second);
    this.third = third;
    // 괄호가 붙으면 부모클래스의 생성자
  }
  sum() {
    return super.sum() + this.third;
    // . 이붙어서 가져오면 부모클래스의 메서드
  }
  avg() {
    return (this.first + this.second) / 2;
  }
}
//기능의 도입은 대가를 따른다. (복잡성)
// 상속을 도입했을때 겪게되는 문제들중 중요한것
//자식과 부모의 관계, super 라는 키워드
//personplus 에서는 third 라는 세번째 값도 가지고 싶을때 어떻게할것인가?

//주류 객체지향언어들에서는 상속을 어떻게다루는가?
// sub class 가 super 의 자식이되고, sub 클래스를통해 객체를 생성 (class 가 상속을 받는다.)
// class 딴에서 객체의 기능 결정한다.
// 이객체는 태어날때부터 기능이 결정되어있다.

// 자바스크립트는 내부 메커니즘을 바꾸지 않고 class 를 도입했다.
// 주류 객체지향보다 자유롭다. 그만큼 복잡하고 혼란스러운 면이 있는데 ,
// 자바스크립트가 상속을 구현하는 방법은 sub 객체가 super 객체로 부터 상속
// (js 에서는 객체가 다른객체의 상속을 받고, 상속 관계를 바꿀 수 있다.)
// 필요에의해 다른 객체로부터 상속을 받고 싶으면 그냥 prototype link 를 바꿔주면된다. 주류객체지향은 class 상속
// js 는 객체끼리 상속가능 prototype object 로부터 상속받는다 prototype link 는 prototype object 를 가르킨다.

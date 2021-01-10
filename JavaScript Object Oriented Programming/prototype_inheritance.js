var superObj = { superVal: "super" };
var subObj = { subVal: "sub" };
// 객체를 다른 객체의 자식으로 만들수있다. 객체간의 상속
// 클래스가 아닌데 이게 가능하다.
subObj.__proto__ = superObj;
// prototype link prototype object
console.log("subObj.subVal=>", subObj.subVal);
console.log("subObj.superVal=>", subObj.superVal);
subObj.superVal = "sub";
console.log("superObj.superVal=>", superObj.superVal);
// 그 객체를 바꾼거지 그 객체의 __proto__ 를 바꾼 것이아니다.
console.log(subObj.superVal);
//객체간의 상속은  __proto__

let subObj = Object.create(superObj);
//super 객체를 sub 가 상속
// __proto__ 와 같은 기능
//debugger 로 객체 상태들 탐색 가능하다.

//class 기반의 객체지향과 다른느낌의 js
//클래스가 클래스를 상속하는것이아닌 객체가 객체를 상속 런타임 실행중에 상속을 바꿀 수 있다.
//object.create과 __proto__ 를 사용
// 함수는 돌아다니다가 어떤 객체의 메서드도 될수 있다.
// call bind api

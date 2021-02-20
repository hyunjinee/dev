//객체를 만들고 객체를 읽을 줄 알아야한다.

//먼저 배열을 보자
// 조직의 멤버를 목록화 해보겠다.
// 배열 또는 객체를 쓸 수 있지만, 배열을 한번 써보겠습니다.
let memberArray = ["hyunjin", "egoing", "leezhe"];
//배열에서 2번째 값을 가져온다.
console.log("memberArray[1]: ", memberArray[1]);
//객체로 한번 표현해 보자.
let memberObject = {
  manager: "egoing",
  developer: "hyunjin",
  designer: "leezhce",
};
// 객체는 . 또는 배열처럼 접근할 수 있다. 더유용하다.
// 수정 삭제 가능
memberObject.designer = "leezche";
console.log("memberObject.designer: ", memberObject.designer);
console.log("memberObject[designer]: ", memberObject["designer"]);
delete memberObject.manager;
console.log("after delete meberObject.manager", memberObject.manager);

// 이름이 있는 정보를 정리정돈할 때 쓰는 도구이다.
// 객체의 정보는  . 이나 [] 로 읽을 수 있고 값을 지울때는 delete 라는 연산자를 이용한다.

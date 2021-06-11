let memberArray = ["hyunjin", "egoing", "leezhe"];

let memberObject = {
  manager: "egoing",
  developer: "hyunjin",
  designer: "leezhce",
};
console.group("array loop");
let i = 0;
while (i < memberArray.length) {
  console.log(i, memberArray[i]);
  i = i + 1;
}
console.groupEnd("array loop");

console.group("object loop");
//키 값을 모두 가져온다.
for (let member in memberObject) {
  console.log("member:", member);
}
for (let member in memberObject) {
  console.log(memberObject[member]);
}
// memberObject.member 할 수 없는 이유 이거 하면 undefined 가 뜨는데 member 가 변수 이기 때문이다.
console.groupEnd("object loop");

# Single Page Application with pure js and express

![ezgif com-gif-maker (18)](https://user-images.githubusercontent.com/63354527/108520607-3ae8be00-730e-11eb-81e0-62ee95896417.gif)

## [Object.fromEntries()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)

Object.fromEntries()메서드는 키 값의 쌍의 목록을 객체로 바꾼다.

```javascript
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
const obj = Object.fromEntries(entries);
console.log(obj);
// {foo: "bar", baz: 42}
```

매개변수 : iterable 반복가능한 객체. 즉, Array,Map등 반복규약을 구현한 기타 객체

반환값: 속성의 키와 값을 반복 가능한 객체에서 가져온 새로운 객체.

Object.fromEntries()는 Object.entries()의 역을 수행한다.

```javascript
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1).map(([key, val]) => [key, val * 2])
);

console.log(object2);
// { a: 2, b: 4, c: 6 }
```

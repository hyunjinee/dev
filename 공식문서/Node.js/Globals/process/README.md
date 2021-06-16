# process

process 객체는 전역객체이고 어디서나 접근 가능하다. 이 객체는 EventEmitter의 인스턴스이다.

## Event:'exit'

프로세스가 종료될 때 발생한다. 이때 이벤트 루프의 종료를 막을 수 있는 방법은 없고 일단 exit 리스너들이 모두 종료되면 해당 프로세스는 종료될 것이다. 그러므로 이 핸들러에서 반드시 동기적인 작업만을 수행해야한다. 이 이벤트는 모듈의 상태를 상수시간으로 확인하기에 좋은 지점이다. 콜백은 프로세스가 종료될 때의 코드를 인자로 가진다.

```javascript
process.on("exit", function (code) {
  // 이렇게 하지 *말아라*
  setTimeout(function () {
    console.log("This will not run");
  }, 0);
  console.log("About to exit with code:", code);
});
```

## Event: 'uncaughtException'

예외가 이벤트 루프까지 버블링되었을 때 발생한다. 이 예외에 대한 리스너를 추가하면 기본 동작(스택트레이스를 출력하고 종료한다.)은 수행되지 않을 것이다.

```javascript
process.on("uncaughtException", function (err) {
  console.log("Caught exception: " + err);
});

setTimeout(function () {
  console.log("This will still run.");
}, 500);

// 의도적인 예외로 예외를 처리하지 않는다.
nonexistentFunc();
console.log("This will not run.");
```

uncaughtException는 세련되지 않은 예외 처리 방법이고 차후에는 제거될 것이다.
uncaughtException를 사용하지말고 대신 domains를 사용해라. uncaughtException를 사용한다면 처리하지 않은 예외마다 어플리케이션을 리스타트해라!

uncaughtException를 node.js의 On Error Resume Next로 사용하지 마라. 처리하지 않은 예외는 어플리케이션이 정의되지 않은 상태에 있음을 의미한다.

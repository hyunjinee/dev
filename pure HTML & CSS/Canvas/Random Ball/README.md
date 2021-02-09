# Generating A Random size Ball with HTML CANVAS

![ezgif com-gif-maker (11)](https://user-images.githubusercontent.com/63354527/107323788-3b04e480-6aea-11eb-91cd-64fb1e38d198.gif)

처음으로 HTML Canvas 를 다루어 보았다.

html 기본 틀을 만들고, canvas 태그로 틀을 만들고 style 을 주었다. 이때 html 의 기본 틀이 있기 때문에 heigt 를 100% 먹여도 화면에 끝까지 차지 않는 것을 볼수있다. 그래서 js 에서 canvas요소를 선택해주고 높이와 넓으를 브라우저의 높이와 넓이로 맞춰주었다.

```javascript
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

## HTMLCanvasElement.getContext()

위 메서드는 캔버스의 드로잉 컨텍스트를 반환한다. 컨텍스트 식별자가 지원되지 않을 경우 null을 반환한다.
동일한 캔버스 엘리먼트에서 나중에 이메서드를 호출하면 동일한 contextType인자와 함께 메서드가 마지막으로 호출되었을 때 반환된 것과 동일한 드로잉 컨텍스트 인스턴스를 반환한다. 다른 드로잉 컨텍스트 객체를 얻으려면 다른 contextType을 전달하거나 다른 캔버스 엘리먼트에서 메소드를 호출해야한다.

```javascript
var ctx = canvas.getContext(contextType);
var ctx = canvas.getContext(contextType, contextAttributes);
```

### contextType

캔버스에 연관된 드로잉 컨텍스트를 정의하는 컨텍스트 식별자를 갖는 DOMString이다.

- "2d" 2차원 렌더링 컨텍스트를 나타내는 CanvasRenderingContext2D 객체를 생성하게 한다.
  이외에 webgl또는 webgl2, bitmaprenderer등이 있다.

[MDN](https://developer.mozilla.org/ko/docs/Web/API/HTMLCanvasElement/getContext)

처음에 초기화 해준 것들은 context와 mouse , maxRadius, colorArray이다.
확장성을 고려해서 변수로 빼주었다. ex)색깔 추가 가능, 반지름 최대 길이 길게 확장가능.

마우스가 움직일때 그 이벤트 객체의 좌표를 가져와서 마우스 객체에 담아준다.

```javascript
window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});
```

resize 되었을 때는 캔버스의 길이와 넓이가 바뀌므로 다시 브라우저의 넓이와 높이로 바꾸어주고, 공들을 초기화 시켜야한다!

다음은 중요한 부분인 Circle class부분이다.

```javascript
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  };
  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    //interactivity
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.radius < maxRadius) {
        this.radius++;
      }
    } else if (this.radius > this.minRadius) {
      this.radius--;
    }

    this.draw();
  };
}
```

Circle을 인스턴스로 만들때, 파라미터들을 넘겨 받아서 공마다 다른 속도, 다른 좌표, 다른 반지름으로 만들어지게끔한다.
색깔도 랜덤으로 색깔배열에서 고를 수 있게 만든다.
update메서드는 공을 화면 밖으로 못나가게 만들었고, interactivity부분의 마우스 포인터의 좌표와 50 거리 이하인 애들을 반지름을 증가시켰다. 그리고 마지막에 draw메서드를 호출해서 화면에 그리는 것을 볼 수 있다.

```javascript
var circleArray = [];
function init() {
  circleArray = [];
  for (var i = 0; i < 800; i++) {
    var radius = Math.random() * 3 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = Math.random() - 0.5;
    var dy = Math.random() - 0.5;
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}
```

이부분은 공들을 배열에다가 때려 넣는 부분이다. 모두다 랜덤한 값으로 설정해서 다이나믹하게 들어가도록 해준다.

## requestAnimationFrame

```javascript
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
```

window.requestAnimationFame()은 브라우저에게 수행하기를 원하는 애니메이션을 알리고 다음 리페인트가 진행되기 전에 해당 애니메이션을 업데이트 하는 함수를 호출하게 한다. 이메서드는 리페인트 이전에 실행할 콜백을 인자로 받는다.
화면에 새로운 애니메이션을 업데이트 할 준비가 될 때매다 이메서드를 호출하는 것이 좋다. 이는 브라우저가 다음 리페인트를 수행하기전에 호출된 애니메이션 함수를 요청한다. 콜백의 수는 보통 1초에 60회지만 일반적으로 대부분브라우저에서는 W3C권장사항에 따라 그 수가 디스플레이 주사율과 일치하게된다. 대부분 최신브라우저에서는 성능과 배터리 수명 향상을 위해 requestAnimationFrame() 호출은 백그라운드 탭이나 hidden <iframe> 에서 실행이 중단된다.

```javascript
var start = null;
var element = document.getElementById("SomeElementYouWantToAnimate");
element.style.position = "absolute";

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  element.style.left = Math.min(progress / 10, 200) + "px";
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
```

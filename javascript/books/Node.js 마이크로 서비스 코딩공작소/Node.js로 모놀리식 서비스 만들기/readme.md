# 3 Node.js 의 이해

## 3.1 비동기 프로그래밍

일반적으로 파일 I/O나 네트워크 I/O는 메모리I/O보다 현저히 느리다. 예를 들어 파ㅣㅇㄹ의 입출력을 하나씩 처리한다면 처리 시간은 길어지고 CPU의 사용 효용성은 떨어진다. 이를 개선하고자 비동기 프로그래밍을 사용하는데, 순차적으로 I/O를 처리하는 것이아니라 I/O처리 요청만 운영체제에 전달하고 CPU는 다른 연산을 수행한다.

개발자는 보장되지 않은 I/O 완료 처리를 고려해 프로그래밍해야한다. 노드는 모든 함수와 모듈이 비동기 프로그래밍을 기본으로 한다. 동기 방식 함수들이 약간 있지만 제한적이기 때문에 비동기 프로그래밍에 익숙해질 필요가있다.

process.nextTick함수는 특정 함수를 호출하기전에 CPU가 다른 우선순위의 명령을 수행하게 한다.

## 3.2 싱글 스레드 프로그래밍

CPU는 한번에 하나의 명령만 수행가능하다. 그래서 CPU클록 수에 따라 처리 속도가 결정된다. 이러한 한계를 극복하려고 스레드 개념을 도입했다.

멀티스레드 프로그래밍은 대용량 처리에서 필수적으로 사용하는 프로그래밍 방식이지만, 오류를 찾아내기 어렵고 구현할 때 고려할 사항이 많아 그동안 개발자들을 괴롭혀왔다.

노드는 이러한 복잡한 멀티 스레드 대신 싱글 스레드 프로그래밍 만으로도 멀티스레드 프로그래밍 성능을 구현하도록 프레임워크가 구성되어있다.

노드는 싱글스레드 기반으로 동작한다. 여기서 주의할 점은 싱글스레드라고 해서 모두 같은 스레드 위에서 동작하지 않는다는 것이다. 비동기 호출을 할경우 함수를 호출한 영역과 콜백을 처리하는 영역이 각기 다른 스레드위에서 동작한다. 이때 try-catch 문으로 예외를 처리하기에는 무리가있다. node.js 는 모든 스레드에서 예외 처리를 할 수 있도록 uncaughtException 이벤트를 제공한다.

```js
process.on("uncaughtException", (error) => {
  console.log("잡히지않은 에러발생")
})
```

## 3.3 노드로 서버와 클라이언트 만들기

노드는 기본적으로 고성능 네트워크를 손쉽게 처리할 수 있는 네트워크 프레임워크다. 고성능 I/O서버를 구현하는 것은 많은 학습과 경험이 필요한 영역이었다. 노드는 이러한 복잡한 영역을 효과적으로 은닉화해 손쉽게 고성능 I/O 시스템을 구현할 수 있게한다.

마이크로 서비스는 기본적으로 서버이지만 다른 마이크로 서비스에 정보를 요청해야하는 클라이언트가 되기도 한다. 노드를 이용해 HTTP, TCP의 서버와 클라이언트를 만들어보자.

### 3.3.1 HTTP서버 만들기

HTTP는 전세계에서 가장 인기있는 네트워크 프로토콜이다. WWW으로 이미 많은 시스템에서 활용중이며 HTML뿐만아니라 JSON,XML등 다양한 문서 포맷을 사용하기에도 편리하다. 또 대용량 패킷전달 상태관리, 보안 처리등 각종 네트워크 이슈에 대한 대비 책도 마련되어있다.

### 3.3.3 TCP서버 만들기

TCP는 인터넷 프로토콜 스위트의 핵심 프로토콜 중 하나로 TCP/IP라는 명칭으로도 많이 사용한다. 연결과정이 필요한 신뢰할 수 있는 통신에 사용되는 프로토콜로 앞에서 살펴본 HTTP도 TCP기반으로 만든 프로토콜이다.

```js
const net = require("net")
const server = net.createServer((socket) => {
  socket.end("heelo owrld")
})

server.on("error", (err) => console.log(err))

server.listen(9000, () => console.log("listen", server.address()))
```

TCP에 접속할수 있는 클라이언트를 만들어보자.

```js
const net = require("net")

const options = {
  port: 9000,
  host: "127.0.0.1",
}

const client = net.connect(options, () => console.log("connected"))

client.on("data", (data) => console.log(data.toString()))
client.on("end", () => console.log("disconnected"))
```

## 4.3 rest api 설계

REST(Representational state transfer)는 http 프로토콜의 주요 저자인 로이 필딩이 2000년 자신의 박사학위 논문에서 소개했다. rest는 기존 rpc나 soap 등 복잡한 프로토콜로 통신하는 것보다 이미 널리 사용하는 http 프로토콜로 통신하는 것이 더 효율적이라는 내용이다. rest는 자원지향 구조로 접근하고자하는 자원에 고유한 URI를 부여하는 방식이다. 자원을 기준으로 API를 설계하기 때문에 행위를 기준으로 설계할 때는 어색한 부분이 발생하지만, 데이터 관점에서는 직관적인 설명이 가능하기에 널리 활용된다. 요구사항에서 정의된 기능을 개발하려면 HTTP호출을 위한 기능별 메서드와 URI를 정의해야한다.

## 4.4 데이터베이스 설계

상품관리, 회원관리 구매관리를 만들려면 상품 회원 구매 데이터를 저장할 곳이 필요하다. 일반적으로 데이터를 저장하는 저장소로 관계형 데이터베이스와 비관계형 데이터베이스를 활용한다.
관계형 데이터베이스는 70년 에드거커드가 제안한 데이터 관계형 모델에 기초한 데이터베이스로 데이터의 일관성을 높이고 보장하고 싶은 성능을 보입니다. 대표적인 관계형 데이터베이스로 오라클, MS SQL Server, MySQL, PostgreSQL이 있습니다.

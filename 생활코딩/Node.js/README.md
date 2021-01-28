# Node.js

노드는 웹서버 기능을 내장한다.
프로그래밍적으로 사용자에게 전송할 데이터를 생성한다.

## URL의 이해

http://opentutorials.org:3000/main?id=HTML&page=12
http 통신규칙
opentutorials.org host(domain)도메인네임 또는 호스트라고 불리며 인터넷에 접속되어있는 컴퓨터.
3000 port 한대의 컴퓨터안에 서버는 여러대일 수 있고 클라이언트는 어떤 서버랑 통신할지 애매하다. 즉 구분해주는 포트가 필요하다.
main 이건 path 이다 컴퓨터안에있는 어떤 디렉토리의 어떤 파일인지 알려준다.
query스트링에따라 다른 정보를 보여줄 수 있어야한다.

## callback function

자바스크립트에서 함수는 일급 객체이다. 즉, 함수는 Object타입이며 다른 일급객체와 똑같이 사용될 수 있다.(String, Array, Number, 등등) function 자체가 객체이므로 변수안에 담을 수 있고 인수로서 다른 함수에 전달해 줄수도 있고, 함수에서 만들어질수도 있고 반환될 수도있다.
callback function은 특정함수에 매개변수로서 전달된 함수를 지칭한다. 그리고 그 callback은 그 함수를 전달받은 함수 안에서 호출된다. 
callback 함수로 인해 non-blocking code 를 만들수 있다. 모든 Node 어플리케이션의 비동기식 함수에서 첫번째 매개변수로는 error를 마지막 매개변수로는 callback 함수를 받는다.
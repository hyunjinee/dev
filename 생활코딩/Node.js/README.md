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

# HTTP

### HyperText Transfer Protocol

인터넷에서 중요한 통신 규칙 웹을 너머 인터넷이 동작하는 근간 서버와 클라이언트의 통신 규칙
클라이언트가 서버에 html 주세요 할때(request), 서버는 여기있습니다 하고 물건을 준다. (response)
html,css, js, img 와같은 컨텐츠들은 서버와 클라이언트가 서로 알아들을수 있는 공통의 약속 http.
http는 req 와 res 로 구분된다.
실제로http 는 추상적이라고 느껴질 것이다. 맞다. 실제로 추상적이다.
브라우저의 network 탭에 가면 그 통신을 볼 수 있는데, Request Headers 를 보면 , 텍스트들을 볼 수 있다.
Response Header 을보면, 자기 통신 방법을 응답하는데 , HTTP/1.1 200 OK 이런식으로 응답한다.

### HTTP Request message

바디와 헤드는 중간에 blank line 을 두고 구분한다.

# WEB3 자바스크립트를 이용한 구글 로그인

id, password 를 통해서 사람을 인증한다.
Federated identity 에서는 oauth 를이용

user 은 resource owner
우리의 service 는 Client
구글의 정보는 resource
구글의 서버 resource server

owner 가 서버에 있는 일부기능들을 우리의 서비스인 client 에게 허락

access token 을 받아서 api 를 호출할 때
access token 이 비밀번호인 셈이다.

구글에등록된 아이디를 우리서비스 회원가입 아이디 대신에 사용가능하다.

우리의 서비스가 리소스 오너의 정보를 이용하려면 리소스 서버에 등록해서 허가를 맡아야하고, 리소스서버는 우리의 서비스를 식별할 수 있는 client id와 client secret 을 발급한다.
이 식별자로 구글은 우리의 서비스를 식별한다.

구글에서 제공하는 sdk 를 이용해서 로그인구현!
![캡처](https://user-images.githubusercontent.com/63354527/104687351-5e827c80-5742-11eb-8b2f-90bf9e68b6c9.PNG)

검색어
integrating google sign-in into your web

google sign in javascript client reference
구글 api 를 통해 access 하면 따로 로그인을 구현하지 않아도되니, 매우 편하다.

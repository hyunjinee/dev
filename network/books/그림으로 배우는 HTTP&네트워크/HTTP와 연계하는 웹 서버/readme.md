## 5.1 1대로 멀티 도메인을 가능하게 하는 가상호스트 

HTTP/1.1 에서는 하나의HTTP 서버에 여러개의 웹사이트를 실행할 수 있다. 예를 들면, 웹 호스팅을 제공하고 있는 사업자는 1대의 서버에 여러고객의 웹사이트를 넣을 수 있다.

고객마다 다른 도메인을 가지고 다른 사이트를 실행할 수 있다. 이를 위해 가상호스트를 사용하고 있다. 가상 호스트를 사용하면 물리적으로는 서버가 한대이지만 가상으로 여러대가 있는 것처럼 설정하는 것이가능하다. 같은 IP주소에서 다른 호스트명과 도메인 명을 가진 여러개의 웹사이트가 실행되고 있는 가상 호스트의 시스템이 있기 때문에, HTTP리퀘스트를 보내는 경우에는 호스트명과 도메인 명을 완전하게 포함한 URI를 지정하거나 반드시  HOST 헤더필드에서 지정해야한다.

## 5.2 통신을 중계하는 프로그램: 프록시, 게이트웨이, 터널

HTTP는 클라이언트와 서버이외에 프록시, 게이트웨이,  터널와 같은 통신을 중계하는 프로그램과 서버를 연계하는 것도 가능하다. 이러한 프로그램과 서버는 그 다음에 있는 다른 서버에 리퀘스트를 중계하고 그 서버로부터 받은 리스폰스를 클라이언트에 반환하는 역할을 담당한다.

- 프록시: 서버와 클라이언트의 양쪽 역할을 하는 중계프로그램으로 클라이언트로부터의 리퀘스트를 서버에전송, 서버로부터의 리스폰스를 클라이언트에 전송.
- 게이트웨이: 다른 서버를 중계하는 서버로 클라이언트로부터 수신한 리퀘스트를 리소스를 보유한 서버인 것처럼 수신한다. 경우에 따라서는 클라이언트는 상대가 게이트웨이라는 것을 알지 못하는 경우도 있다.
- 터널: 서로 떨어진 두대의 클라이언트와 서버 사이를 중계하며 접속을 주선하는 중계프로그램이다.

### 5.2.1 프록시 proxy

프록시 서버의 기본적인 동작은 클라이언트로부터 받은 리퀘스트를 다른서버에 전송하는 것이다. 클라이언트로부터 받은 리퀘스트를 URI를 변경하지 않고 그 다음의 리소스를 가지고 있는 서버에 보낸다.
리소스 본체를 가진 서버를 오리진 서버라고 부른다. 오리진 서버에서부터 되돌아온 리스폰스는 프록시서버를 경유해서 클라이언트에 돌아온다.
프록시 서버를 사용하는 이유는 나중에 설명할 캐시를 사용해서 네트워크 대역등을 효율적으로 사용하는 것과 조직내에 특정 웹사이트에 대한 엑세스 제한, 엑세스 로그를 획득하는 정책을 철저하게 지키려는 목적으로 사용하는 경우도 있다.

프록시의 사용 방법은 여러가지가있는데 2가지 기준으로 분류한다. 캐시하는지 안하는지 여부로 구분하거나 또다른 하나는 메시지를 변경하는지 안하는지로 구분한다.

- 캐싱 프록시: 프록시로 리스폰스를 중계하는 때에는 프록시 서버 상에 리소스 캐시를 보존해 두는 타입의 프록시이다. 프록시에 다시 같은 리소스에 리퀘스트가 온 경우, 오리진 서버로부터 리소스를 획득하는 것이 아니라 캐시를 리스폰스로서 되돌려주는 것이 있다.
- 투명 프록시: 프록시로 리퀘스트와 리스폰스를 중계를 할 때 메시지 변경을 하지 않는 타입의 프록시를 투명 프록시라고한다. 반대로 메시지에 변경을 가하는 타입의 프록시를 비투과 프록시라고한다.


### 5.2.2 게이트웨이

게이트웨이 동작은 프록시와 매우 유사하다. 게이트웨이의 경우 다음에 서버가 HTTP서버 이외의 서비스를 제공하는 서버가 된다. 클라이언트와 게이트웨이 사이를 암호화하는 등으로 안전하게 접속함으로써 통신의 안전성을 높이는 역할을 한다.
예를 들면, 게이트웨이는 데이터베이스에 접속해 SQL 쿼리를 사용해서 데이터를 얻는 곳에 이용할 수 있다. 

### 5.2.3 터널

터널은 요구에 따라서 다른 서버와의 통신 경로를 확립한다. 이 때 클라이언트는 SSL 같은 암호화 통신을 통해 서버와 안전하게 통신을 하기위해 사용된다.

터널 자체는  HTTP리퀘스트를 해석하려고 하지 않는다. 결국 리퀘스ㅌ는 그대로 다음 서버에 중계한다. 그리고 터널은 통신하고 있는 양쪽 끝의 접속이 끊어질 때에 종료한다. 

## 5.3 리소스를 보관하는 캐시

캐시는 프록시 서버와 클라이언트의 로컬 디스크에 보관된 리소스의 사본을 가리킨다. 캐시를 사용하면 리소스를 가진 서버에의 엑세스를 줄이는 것이 가능하기 때문에 통신량과 통신시간을 절약가능

캐시 서버는 프록시서버의 하나로 캐싱 프록시로 분류된다. 결국 프록시서버로부터의 리스폰스를 중계하는 때에 프록시 서버 상에 리소스의 사본을 보존한다. 캐시 서버의 장점은 캐시를 이용함으로써 같은 데이터를 몇번이고 오리진 서버에 전송할 필요가 없다는 것이다. 그래서 클라이언트는 네트워크에서 가까운 서버로부터 리소스를 얻을 수 있게되어 서버는 같은 리퀘스트르 ㄹ매번처리하지 않아도 된다.

### 5.3.1 캐시는 유효기간이 있다.

캐시 서버에 캐시가 있는 경우라도 같은 리소스의 리퀘스트에 대해서 캐시를 돌려준다고는 할 수 없다 .이것은 캐시되어 있는 리소스의 유효성과 관계가 있다. 언제까지나 같은 캐시를 계속해서 사용하고 있다보면 오리진 서버에 있는원래 리소스가 갱신되는 경우가 있는데 이때 캐시 서버는 갱신되기 전의 낡으 리소스를 그대로 보내게된다. 그래서 캐시를 가지고 있더라도 클라이언트의 요구나 캐시의 유효기간등에 의해서 오리진 서버에 리소스의 유효성을 확인하거나 새로운 리소스를 다시 획득하러 가게 되는 경우가있다.

### 5.3.2 클라이언트 측에도 캐시가 있다.

캐시 서버만 캐시를 가지고 있는게 아니라 클라이언트가 사용하는 브라우저에도 캐시를 갖는다. 인터넷 익스플로러에서 크랄이언트에 존재하는 캐시를 인터넷 임시파일 이라고 부른다. 브라우저가 유효한 캐시를 가지고있는 경우, 같은 리소스의 엑세스는 서버에 엑세스하지않고 로컬 디스크로부터 불러온다. 또한, 캐시 서버와 마찬가지로 리소스가 오래된것으로 판단되는 경우에는 오리진 서버에 리소스의 유효성을 확인하러 가거나 새로운 리소스르 ㄹ다시 획득하러 가는 일이 있다.


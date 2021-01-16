# Domain Name System

IP 주소 덕분에 HOST 와 HOST 를 연결해서 통신 할 수 있게되었다.
IP 주소를 이용할 때 IP 주소를 기억하기가 너무 어렵다는게 관심사가 되었다.
Domain Name System
DNS 가 고안되었다.
DNS Server 에는 수많은 IP 주소의 도메인 이름이 저장되어있다.
예를 들어서 www.icann.org 라고 입력하면 우리의 운영체제는 몰래 DNS Server 에 접속해서 IP 주소를 물어보고
DNS Server 가 IP 주소를 알려주면 비로써 IP 주소에 해당하는 컴퓨터에 접속한다.
이름을 붙인다는것은 매우 특별한일이다!

DNS 을 이용해서 우리의 컴퓨터에 이름을 붙여준다면 사람들은 우리의 컴퓨터를 보다 인간적으로 알아볼 수 있다.

두대의 컴퓨터가 통신하기 위해선 IP 주소가 필요하다.
Client 가 Server 에 접속 할때 Server 의 IP 주소를 알아야하고 Server 는 리턴할때 Client 의 IP 주소를 알아야한다.
이때, 인터넷에 연결 되어있는 컴퓨터들을 HOST 라고 한다.
네트워크에 연결되있는 컴퓨터, 장치들 => HOST
example.com 을 입력했을 때 IP 주소로 연결해주면 너무 좋을 것같다.
모든 운영체제에는 hosts 라는 파일이 있고, 그 파일에 example.com 의 IP 주소는 123.456.789 라고 저장해놓으면
example.com 이라고 접속했을 때, hosts 파일을 읽어서 IP주소로 접속한다. 이것을 통해 DNS 을 통하지않고 바로 접속 할 수있다. hosts 를 통해서 전화번호부처럼 IP 주소부를 사용해서 연결할 수 있다.
hosts 파일의 위치를 찾는 법은 google에다가 windows hosts file location 이런식으로 검색한다.
/etc/hosts(맥, 유닉스계열)
\System32\drivers\etc\hosts(윈도우) 관리자 권한 필요하다(hosts 파일은 매우중요)

아이피 주소 도메인
52.231.11.152 web1.com

이런식으로 저장하고, web1.com 으로 접속한다면, 그 아이피 주소로 접속된다.

### security

만약 우리가 자주 방문하는 사이트의 IP 주소를 악의적인 사람이 다른거로 바꾼다. (hosts 파일의 내용)
그러면 내가 그 IP로 방문하게되고, 나는 원래 평소 방문하는 사이트라고 생각했는데, 악의적인 사이트로 들어가게된다.
백신은 hosts 파일의 변조를 지켜본다.
https 에서 s 는 secure 의 약자이다.

### before DNS

hosts => ip 주소부
standford research institute 에서는 hosts 파일들을 관리했었다. 이름을통해서 인터넷사용할 수 있게끔해준 기관
사람들이 standford 꺼를 따운받아서 자기 컴퓨터hosts에 덮어쓰기해서 그쪽으로 접속되게끔 한다.
처음에는 이것만으로 충분했지만 인터넷이 커짐에따라 문제가 대두되었다.
standford research institute 에서는 수작업을 통해서 갱신했기 때문에, 많은 시간과 돈이 필요했다.
하나의 호스트 파일에 인터넷에 참여하는 모든 컴퓨터의 주소가 담기면 한계에 도달한다.
1983년, 인터넷의 여러 기술을 만든 사람들이 DNS(Domain Name System)을 만들었다.

### DNS Server

내아이피는 무엇이고 이아이피는 example.com 이라는 주소를 갖고싶다.
DNS Server 는 요청을 받고, example.com 은 93.184.216.35 라는 IP를 기억한다.
이제 example.com 으로 접속하면, 첫번째로는 hosts 찾고 DNS Server 에 접속해서 IP 를 묻는다 DNS 서버는 IP주소를
응답해준다.
옛날에비해 행정절차가 간소화되었다. 이전에는 호스트의 이름을 파일에보관 이제는 서버에 hosts 를 보관 성능의변화.

### public DNS

DNS Server 는 IP를 가지고있다. (컴퓨터이기 때문)
client 는 DNS Server 의 IP 또는 Domain 을 알고있다. 인터넷을 연결하면, 우리가 가입한 통신사(ISP, internet service provider)가 우리의 컴퓨터가 도메인을 물어봤을 때 도메인 네임 서버의 IP를 세팅하는 메커니즘을 갖는다.
예를 들어서 도메인을 조회하면 통신사가 조회하는 DNS 서버는 우리가 어떤 사이트를 방문하려는지 알게되고, 통신사는 우리가 접속하는 사이트의 정보를 저장할수있고, 마케팅 정보로 활용할 수 있다.
검색엔진에 public DNS 라고 검색하면 우리가 사용할 수있는 DNS 서버가있다. Free and public DNS servers
domain 을 이용할때 8.8.8.8 (google public dns server) 에게 물어보고, 그 서버가 리턴하는 IP 주소로 들어가는것
자신의 DNS 서버를 다른 것으로 바꿀수 있다.
전세계에는 매우 많은 DNS Server 가 존재한다.

### blog.example.com.

뒤에는 . 이생략된 것이다. 각각의 부분마다 이름이 존재 마지막 . 은 root 도메인
.com (top level domain) .net .co.kr .kr 모두 topleveldomain
.example (second-level-domain)
blog (sub domain)
도메인의 각각의 부분들은 각각의 부분을 담당하는 독자적인 server 컴퓨터가 존재한다. 각각이 전담하는 파트가 다른것이다. 또, 루트 도메인을 담당하는 DNS 서버는 toplevel 도메인을 담당하는 server 를 알고있고, toplevel 에 해당하는 서버들은 second level 에 해당하는 서버들을 알고있다. second level 은 sub 도메인을 담당하는 DNS 들의 목록과 ip 주소를 알고있다. 직속 하위 파트만 알고있다.
제일먼저 root 네임서버에게 물어본다. 최소한 모든 컴퓨터들은 root 네임서버의 ip 주소가 무엇인지 알고있다.
root 네임서버는 응답한다. 나는 모르겠는데, 주소가 com 으로 끝나니까 com 을 전담하는 name server 들의 ip 주소를 알려줄게 라고 한다.
그 후 toplevel dns server 에게 묻는다. 나도 잘모르겠는데 example.com을 전담하는 네임서버의 ip 를 알려줄께
그 후 최종적으로 sub domain 을 전담하는 DNS server 에 접속
바로 이과정을 통해서 우리는 우리가 원하는 ip 주소를 알게된다. DNS 는 서로가 협력하면서, 전세계인들에게 ip 주소를 알려준다. 각 부분을 전담하는 서버가 있다.
![캡처](https://user-images.githubusercontent.com/63354527/104798620-af11dc80-580b-11eb-8d36-eee88f7172fc.PNG)

## 1.1 버전관리

개발자는 안정한 상태의 코드와 불안정한 상태의 코드를 인지하고 , 항상 안정된 상태를 유지하도록 노력해야한다.

### 1.1.1 버전이란?

사전을 찾아보면 어전의 것과 다른 또는 약간 비슷한것으로 정의되어있다.
버전은 이전과 약간씩 다른 변화들을 구분하는 표시이다.
버전의 숫자나 기호에는 일련의 규칙이 있다. 버전을 부여하려면 소스코드를 구별할 수 있는 의미있는 변화가 있어야한다. 개발 도중 임시로 작업한 것을 버전이라고 말하지는 않는다.

### 1.1.2 버전 관리는 왜 필요할까?

프로그램 코드는 한번에 완성되지 않는다. 일반적으로 프로그램 코드는 한단계씩 살을 붙여가면서 기능들을 추가해나간다. 오랜시간 동안 수많은 작업을 개선하면서 데이터는 변하고 끊임없이 증가한다. 이러한 변화와 작업을 진행하면서 하나의 완성된 프로그램을 만드는 것이다.
개발 도중에 많은 기능이 추가되고 수많은 코드가 변경된다. 변경되는 동안 코드들은 잠시 불안정한 상태가되고, 이후 정상적인 테스트와 동작을 확인하고 나면 다시 안정된 상태의 코드가 된다.

숙련된 개발자라면 작업과정에서 코드들을 안전하게 유지해야한다는 것을 잘 안다. 개발 또는 테스트하는 과정에서 불안정한 코드가 있다면 계속 이어서 작업하기 불안할 것이다.

때에따라서 더이상 작업하기 어려울 수 도있는데 이때 이전 상태로 돌아가기위한 복귀 지점이 필요하다.


코드 복귀 지점은 반드시 안정된 상태를 기준으로 설정해야한다.
이렇게 복귀 지점을 기록해 두면 좀 더 자유롭고 안정적으로 개발가능하다.

## 1.2 버전 관리 시스템

변화가 있는 문서상태를 구분하고 싶을 때는 보통 파일이름_1, 파일이름_2 처럼 파일 이름을 다르게 저장하곤한다. 이 다른 이름으로 저장하는 방식은 한 문서를 여러 파일로 계속 저장하는 방식이라, 시간 차이를 두고 이렇게 저장하다보면 이름 규칙을 잊곤한다.

### 1.2.1 버전 관리 소프트웨어

코드와 콘텐츠의 변화를 관리하고 추적하는 소프트웨어를 버전관리 시스템이라고한다.

최초의 버전관리 시스템은 유닉스 환경에서 사용가능한 SCCS(source code control system)이다.
sccs는 1970년대 마크로치킨드가 개발했으며 이후 다양한 VCS(version control system)프로그램이 등장한다. VCS 에서 버전 파일들을 관리하고 저장하는 공간을 저장소라고한다.

현재 사용하는 vcs는 크게 집중형과 분산형 두종류로 구분가능하다.


> 집중형

집중형시스템은 말그대로 모든 소스코드가 한곳에 집중되어 있는 형태이다. 하나의 메인중앙 서버에서 개발 구성원의 모든 소스코드를 통합적으로 관리한다. 클라이언트 서버 모델이라고도한다.

저장소 하나를 중심으로 관리하기 때문에 시스템을 운영하기 수월하다. 하지만 중앙 저장 공간인 서버에 문제가 생기면 소스코드가 있는 메인 저장소에 모든 개발자가 접근할 수 없는 심각한 상황이 발생할 수 있다. 또 동시에 여러 개발자가 접근하면 충돌이 발생하기에 코드 수정을 안정적으로 할수 있게 잠금 모델을 적용한다. 파일을 변경하려면 개발자들은 순서대로 대기하고 있어야한다.

> 잠금 모델

보통 다수의 클라이언트가 서버에 동시에 접속하곤한다. 파일 하나를 다수의 사용자가 동시에 접근하여 수정하려고한다면 충돌이 발생한다. 누군가 먼저 파일을 수정하고 있다면 다른 사용자는 수정을 못하도록 잠금을 설정하여 방지할 수 있다.

> 분산형

분산형 버전 관리 시스템은 집중형과 달리 저장소가 여러개이다.

분산 저장소는 p2p방식으로 공유하며 각 개발자에게 공유 가능한 저장소 사본을 제공한다.

서버는 각 저장소 자료를 동기화하고 중개하는 역할만 수행한다. 따라서 메인서버에 문제가 생기더라도 지속적으로 개발할 수 있다. 

대표적 분산형 관리 시스템은 다음과 같다.

- 깃: 현재 가장많이 사용하는 분산형 vcs 이다. 오픈소스라서 무료로 사용가능
- 머큐리얼: 파이썬언어로개발했으며 무료이다. 
- 비트키퍼: 1998년에 출시했으며 유료제품이다.

## 1.3 깃

깃은 2005년에 리눅스 개발자인 리누스 베네딕트 토르발스가 개발했다.
깃의 모든 소스는 깃허브에 공개되어있으며 깃허브에서 git으로 검색하면 나온다.

깃은 다음과같은 몇가지 특징으로 구분할수 있다.

- 대표적인 분산형 버전관리 시스템이다. 원격저장소와 별개로 개발자각각의 로컬 컴퓨터에 완벽한 복제본 코드를 저장할 수 있다. 완벽한 복제본이 있으면 매번 중앙 저장소를 조회하지 않아도 개발을 진행할 수 있다.
- 네트워크나 인터넷이 연결되지 않은 상태에서도 로컬 컴퓨터의 소스코드만으로 버전을 관리 가능.
- 원격 저장소로 많은 개발자의 저장소와 연결하거나 동기화 작업을 할 수 있다. 또 직접 만든 새로운 소스코드를 배포하거나 내려받은 소스코드를 수정한후 다시 병합할 수도 있다.

### 1.3.1 백업 기능

깃을 사용하면 코드를 원격 저장소에 저장할 수 있다. 로컬 컴퓨터의 저장소를 동기화하여 원격 저장소에 백업한다. 그리고 사무실, 집등여러공간에서 원격 저장소에 저장된 내용을 다시 내려받아 프로젝트 개발을 이어서 할 수 있다.


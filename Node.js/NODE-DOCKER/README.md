# Docker 정리해볼께

`docker image ls` 현재 이미지들을 보여주는 리스트

`docker build .` 현재 디렉토리를 빌드한다. 근데 이때 이름을 지정하지 않았기 때문에 이미지 이름은 none

`docker build -t 이름 .` 현재 디렉터리 빌드하는데 이름을 지정할께 이름은 이름으로하고 .은 현재 디렉터리라는의미이다.

`docker image rm imageid`  이미지 아이디를 전달하면 그 이미지를 삭제한다.

`docker run node-app-image` 이미지를 run 시킨다.

`docker run -d --name node-app node-app-image` docker야 컨테이너이름은 노드앱이구 노드이미지를 사용해서 런할건데, 디테치 모드로 런시켜줘.

`docker ps` 현재 실행중인 컨테이너 보여줌ㅋ

`docker rm 컨테이너이름 -f` 컨테이너 종료시키기 ㅋ

`docker exec -it node-app bash` 이거 인터렉티브모드로 실행하고 bash쉘 까지 설정해주면 파일시스템 볼수 있는 환경으로 진입

`docker run -v pathtofolderonlocation:pathtofolderonconatiner -p 3000:3000 -d --name node-app node-app-image` 내가있는 위치랑 컨테이너 폴더를 연동해준다. %cd% current working directory

`printenv` 리눅스에서 환경변수출력

`--env PORT=4000` 도커에서 환경변수설정하는 법.

 `docker-compose up -d` compose 파일이용 빌드같은데..? 

 `docker-compose down -v` compose up 시키면 빌드랑 컨테이너까지 같이실행되는데 다운시키면 컨테이너 내림

 `docker-compose up -d --build` 파일이 바뀌었을때 컴포즈는 바뀐줄 모른다 따라서 다시 빌드하라고 명시해주어야 빌드하고 아니면 그냥 이미지를 활용해서 컨테이너를 올린다.
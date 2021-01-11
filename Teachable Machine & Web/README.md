# Teachable Machine & Web

[Teachable Machine](https://teachablemachine.withgoogle.com/)

1. 사진을 찍어서 teachable machine을 학습시킨다.
![캡처](https://user-images.githubusercontent.com/63354527/104153522-e35d5580-5425-11eb-8e66-1f9344e80cbd.PNG)

2. Tensorflow.js 로 모델을 export한다.
3. 웹캠을 사용하기 때문에 보안문제. https 사용
4. 웹서버는 nodejs를 사용한다.
5. npm istall -g local-web-server
6. ws --https --port 9999 --open 아니면 npx local-web-server --https --port 9999 --open
7. teachable machine 이 작성한 코드에서 낮과 밤을 구분하는 코드에 배경색 바꾸는 코드를 추가
![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/63354527/104154066-47cce480-5427-11eb-8c62-d0c545025347.gif)

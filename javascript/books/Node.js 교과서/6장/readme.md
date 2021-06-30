nodemon 이 실행되는 콘솔에 rs를 입력해서 수동으로 재시작할 수도 있다. 


express 모듈에는 http모듈이 내장되어있으므로 서버의 역할을 할수 있다. 

app.set

app.get

익스프레스에서는 res.wirte나 res.end 대신res.send 를 사용한다.

미들웨어는 익스프레스의 핵심이다. 요청과 응답의 중간에 위치하여 미들웨어라고한다. 뒤에나오는 라우터와 에러핸들러 또한 미들웨어의 일종이므로 미들웨어가 익스프레스의 전부라고해도과언이 아니다. 미들웨어는 요청과 응답을 조작하여 기능을 추가하기도하고 나쁜 요청을 걸러내기도한다. 에러는 에러처리 미들웨어로간다.

app.use에 매개변수가 req,res,next인 함수를 넣으면 된다. 미들웨어는 위에서부터 아래로 순서대로 실행되면서 요청과 응답사이에 특별한 기능을 추가할 수 있다. 

에러처리 미들웨어는 매개변수가 err,req,res,next로 네개이다. 모든 매개변수를 사용하지 않더라도 매개변수가 반드시 네개이어야한다. 첫 번째 매개변수 err에는 에러에 관한 정보가 담겨있다. res.status 메서드로 http상태코드를 지정할 수 있다. 기본값은 200이다. 에러처리 미들웨어를 직접연결하지 않아도 기본적으로 익스프레스가 에러를 처리하기는 한다. 하지만 실무에서는 직접 에러처리 미들웨어를 연결해주는 것이 좋다. 에러처리 미들웨어는 특별한 경우가 아니면 가장 아래에 위치하도록 한다. 

`npm i morgan cookie-parser express-session dotenv`


미들웨어를 통해 요청과 응답에 다양한 기능을 추가할 수 있고 이미 많은 사람이 유용한 기능들을 패키지로 만들어두었다. 실무에 자주 사용하는 패키지를 설치해보자.

다른사람이 만든 미들웨어내부에 next가 들어있기 때문에 내부적으로 호출하기에 다음 미들웨어로 넘어갈 수 있다.


dotenv 패키지는 .env 파일을 읽어서 process.env 로 만든다. 키=값 형식으로 추가하면된다. process.env 를 별도의 파일로 관리하는 이유는 보안과 설정의 편의성때문이다. 비밀 키들을 소스코드에 그대로 적어두면 소스코드가 유출되었을 때 키도 값이 유출된다. 따라서 .env 같은 별도의 파일에 비밀 키를 적어두고 dotenv 패키지로 비밀키를 로딩하는 방식으로 관리하곤한다. 소스코드가 유출되더라도 .env 파일만 잘관리하면 비밀키는 지킬수 있다.


### 6.2.1 morgan

요청과 응답에 대한 정보를 콘솔에 기록한다.

`app.use(morgan('dev'))`

인수로 dev 외에 combined, common, short , tiny 등을 넣을 수 있다. 인수를 바꾸면 로그가 달라지니 테스트해보자 개발환경에서는 dev를 , 배포환경에서는 combined를 이용하자.


### 6.2.2 static

static 미들웨어는 정적인 파일들을 제공하는 라우터역할을 한다. 기본적으로 제공되기에 따로 설치할 필요없이 express 객체안에서 꺼내 장착하면 된다. 다음과같이 사용한다.

```js

app.use('경로', express.static('실제경로'))
```


실제 서버의 경로에는 public이 들어있지만 요청 주소에는 public이 들어있지 않다는 점을 주목하자. 서버의 폴더경로와 요청 경로가 다르므로 외부인이 서버의 구조를 쉽게 파악할 수 없다. 이는 보안에 큰도움이된다.
만약 요청 경로에 해당하는 파일이 없으면 알아서 내부적으로 next를 호출한다. 만약 파일을 발견했다면 다음 미들웨어는 실행되지 않는다. 응답으로 파일을 보내고 next를 호출하지 않기 때문이다.


### 6.2.3 body-parser

요청의 본문에 있는 데이터를 해석해서 req.body 객체로 만들어주는 미들웨어이다. 보통 폼 데이터나 AJAX요청의 데이터를 처리한다. 단 멀티 파트 데이터는 처리하지 못한다. 그 경우에는 뒤에나오는 multer모듈을 사용하자.

body-parser모듈은 다음과 같이 사용한다.

```js

app.use(express.json())
app.use(express.urlencoded({extended: false}))

```

Raw는 요청의 본문이 버퍼 데이터일 때 Text는 텍스트 데이터일 때 해석하는 미들웨어이다. 버퍼나 텍스트 요청을 처리할 필요가 있다면 body-parser를 설치한 후 다음과같이 추가한다.
```js

app.use(bodyParser.raw())
app.use(bodyParser.text())

```


JSON은 JSON형식으로 데이터를 전달하는 방식이고 URL-encoded는 주소형식으로 데이터를 보내는 방식이다. 폼 전송은 URL-encoded 방식을 주로 사용한다. urlencoded메서드를 보면 extended:false라는 옵션이 들어있다. 이 옵션이 false면 노드의 querystring모듈을 사용하여 쿼리스트링을 해석하고 true면 qs모듈을 사용하여 쿼리스트링을 해석한다. qs모듈은 내장모듈이 아니라 npm패키지 이며 querystring모듈의 기능을 좀더 확장한 모듈이다. 


### 6.2.4 cookie-parser


쿠키파서는 요청에동봉된 쿠키를 해석해req.cookies 객체로 만든다. 

```js
app.use(cookieParser(비밀키))
```
해석된 쿠키들은 req.cookies 객체에 들어간다. 예를 들어 name=hyunjin 쿠키를 보냈다면 req.cookies 는 {name: 'hyunjin'} 이된다. 유효기간이 지난 쿠키는 알아서 걸러낸다.
첫번째 인수로 비밀키를 넣어줄 수 있다. 서명된 쿠키가 있는 경우 제공한 비밀키를 통해 내 서버가 만든 쿠키임을 검증한다. 쿠키는 클라이언트에서 위조하기 쉬우므로 비밀 키를 통해 만들어낸 서명을 쿠키 값 뒤에 붙인다. 서명이 붙으면 쿠키가 name=hyunjin.sign 과 같은 모양이된다.

서명된 쿠키는 req.signedCookies객체에 들어있다.


```js
res.cookie('name', 'hyunjin', {
    expires: new Date(Date.now() + 900000),
    httpOnly: true,
    secure: true,
})

res.clearCookie('name', 'hyunjin', {httpOnly: true, secure:true})

```


쿠키를 지우려면 키와 값 외에 옵션도 정확히 일치해야 쿠키가 지워진다. 단 expires나 maxAge옵션은 일치할 필요가 없다.


옵션중에는 signed 라는 옵션이 있는데, 이를 true로 설정하면 쿠키뒤에 서명이 붙는다. 내 서버가 쿠키를 만들었다는 것을 검증하므로 대부분의 경우 옵션을 켜두는 것이 좋다. 서명을 위한 비밀 키는 cookieParse미들웨어에 인수로 넣은 process.env.COOKIE_SECRET이된다.

### 6.2.5 express-session

세션 관리용 미들웨어이다. 로그인 등의 이유로 세션을 구현하거나 특정 사용자를 위한 데이터를 임시적으로 저장해 둘 때 매우 유용하다. 세션은 사용자별로req.session 객체안에 유지된다.

```js
app.use(session({
    resave:false,
    svaeUninitailized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,

    },
    name: 'session-cookie'
}))


```

resave는 요청이 올 때 세션에 수정 사항이 생기지 않더라도 세션을 다시 저장할지 설정하는 것이고 saveUninitailized는 세션에 저장할 내역이 없더라도 처음부터 세션을 생서할지 설정하는 것이다.

express-session은 세션 관리시에 클라이언트에 쿠키를 보낸다.
세션 큐키가 이것이다. 안전하게 쿠키를 전송하려면 쿠키에 서명을 추가해야하고 쿠키를 서명하는데 secret값이 필요하다. cookie-parser의 secret과 같게 설정하는 것이 좋다.

store옵션도 있는데 메모리에 세션을 저장하도록되있는 것을 store 데이터베이스를 연결하여 세션을 유지하도록한다. 보통 레디스가 자주쓰인다.


s%3A의 뒷부분이 실제 암호화된 쿠키 내용이다. 앞에 s%3A가 붙은 경우 이쿠키가 express-session 미들웨어에 의해 암화화된것이라고 생각하면 된다.

-
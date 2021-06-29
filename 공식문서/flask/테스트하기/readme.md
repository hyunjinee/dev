테스트되지 않은 어플리케이션은 기존 코드의 개선을 어렵게 하며 프로그램 개발자들을 심한 편집증환자로 만든다. 만약 애플케이션 테스트들이 자동화되어있다면 우리는 문제가 발생했을 때 안전하며 즉각적으로 변경이 가능하다.

Flask 는 Werkzeug 를 통해 테스트 client를 제공하여 어플리케이션의 컨텍스트 로컬을 처리하고 테스트할 수 있는 방법을 제공한다. 

```py

import os
import flaskr
import unittest
import tempfile

class FlaskrTestCase(unittest.TestCase):

    def setUp(self):
        self.db_fd, flaskr.app.config['DATABASE'] = tempfile.mkstemp()
        flaskr.app.config['TESTING'] = True
        self.app = flaskr.app.test_client()
        flaskr.init_db()

    def tearDown(self):
        os.close(self.db_fd)
        os.unlink(flaskr.app.config['DATABASE'])

if __name__ == '__main__':
    unittest.main()
```

setup함수는 코드는 새로운 테스트 클라이언트를 생성하고 새로운 데이터베이스를 초기화한다. 이함수는 각각의 테스트함수가 실행되지 전에 호출된다. 테스트후 데이터베이스를 삭제하기 위해 teartDown()함수에서 파일을 닫고 파일시스템에서 제거할 수 있다. 이 테스트는 클라이언트 애플리케이션에 대한 단순한 인터페이스를 제공한다. 우리는 어플리케이션에게 테스트 요청을 실행시킬 수 있고, 테스트 클라이언트는 이를 위해 쿠키를 놓치지 않고 기록한다.

SQLite3 는 파일시스템 기반이기 때문에 임시 데이터베이스를 생성할 때 tempfile모듈을 사용하여 초기화할 수 있다.

mkstemp() 함수는 두가지 작업을 수행한다. 이함수는 로우레벨파일핸들과 임의의 파일 이름을 리턴한다. 여기서 임의의파일이름을 데이터베이스이름으로 사용한다. 우리는 단지 db_fd라는 파일핸들을 os.close() 함수를 사용하여 파일을 닫기전까지 유지하면 된다.
```py
 def test_empty_db(self):
        rv = self.app.get('/')
        assert 'No entries here so far' in rv.data
```
우리는 테스트 함수들의 이름이 test로 시작하고 있다는 것에 주목할 필요가있다. 이점을 활용하여  unittest에서 테스트를 수행할 함수를 자동적으로 식별할 수 있다.

self.app.get을 활용함으로써 HTTP GET요청을 주어진 경로에 보낼 수 있다. 리턴값은 response_class 객체의 값이 될 것이다.
이제 data의; 속성을 사용하여 애플리케이션으로 부터 넘어온 리턴값을 검사할 수 있다. 


## 입력과 출력 로깅 

```py
def login(self, username, password):
    return self.app.post('/login', data=dict(
        username=username,
        password=password
    ), follow_redirects=True)

def logout(self):
    return self.app.get('/logout', follow_redirects=True)
```

```py
def test_login_logout(self):
    rv = self.login('admin', 'default')
    assert 'You were logged in' in rv.data
    rv = self.logout()
    assert 'You were logged out' in rv.data
    rv = self.login('adminx', 'default')
    assert 'Invalid username' in rv.data
    rv = self.login('admin', 'defaultx')
    assert 'Invalid password' in rv.data
```


## 메시지 추가 테스트 

```py
def test_messages(self):
    self.login('admin', 'default')
    rv = self.app.post('/add', data=dict(
        title='<Hello>',
        text='<strong>HTML</strong> allowed here'
    ), follow_redirects=True)
    assert 'No entries here so far' not in rv.data
    assert '&lt;Hello&gt;' in rv.data
    assert '<strong>HTML</strong> allowed here' in rv.data


```


## 다른 테스팅 기법들

위에서 살펴본 대로 테스트 클라이언트를 사용하는 것 이외에, test_request_context() 함수를 with 구문과 조합하여 요청 컨텍스트를 임시겆ㄱ으로 활성화하기 위해 사용할 수 있다.


```py
app = flask.Flask(__name__)

with app.test_request_context('/?name=Peter'):
    assert flask.request.path == '/'
    assert flask.request.args['name'] == 'Peter'
```

컨텍스트와 함께 바인드 된 모든 객체는 같은 방법으로 사용이가능하다. 만약 서로 다른 설정구성으로 애플리케이션을 테스트하기 원할 경우 이것을 해결하기 위한 좋은 방법은 없는 것 같다. 그러나 만약 테스트 요청 컨텍스트를 사용하는 경우 before_request() 함수와 after_request()는 자동으로 호출되지 않는다. 반면에 flask.Flask.teardown_request함수는 with 블럭에서 요청 컨텍스트를 빠져나올때 실제로 실행된다. 만약 before_request()함수도 마찬가지로 호출되기를 원한다면  preprocess_request()를 직접 호출해야한다.


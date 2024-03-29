플라스크는 어플리케이션 컴포넌트를 만들고 애플리케이션 내부나 애플리케이션간에 공통 패턴을 지원하기 위해 블루프린트라는 개념을 사용한다. 블루프린트는 보통 대형 어플리케이션의 동작하는 방식을 단순화하고 어필리케이션의 동작을 등록하기 위한 플라스크 확장에 대한 중앙 집중된 수단을 제공할 수 있다. Blueprint 객체는 Flask 어플리케이션과 유사하게 동작하지만 실제로 애플리케이션은 아니다. 

플라스크의 블루프린트는 다음경우로 인해 만들어졌다.

- 어플리케이션을 블루프린트의 집합으로 고려한다. 이방식은 대형 어플리케이션에 있어서 이상적이다.  프로젝트는 어플리케이션 객체를 인스턴스ㅗ하하고 여러 확장을 초기화하고블루프린트의 묶음을 등록할 수 있다.
- 어플리ㅔ이션 상에 URL접두어와 서브도메인으로 블루프린트를 등록한다. URL접두어와 또는 서브도메인에 있는 파라미터는 블루프린트에 있는 모든 뷰함수에 걸쳐있는 공통 뷰인자가된다.


블루프린트는 플라스크 레벨에서 분리를 제공하고 어플리케이션 설정을 공유하며 그리고 등록된 것을 가지고 필요에 따라 애플리케이션 객체를 변경할 수 있다. 이것의 단점은 일단 전체 애플리케이션 객체를 제거할 필요없이 어플리케이션이 생성됐을 때 여러분은 블루프린트를 해지할 수 없다.

블루프린트의 기본 개념은 어플리케이션에 블루프린트가 등록될 때 실행할 동작을 기록한다는 것이다. 플라스크는 요청을 보내고 하나의 끝점에서 다른곳으로 URL을 생성하 ㄹ때 뷰함수와 블루프린트의 연관을 맺는다.

```py


from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound

simple_page = Blueprint('simple_page', __name__, template_folder='templates')

@simple_page.route('/', defaults={'page': 'index'})
@simple_page.route('/<page>')
def show(page):
    try:
        return render_template('pages/%s.html' % page)
    except TemplateNotFound: 
        abort(404)



```

```py

app.register_blueprint(simple_page)

```

블루프린터는 리소스또한 제공할 수 있다. 때로는 단지 리소스만을 제공하기 위해 블루프린트를 사용하고 싶을 수 있다.



블루프린트는 static_folder키워드 인자를 통해서 파일시스템에 있는 폴더에 경로를 제공하여 정적파일을 가진 폴더를 노출할 수 있다. 그것은 절대경로이거나 블루프린트 폴더에 대해 상대경로일 수 있다.

기본값으로 경로의 가장 오른쪽 부분이 웹에 노출되는 곳이다. 폴더는 여기서static이라고 불리기 때문에 블루프린트위치 + static으로 될 것이다. 블루프린트이 /admin으로 등록되있다고 하면 정적폴더는 /admin/static 으로 될 것이다. 
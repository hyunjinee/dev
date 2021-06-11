# [MongoDB Full Tutorial w/ Node.js, Express, & Mongoose](https://www.youtube.com/watch?v=4yqu8YF29cU)

모델을 만드는 방법!

```javascript
const mongoose = require("mongoose");

const Profile = new mongoose.Schema({
  firstName: { type: String, trim: true, default: "" },
  lastName: { type: String, default: "" },
  age: { type: Number, default: 0 },
});
module.exports = mongoose.model("Profile", Profile);
```

trim 은 데이터 뒤의 공백또는 앞의 공백을 제거하는 역할을 한다.
몽고 디비는 json기반이다.
스키마랑 실제 profile 내용이 일치해야한다.

```json
{ "firstNaem": "tom", "lastName": "brady", "age": 41 }
```

mongo 명령으로 cli로 접근할 수 있다.
show dbs 명령으로db를 볼 수 있다.

mongoimport -db mongo-proj --collection profiles --file profiles.json

turbo devserver
보면 추가된 것을 볼 수 있다.

mLab databasehosting service
turbo web hosting service

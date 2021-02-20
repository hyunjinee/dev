const express = require("express");
const app = express();
//route routing \
app.get("/", (req, res) => res.send("Hello Express"));
app.get("/page/:pageId", (req, res) => {
  return res.send(request.params);
});
app.listen(3000, () => console.log("Example app listening on port 3000!"));

// routes 폴더
const router = express.Router();
//라우터 객체를 리턴
router.get("/topic", (req, res) => {});
///express generator 이용하면 빠르게 구성할 수 있다.

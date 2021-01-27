const http = require("http");
const cookie = require("cookie");
http
  .createServer(function (request, response) {
    console.log(request.headers.cookie);
    let cookies = {};
    if (request.headers.cookie !== undefined) {
      let cookies = cookie.parse(request.headers.cookie);
    }
    console.log(cookies);
    response.writeHead(200, {
      "Set-Cookie": [
        "yummy_cookie=choco",
        "testy_cookie=strawberry",
        `Permanent=cookies; Mag-Age=${60 * 60 * 24 * 30} `,
        "Secure=Secure; Secure",
        "HttpOnly=HttpOnly; HttpOnly",
        "Path=Path; Path=/cookie",
        "Domain=Domain; Domain=o2.org",
      ],
    });
    response.end("cookie");
  })
  .listen(3000);

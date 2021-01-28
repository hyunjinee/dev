const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const path = require("path");
const moment = require("moment");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(path.join(__dirname, "src")));

const PORT = process.env.PORT || 5000;
io.on("connection", (socket) => {
  console.log("연결됨");
  socket.on("chatting", (data) => {
    const { name, msg } = data;
    io.emit("chatting", {
      name: name,
      msg: msg,
      time: moment(new Date()).format("h:mm A"),
    });
  });
});

server.listen(PORT, () => console.log(`server is running ${PORT}`));

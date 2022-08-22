//https://socket.io/docs/v4/server-initialization/
const { info } = require("console");
const express = require("express");
const app = express();

//IMPLEMENTACION
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);

httpServer.listen(process.env.PORT || 8080, () => console.log("SERVER ON"));

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});
let msgs=[];
let chat=[];
io.on('connection',socket=>{
  console.log("user conectado" +socket.id);
  chat.push("se unio al chat: "+ socket.id);
  setTimeout(()=>
  {
    socket.emit('data', "este es mi mensaje desde el servidor")

  },4000
  )
  socket.on('data',(data ) =>{
    // console.log(data)
    chat.push(data);
    // console.log(chat)
    io.sockets.emit("mensajes",chat)
  })
})


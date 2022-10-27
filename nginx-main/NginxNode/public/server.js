const express = require("express");
const app = express();
app.enable("trust proxy");
//app.use(express.static('public'))
const PORT = parseInt(process.argv[2]) || 8080;
app.get("/datos", (req, res) => {
  console.log(`port: ${PORT} -> Fyh: ${Date.now()}`);
  res.send(`Servidor express <span style="color:blueviolet;">(Nginx)</span> en ${PORT} - 
    <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`);
});

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});

//(dentro de la carpeta NginxNode/public donde esta el server.js)
//pm2 start server.js --name="Server2" --watch -i max -- 8082
//pm2 start server.js --name="Server1" --watch -- 8081

//(dentro de la carpeta base de to el proyecto donde esta nginx.exe)
//nginx

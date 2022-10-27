Dentro de la carpeta NginxNode/public donde esta el server.js ejecutar estos dos comandos:

pm2 start server.js --name="Server2" --watch -i max -- 8082

pm2 start server.js --name="Server1" --watch -- 8081

Dentro de la carpeta base de todo el proyecto donde esta nginx.exe ejecutar este comando:
nginx

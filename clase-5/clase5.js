const express = require(`express`);
const {Router} =express;
const app = express();
const router= Router();
const PORT = process.env.PORT || 3000;
const server = app.listen(8080,()=>{
    console.log("servidor http escuchando en el puerto: "+server.address().port)
})

///motores de plantillas y pug js
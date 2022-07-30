// const productos = [{ id:1, nombre:'Escuadra', precio:323.45 },
// { id:2, nombre:'Calculadora', precio:234.56 },
// { id:3, nombre:'Globo Terráqueo', precio:45.67 },
// { id:4, nombre:'Paleta Pintura', precio:456.78 },
// { id:5, nombre:'Reloj', precio:67.89 },
// { id:6, nombre:'Agenda', precio:78.90 }]
//  console.log("anda")
const http= require("http");

const server = http.createServer((peticion, respuesta)=>{
    respuesta.end("hola mundo")
});
const connectedServer = server.listen(8080,()=>{
    console.log("servidor http escuchando en el puerto: "+connectedServer.address().port)
})
console.log("hola")
const socket =io();
//atrapa msg que envia el server
//cuando haga un connect mada el console.log
socket.on("connect", ()=>{
    console.log("me conecte");
})
socket.on('data',(data ) =>{
    console.log(data)
})
socket.on('mensajes',(data ) =>{
    console.log(data)
})
function enviar(){
    const nombre =document.getElementById('caja-nombre').value;
    const mensaje =document.getElementById('caja-msg').value;
    console.log(nombre + mensaje)
    socket.emit("data",nombre + "  dice  " + mensaje)
}
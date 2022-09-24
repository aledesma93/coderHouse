// // SERVER CON EXPRESS
// const express = require("express");
// const app = express();
// // Opcional
// const PORT = 8080;
// // Routes
// app.get("/", (req, res) => {res.send({ mensaje: "Hola mundo por express" });});
// const server = app.listen(PORT, () => {
//     console.log(`Servidor con express escuchando en el puerto N° ${server.address().port}`);});
// // Manejo de errores: es opcional. Se ve más adelante
// server.on("error", (error) =>
// console.log(`Error en el servidor ${error}`));

class calculadora{
    sumar(a,b){
        const resultado=a+b;
        return resultado;
    }
}
function checktestCalculator(test,a,b,expected){
    if (typeof a != "number" || typeof b!="number"){
         console.log(`Test OK TEST: ${a} or ${b} not number so it a valid ERROR`)
        return "ERROR"
    }
    const calculadoraMock =new calculadora();
    switch(test){
        case "calculadora/sumar":
            if(calculadoraMock.sumar(a,b)==expected){
                console.log(`test OK: ${a} ${test} ${b} ==${expected}`)
            }else{
                console.log(`test WRONG: ${a} ${test} ${b} !=${expected}`)
            }
            break;
        case "calculadora/restar":
            break;
        case "calculadora/multiplicar":
            break;
    }
}
checktestCalculator("calculadora/sumar",10,10,20);
checktestCalculator("calculadora/sumar",-50,10,-40);
checktestCalculator("calculadora/sumar","10",10,"ERROR");
checktestCalculator("calculadora/sumar","10,999",10,"ERROR");
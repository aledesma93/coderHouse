// function sumar(a,b){
//     let resultado = a+b;
//     return resultado;
// }
// console.log(sumar(2,3))

//callbacks y funciones como parametros
// function func1(){
//     console.log("anda bien")
// }
// function func2(){
//     console.log("anda mal")
// }
// function buscarElLibro(array,str,func1,func2){
//     let encontrado=false;
//     for(let i=0;i<array.length;i++){
//         if (array[i]==str){
//             encontrado=true;
//             break;
//         }         
//     }
//     if (encontrado==true){
//         func1();
//     }else{
//         func2();
//     }

// }
// let arrayDeLibros=["frankestein","dracula","hp"]
// buscarElLibro(arrayDeLibros,"frankestein",func1,func2)


//promesas
// let pago=new Promise((res, rej)=>{
//     setTimeout(()=>{
//     res(50);
//       res("bien pago!!!!");  
//     },2*1000)
// });

// pago
// .then((res)=>{
//     console.log("salio con exito y lo que pago fue: "+ res);
// })
// .catch(()=>{
//     console.log("error")
// })

const fs = require("fs");
// const data = fs.readFileSync('texto.txt',"utf-8");
// console.log(data)

// fs.writeFileSync('texto.txt',"otra cosa");
// fs.appendFileSync('info.txt',"\n otra cosa2");

fs.readFile('texto.txt',"utf-8", (error, value)=>{
    if(error){
        console.log("algo salio mal")
    }else{
        console.log(value)
    }
});
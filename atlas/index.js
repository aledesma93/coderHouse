

//coneccion a mongoDB ATLAS

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://admin:admin@cluster0.pqwk7ur.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
//   console.log("funca")
// });
// console.log(client)

//coneccion a firestore

const admin = require("firebase-admin");

const serviceAccount = require("./connectionFirebase.json");

//traigo la DB


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
  
});
const db=admin.firestore();
console.log("conecto piola")
//agrega dato
// async function crearUsuario(){
//     const data={
//         name:'ale',
//         age:'30',
//         dni:'35996157',
//     }
    
//     const res=await db.collection('usuarios').doc('4').set(data);
// }

// crearUsuario();

//lee todo
async function traeTodos(){
   
    
    const res=await db.collection('usuarios').get();
    const usuariosFormateados=res.docs.map(doc=>({id:doc.id,data:doc.data()}))
    console.log(usuariosFormateados)
}

//actualiza uno
// async function modificaUno(){
   
    
//     const res=await db.collection('usuarios').doc('3').update({dni:37340546});
//     console.log("actualizo bien")
// }

//borra uno
// async function borraUno(id){
   
    
//     const res=await db.collection('usuarios').doc(id).delete();
//     console.log("borro bien")
// }
// // modificaUno();
// borraUno('4');
traeTodos();




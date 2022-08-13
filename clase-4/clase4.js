const express = require(`express`);
const {Router} =express;
const app = express();
const router= Router();
const PORT = process.env.PORT || 3000;
const server = app.listen(8080,()=>{
    console.log("servidor http escuchando en el puerto: "+server.address().port)
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/productos', router);
app.use('/public', express.static(__dirname + '/public'));
// let usuario = "alejandro";
// let total =100

// function mostrarUsuario(){
//     console.log(usuario , total)
// }
// mostrarUsuario();

//MaCHETE PETICIONES DE APIS   

  
let productos=[{id:100, name:"pelota", prize:100},
{id:101, name:"zapas", prize:200},
{id:102, name:"mascara", prize:300},
{id:103, name:"medias", prize:400}
] 
//GET CON QUERY TIPO SEARCH (OJO QUE ES EL MISMO!) 
router.get('/',(req,res)=>{
    const {query}=req;
    console.log(query)
    if(query.prize){
        const productosFiltradosPorPrecio=productos.filter(item=>item.prize == query.prize)
        res.json(productosFiltradosPorPrecio)
    }else{
        res.json(productos)
    }
    
})
//GET CON ID IDENTIFICADOR EN LA URL TIPO PARAMS
router.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    const valorEncontrado = productos.filter(item=>item.id == id)
    res.json(valorEncontrado)
  });

  //   //POST CON BODY (SIN ID!!)

  router.post('/', (req, res) => {
    const { body } = req;
    console.log(body)
    res.json("hola mundo")
  });

  //   //PUT CON ID PARAMS SIEMPRE y BODY!
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { body } = req;
    // console.log(id,body)
    const productoCambiado=productos.filter((item) => item.id == id)
    productoCambiado.prize=body.prize;
    console.log(productoCambiado)
    res.json("funca")
   
  });

  //   //DELETE CON ID PARAMS SIEMPRE
  router.delete('/productos/:id', (req, res) => {
    const { id } = req.params; 
    const filtrado =productos.filter((item)=>item.id !=id) 
    console.log(filtrado)
    res.json({success:'ok'})
  });



// app.post('/productos',(req,res)=>{
//     const respuesta={
//         success:'OK',
//         newProduct:{ name:"gorra", prize:400}

//     }
//     // res={id:104, name:"gorra", prize:400}
//     res.json(respuesta);
// })
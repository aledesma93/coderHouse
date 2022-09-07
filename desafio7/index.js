const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const PORT = 8080;
const httpServer= require("http").createServer(app);
const io= require('socket.io')(httpServer,{
  cors: {origin: '*'},
});

const { options } = require('./options/mariaDB');
// const { options } = require('./options/sqlite');
//conecto con mysql y no con sqlite
// const knex = require('knex')(options);
//conecto con sqlite
const knex = require("knex")({client: "sqlite3",connection: {filename: "./db/ecommerce.sqlite",},useNullAsDefault: true,});

httpServer.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto`);
});
app.use(express.json());
app.use(express.static(__dirname + "/public"))
app.use(express.urlencoded({extended:true}))
httpServer.on('error', (error) => console.log(`Error en servidor ${error}`));
app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'hbs');
app.set('views', './views');
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
  })
);

let productsHC = [
  { id: 1, title: 'nike ball', price: 101, thumbnail: 'http://localhost:8080/public/nike-ball.jpg' },
  { id: 2, title: 'nike shoes', price: 102, thumbnail: 'http://localhost:8080/public/nike-shoes.jpg' },
  { id: 3, title: 'adidas shoes', price: 102, thumbnail: 'http://localhost:8080/public/adidas-shoes.jpg' },
];

let chat=[
  {
    email:"a@a.com",
    text:"anda ok",
    date : new Date().toLocaleDateString()

  }
]

io.on('connection', (socket) => {
  console.log("new connection");
  io.sockets.emit('products',productsHC);
  io.sockets.emit('chat',chat);

  socket.on("addMessage", (msg) => {
    chat.push(msg);
    io.sockets.emit('chat',chat)
  });

  socket.on("addProduct", (data) => {
    productsHC.push(data);
    io.sockets.emit('products',productsHC)
  });
});


app.get('/', (req, res) => {
  res.render('productslist', { root: __dirname + '/public'});
});

const products = [
  { name: 'cartera', price: 100, stock: 12 },
  { name: 'pelota', price: 11, stock: 2 },
  { name: 'zapato', price: 500, stock: 25 },
];
  //crea tabla chat

  // knex.schema
  // .createTable(`messages`, table => {
  // table.increments(`id`);
  // table.string(`text`, 500);
  // table.string(`email`, 30);
  // table.string(`date`, 10);
  // })
  // .then(() => {
  //   console.log('se crea tabla de chat');
  // })
  // .catch((err) => {
  //   console.log(err);
  //   throw new Error(err);
  // })
  // .finally(() => {
  //   knex.destroy();
  // });
  //crea tabla productos
  // knex.schema
  // .createTable(`productos`, table => {
  // table.increments(`id`);
  // table.string(`name`, 30);
  // table.float(`price`);
  // table.integer(`stock`, 255);
  // })
  // .then(() => {
  //   console.log('se crea tabla de productos');
  // })
  // .catch((err) => {
  //   console.log(err);
  //   throw new Error(err);
  // })
  // .finally(() => {
  //   knex.destroy();
  // });

  // knex.schema.dropTableIfExists(`messages`)

  //Insert



//select
selectChat =async()=>{
  knex
  .from('messages')
  .select('*')
  .orderBy('id','asc')
  .then((res) => {
    res = res.map((e) => {
      return { id: e.id_product, ...e };
    });
    console.log(res);
  })
  .catch((e) => console.log(e))
  .finally(() => knex.destroy());
}

selectProducts=async()=>{
   knex
  .from('productos')
  .select('*')
  .orderBy('id','asc')
  .then((res) => {
    res = res.map((e) => {
      return { id: e.id_product, ...e };
    });
    console.log(res);
  })
  .catch((e) => console.log(e))
  .finally(() => knex.destroy());
};



function insertarMessage(){
  knex('messages')
.insert(chat)
}
// insertarMessage =async()=>{
//   knex('productos')
// .insert(chat)
// }

// knex('productos')
// .insert(products)
// knex('messages')
// .insert(chat)



insertarMessage();
selectProducts();
selectChat();


module.exports = {
  selectProducts,
  selectChat,
  insertarMessage
}
  


// const { options } = require('./options/mariaDB');
const { options } = require('./options/sqlite');
//conecto con mysql y no con sqlite
// const knex = require('knex')(options);
//conecto con sqlite
const knex = require("knex")({client: "sqlite3",connection: {filename: "./db/ecommerce.sqlite",},useNullAsDefault: true,});
const products = [
  { name: 'cartera', price: 100, stock: 12 },
  { name: 'pelota', price: 11, stock: 2 },
  { name: 'zapato', price: 500, stock: 25 },
];

//Insert
// knex('pruebasClase')
//   .insert(products)
//   .then((res) => console.log('todo ok', res))
//   .catch((e) => console.log(e))
//   .finally(() => knex.destroy());
//select
knex
  .from('pruebasClase')
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

// knex
//   .from('pruebasClase')
//   .select('*').where("id", "=", "5")
//   .then((res) => {
//    res.forEach((item) => console.log(item));
//   })
//   .catch((e) => console.log(e))
//   .finally(() => knex.destroy());

//create table

// knex.schema
//   .createTable(`messages`, table => {
  // table.increments(`id`);
  // table.string(`text`, 500);
  // table.string(`email`, 30);
  // table.string(`time`, 10);
//   })
//   .then(() => {
//     console.log('todo bien');
//   })
//   .catch((err) => {
//     console.log(err);
//     throw new Error(err);
//   })
//   .finally(() => {
//     knex.destroy();
//   });

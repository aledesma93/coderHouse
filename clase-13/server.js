//console.log(process.argv);

// const { require } = require("yargs");

/* for (let k = 0; k < process.argv.length; k++) {
  console.log(process.argv[k]);
} */
// const yargs= require("yargs/yargs")(process.argv.slice(2));

// const args= yargs.alias({
//     n:"nombre",
//     a:"apellido"
// }).argv;
// console.log(process.argv.slice(2))
const {HOST , PORT} =require("./config")
const dotenv=require("dotenv");
require('dotenv').config();
console.log(HOST, PORT)
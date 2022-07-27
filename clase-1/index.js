// Definir variables variables que almacenen los siguiente datos:
// Un nombre: “pepe”
// Una edad: 25
// Un precio: $99.90
// Los nombres de mis series favoritas: “Dark”, “Mr Robot”, “Castlevania”
// Mis películas favoritas, en donde cada película detalla su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.
// Mostrar todos esos valores por consola
// Incrementar la edad en 1 y volver a mostrarla
// Agregar una serie a la lista y volver a mostrarla

let nombre="alejandro";
let edad = 29;
let precio= 100.20;
let series=["the boys","stranger things","ozark"];
let peliculas=elPadrino=[{nombre:"el padrino", ano:"1971", actores:"marlon brando, james caan"},{nombre:"strar wars", ano:"1975", actores:"harrison ford, rdd2"}];
console.log("nombre:", nombre,
            "edad:",edad,
            "precio:",precio,
            "series:",series,
            "peliculas:",peliculas)
console.log("edad aumentada en 1", edad+1)
series.push("nueva serie")
console.log("se agrega serie nueva:", series)


// class Persona {
//     constructor(nombre, apellido, edad) {
//       this.nombre = nombre;
//       this.apellido = apellido;
//       this.edad = edad;
//     }
  
//     getFullname() {
//       return this.nombre + " " + this.apellido;
//     }
  
//     hablar() {
//       console.log("hola");
//     }
//     contameDeVos() {
//       console.log(`Yo soy ${this.nombre} y tengo ${this.edad}`);
//     }
//   }
  
//   const persona = new Persona("pepe", "suarez", 5);
//   const persona2 = new Persona("guille", "fergnani", 40);
  
//   const resultado = persona.getFullname();
  
//   console.log(resultado);
  //console.log(persona);

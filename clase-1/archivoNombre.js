class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas;
    }
    getFullname() {
              return this.nombre + " " + this.apellido;
            }
    addBook(a,b) {
        this.libros.push({nombre:a,autor:b})
    }
    addMascota(nombre) {
        this.mascotas.push(nombre)
            }
    countMascotas() {
        return this.mascotas.length;
    }    
    getBookNames() {
        console.log("lista de libros:")
        this.libros.forEach(element => {
            
           console.log(element.nombre)
        }); 
    }
}

const usuario1 = new Usuario("alejandro", "ledesma",[{nombre:"a",autor:"autorA"},{nombre:"b",autor:"autorB"}],["mermelada","manteca","azul"]);

const llamaMetodos= usuario1.getFullname();usuario1.addBook("C","autorC");usuario1.countMascotas();usuario1.addMascota("pancito");usuario1.getBookNames();
console.log(llamaMetodos)
console.log(usuario1)



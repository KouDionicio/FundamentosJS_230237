// Objetos

// const nombre = "Tablet";
// const precio = 300;
// const disponible = true;

const producto ={
    nombre: "Tablet", 
    precio: 300,
    disponible: true
}
console.log(producto);
console.table(producto);

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// Destructuring

const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);

// Object Literal Enhacement

const autenticando = true;
const usuario = "juan";

const nuevoObjeto ={
    autenticando: autenticando,
    usuario: usuario
}

console.table(nuevoObjeto);
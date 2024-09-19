// Objetos
console.warn("----Objetos----");

// const nombre = "Tablet";
// const precio = 300;
// const disponible = true;

const producto = {
    nombre: "Tablet 9", 
    modelo: "iPad",
    marca: "Mac",
    precio_venta: 300,
    precio_compra: 15355.20,
    disponible: true,
    SKU: Symbol("KOU"),
    colores: ["Blanco", "Negro", "Amarillo", "Rosa", "Azul"],
}
console.log(producto);
//Los objetos pueden representarse en formato de tabla utilizando  console.table
console.table(producto);

console.log(producto.nombre);
console.log(producto.marca);
console.log(producto.modelo);
console.log(producto.precio_venta);
console.log(producto.precio_compra);
console.log(producto.colores);
console.log(producto.disponible);

// Destructuring
console.warn("----Destructuring (Sacar una Estructura)----");

const { nombre, precio_venta,precio_compra,colores,marca,modelo, disponible } = producto;
console.log(nombre);
console.log(precio_compra);
console.log(precio_venta);
console.log(marca);
console.log(colores);
console.log(modelo);
console.log(disponible);


console.warn("Leyendo las Propiedades de un Objeto y sus tipos de datos")
console.log(`Nombre del Producto: ${producto.nombre} que es del tipo: ${typeof(producto.nombre)}`);
console.log(`Marca del Producto: ${producto.marca} que es del tipo: ${typeof(producto.marca)}`);
console.log(`Modelo del Producto: ${producto.modelo} que es del tipo: ${typeof(producto.modelo)}`);
console.log(`Precio Venta del Producto: ${producto.precio_venta} que es del tipo: ${typeof(producto.precio_venta)}`);
console.log(`Precio Compra del Producto: ${producto.precio_compra} que es del tipo: ${typeof(producto.precio_compra)}`);
console.log(`Colores del Producto: ${producto.colores} que es del tipo: ${typeof(producto.colores)}`);
console.log(`Disponibilidad del Producto: ${producto.disponible} que es del tipo: ${typeof(producto.disponible)}`);

// Object Literal Enhacement
console.warn("----Object Literal Enhacement----");

const autenticando = true;
const usuario = "juan";

const nuevoObjeto ={
    autenticando: autenticando,
    usuario: usuario
}

console.table(nuevoObjeto);
// Objetos
const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg}; color:with; border-radius: 6px; padding: 4px; font-size: 1.0rem font-weight: bold`;

console.log("%c1.- Objetos ", style_console);

// const nombre = "Tablet";
// const precio = 300;
// const disponible = true;

const producto = {
    nombre1: "Tablet 9",
    modelo1: "iPad",
    marca1: "Mac",
    precio_venta: 300,
    precio_compra: 15355.20,
    disponible: true,
    SKU1: Symbol("KOU"),
    colores1: ["Blanco", "Negro", "Amarillo", "Rosa", "Azul"],
}
console.log(producto);
//Los objetos pueden representarse en formato de tabla utilizando  console.table
console.table(producto);

console.log(producto.nombre1);
console.log(producto.marca1);
console.log(producto.modelo1);
console.log(producto.precio_venta);
console.log(producto.precio_compra);
console.log(producto.colores1);
console.log(producto.disponible);

// Destructuring
console.log("%c1.-Destructuring (Sacar una Estructura) ", style_console);

const { nombre1, precio_venta, precio_compra, colores1, marca1, modelo1, disponible } = producto;
console.log(nombre1);
console.log(precio_compra);
console.log(precio_venta);
console.log(marca1);
console.log(colores1);
console.log(modelo1);
console.log(disponible);


console.log("Leyendo las Propiedades de un Objeto y sus tipos de datos")
console.log(`Nombre del Producto: ${producto.nombre1} que es del tipo: ${typeof (producto.nombre1)}`);
console.log(`Marca del Producto: ${producto.marca1} que es del tipo: ${typeof (producto.marca1)}`);
console.log(`Modelo del Producto: ${producto.modelo1} que es del tipo: ${typeof (producto.modelo1)}`);
console.log(`Precio Venta del Producto: ${producto.precio_venta} que es del tipo: ${typeof (producto.precio_venta)}`);
console.log(`Precio Compra del Producto: ${producto.precio_compra} que es del tipo: ${typeof (producto.precio_compra)}`);
console.log(`Colores del Producto: ${producto.colores1} que es del tipo: ${typeof (producto.colores1)}`);
console.log(`Disponibilidad del Producto: ${producto.disponible} que es del tipo: ${typeof (producto.disponible)}`);


console.log("%c1.-Variables Independientes", style_console);

let Producto_Nombre = "Tennis Nike";
let Producto_Marca = "Nike";
let Producto_Modelo = "1344";
let Producto_Precio = 10302.0;
let Producto_Disponibilidad = true;
let Producto_SKU = Symbol("TEV3W-HTY78");
let Producto_Stock = 20;
let Producto_Imagen = null;
let Producto_Barcode;
let Producto_Categorias = ["Moda", "Ropa"];

// accedemos a los valores de las caracteristicas del producto de manera independiente

console.log(`Los datos del PRODUCTO son:\n\n Nombre del producto: ${Producto_Nombre} que es del tipo: ${typeof (Producto_Nombre)}\nMarca del producto:${Producto_Marca} que es del tipo: ${typeof(Producto_Marca)}, \nModelo del producto:${Producto_Modelo} que es del tipo:
 ${typeof (Producto_Modelo)},\nPrecio del producto: ${Producto_Precio} que es del tipo:${typeof(Producto_Precio)},\nDisponibilidad del producto:${Producto_Disponibilidad} que es del tipo:${typeof(Producto_Disponibilidad)},
 Stock del producto: ${Producto_Stock} que es del tipo:${typeof (Producto_Stock)},\nImagen del producto: ${Producto_Imagen} que es del tipo:${typeof(Producto_Imagen)},
 Barcode del producto: ${Producto_Barcode} que es del tipo:${typeof(Producto_Barcode)},\nCategorias del producto: ${Producto_Categorias} que es del tipo:${typeof(Producto_Categorias)} `)


console.log("SKU como es Symbol no se puede concatenar a la cadena");
console.log(Producto_SKU);
console.log(typeof(Producto_SKU));


//  Ahora se declara como objeto

let Productos = {
    nombre: "Tablet 9",
    modelo: "iPad",
    marca: "Mac",
    precio: 300,
    stock: 18,
    disponibilidad: true,
    SKU: "DGJ56-453",
    imagen: "../ASSETS/Product-Image-Galaxy-Tab-S6-2.jpg",
    barcode: null,
    categorias: ["Tecnologias", "Equipos", "Avances"],
}

// Ahora leemos el objeto
console.table(Productos);

console.log("Accedemos a las propiedades especificas del PRODUCTO");
console.log(`Nombre Completo del Producto: ${Productos.nombre} ${Productos.marca} ${Productos.modelo}`);
console.log(`Precio: ${Productos.precio}`);
if (Productos.disponibilidad == 0)
    console.log(`Estatus: Agotado`)
else 
console.log(`Estatus: ${Productos.stock} unidades disponibles`);


// Destructuracion de Objetos
console.log("%c1.- Destructuracion de Objetos", style_console);

let Producto2 = {
    Clave: 207,
    Nombre: "Toallas",
    Marca: "Saba",
    Modelo: "Nocturnas",
    Precio: 42.5,
    Disponibilidad: true,
    Stock: 100,
    Imagen: "../ASSETS/Product-Image-Galaxy-Tab-S6-2.jpg",
    Barcode: 26589622,
    Categorias: ["Higiene", "Comodidad"]
}

let Comprador= {
    Clave: 230237,
    Nombre: "Citlalli",
    Apellidos: "Perez Dionicio",
    Tipo: "Regular",
    Correo: "230237@utxicotepec.edu.mx",
    PaisOrigen: "Mexico",
    SaldoActual: 1320.0
}

let Pedido ={
    Producto_Clave: 236,
    Comprador_Clave: 1564,
    Cantidad: 3,
    Estatus: "Carrito",
    TipoPago: "Tarjeta de Debito"
}

// En base a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con su saldo a favor

let {Precio: Producto2_Precio2 } = Producto2;
let {Cantidad: Pedido_Cantidad} = Pedido;
let {SaldoActual: Cliente_SaldoActual} = Comprador;
let Costo_Compra = Producto2_Precio2 * Pedido_Cantidad;

console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de: ${Costo_Compra}`);
if (Costo_Compra<Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente");
 
// Actualizar valores de las propiedades de un objeto

console.log("%c4.- Actualizacion de los valores de las propiedades de un Objeto", style_console);

console.log(`El objeto actualmente tiene los siguientes valores`);
console.log(JSON.stringify(Producto2,null,2)); 

// Convierte el objeto a una cadena para evitar problemas con las referencias
console.log(`Por cuestiones de inflacion el costo del producto ha cambiado y debe ser actualizado... de $42.5, $42.0`)

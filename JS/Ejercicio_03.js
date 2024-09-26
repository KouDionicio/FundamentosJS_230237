// Objetos
const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 76%)";
const style_console = `background: ${bg}; color:white; border-radius: 6px; padding: 4px; font-size: 1.0rem font-weight: bold`;

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
console.log("%c2.-Destructuring (Sacar una Estructura) ", style_console);

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


console.log("%c3.-Variables Independientes", style_console);

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
console.log("%c4.- Destructuracion de Objetos", style_console);

let Producto2 = {
    ID: 1234,
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
    ID: 9254,
    //Clave: 230237,
    Nombre: "Citlalli",
    Apellidos: "Perez Dionicio",
    Tipo: "Regular",
    Correo: "230237@utxicotepec.edu.mx",
    PaisOrigen: "Mexico",
    SaldoActual: 1320.0
}

let Pedido ={
    ID: 5678,
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

console.log("%c5.- Actualizacion de los valores de las propiedades de un Objeto", style_console);

console.log(`El objeto actualmente tiene los siguientes valores`);
console.log(JSON.stringify(Producto2,null,2)); 

// Convierte el objeto a una cadena para evitar problemas con las referencias
console.log(`Por cuestiones de inflacion el costo del producto ha cambiado y debe ser actualizado... de $42.5, $42.0`);
// Para modificar el valor de un objeto basta con igualar el nuevo valor de la
//propiedad deseada
Producto2.Precio=6915.50;
console.log(`Los nuevos valores del Producto son:`);
console.log(Producto2);
// ¿Puedo cambiar no solo el valor , sino el tipo de dato de un Objeto en Javascript?
console.log(`----------------`);
console.log(`El objeto actualmente tiene los siguientes valores`);
let tipoDisponibilidad = typeof(Producto2.Disponibilidad);

console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`);
console.log(JSON.stringify(Producto2, null, 2));
Producto2.Disponibilidad="Si";
// Disponiblidad Booleano
let nuevoTipoDisponibilidad = typeof(Producto2.Disponibilidad);

//Console.log(Producto2);
//Console.log(`El nuevo tipo de dato de la disponibilidad es: ${nuevoTipoDisponibilidad}`);

//Agregar nuevas propiedades a un objeto existente
console.log("%c6.- Agregación de la Propiedad de un Objeto (MUTACIÓN)", style_console);
console.log("Objeto antes de ser modificado");
console.table(JSON.stringify(Comprador));  

//Agregando propiedades
Comprador[`Direccion`] = "Calle Tejeria S/N Col.Centro";
Comprador[`Tipo`] = "Alta";
Comprador[`Estuatus`] = "Inactiva";
Comprador[`Total Compra`] = 560;
console.log("Objeto antes de ser modificado");
console.table(Comprador);


//Eliminar nuevas propiedades a un objeto existente
console.log("%c7.- Eliminación de la Propiedad de un Objeto (MUTACIÓN)", style_console);
console.log("Objeto antes de ser modificado");
console.table(Pedido);

// Eliminamos la propiedad de TipoPago de Pedido
delete Pedido[`TipoPago`];
console.log("Objeto después de ser modificado");
console.table(Pedido)


//Métodos para controlar la Mutabilidad de los Objetos, Congelación (FREEZE)
console.log("%c8.- Métodos para controlar la Mutabilidad de los Objetos, Congelación (FREEZE)", style_console);

// Si deseamos no perimitir que los objetos sean modificados ni en estructura, ni en valor, utilizaremos el método FREEZE

console.log(`La estructura actual del objeto Comprador es: `);
console.table(Comprador);
Object.freeze(Comprador);
//intentaremos agregar , eliminar o modificar los valores de sus propiedades
Comprador.FechaUltimaCompra = "12-09-2024";
delete Comprador.Tipo;
Comprador.Direccion= "Calle 5 Mayo #126, Col.Centro, Xicotepec de Júarez, Puebla, México";
console.log(`Verificamos si se reralizaron los cambios en nel objeto`);
console.table(Comprador);


//Métodos para controlar la Mutabilidad de los Objetos, Sellado (SEAL)
console.log("%c9.- Métodos para controlar la Mutabilidad de los Objetos, Sellado (SEAL)", style_console);

// Sin embargo, en el caso que deseamos poder modificar los valores de las propiedades del objeto, pero no su estructura, usaremos SEAL
console.log("Objeto antes de ser modificado:");
console.table(Pedido);

Object.seal(Pedido)
//Intentaremos modificar su estructura
Pedido[`FechaPedido`]= "23-08-2024";
delete Pedido[`Cantidad`];
console.log(`Verificamos si se realizaron los cambios en el Objeto Pedido`);
console.table(Pedido);

//Ahora se intentara modificar el valor de las propiedades
Pedido.Cantidad = 10;
console.log(`Verificamos si se realizaron los cambios en el Objeto Pedido`);
console.table(Pedido);

// Desestructuración de 2 o más Objetos
console.log("%c10.- Desestructuración de 2 o más Objetos", style_console);

let {Precio: productoPrecio, Marca: productoMarca} = Producto2;
let {Correo: clienteCorreo, PaisOrigen: clientePais, SaldoActual: clienteSaldo ,Tipo: clienteTipo} = Comprador;

//Transformar valores cuantitativos en cualitativos
if (productoPrecio > 2000)
    productoPrecio = "Caro";
else 
    productoPrecio = "Barato";

if (clienteSaldo > 0)
    clientePais = "A favor";
else if (clienteSaldo < 0)
    clienteSaldo = "En contra"
else
    clienteSaldo = "Sin deuda";


//Transformar valores  cualitativos en cuantitativos 

let clienteNivel ;
if (clienteTipo == "Pemium")
    clienteNivel = 1;
if (clienteTipo == "Freemium");
    clienteNivel = 2;
if (clienteNivel == "No identificado")
    clienteNivel = 3;

// Clasificamos al cliente por su País de Origen

if (clientePais == "Mexico")
    clientePais = "Nacional";
else 
    clientePais = "Extranjero";


// OLE Object Literal Ennhacement
let datosClientePromociones = {clienteCorreo, clientePais, clienteNivel,productoMarca,productoPrecio,clienteSaldo}
// El nuevo objeto que se creara seria un ejemplo de la información que enviariamos al area de marketing para la difusión de promociones
console.log("Los datos del cliente y sus hábitos de compra son: ")
console.table(datosClientePromociones);

//Operaciones sobre Objetos y Unión de Objetos
console.log("%c11.- Union de Objetos usando el metodo de asignacion (ASSING)", style_console);

console.log("Imprimimos la estructura y valores del Objeto PRODUCTO");
console.table(Producto2);

console.log("Imprimimos la estructura y valores del Objeto PEDIDO");
console.table(Pedido);
// Suponiendo que el usuario ya realizo el pago del pedido se convertira en una VENTA que requiere informacion de ambos objetos

let Producto3  ={ ...Producto2};
const Venta = Object.assign(Producto3, Pedido); // Assing no solo permite la fusion de 2 o mas objeto,tambien muta a los objetos originales,perdiendo el valor original del ID.
console.log("Imprimimos la estructura y valores del Objeto VENTA");
console.table(Venta);



// Union  de objetos usando SPREAD OPERATOR para evitar la perdida de informacion con objetos que comparten el mismo nombre en sus propiedades
console.log("%c12.- Union de Objetos usando el SPREAD OPERATOR (...)", style_console);

//Producto2.ID= 1286; //Parchado del error, reiniciando el valor del producto ID al original

console.table(Producto2);
console.table(Comprador);
console.table(Pedido);


let Venta2 = {
    producto: {...Producto2},
    comprador: {...Comprador},
    pedido: {...Pedido}
} 
console.log("Fusionamos los 3 objetos en uno nuevo, sin perdida de informacion ");
console.table(Venta2);


// let spotifyUser = {
//     Name: " ", //congelado
//     nickname: " ", //sellado
//     email: " ", //sellado
//     password: " ", //sellado
//     rol: " ", //sellado
//     since: " ", //congelado
//     playList: ["BTS", "Spring Day"], // normal, modificado o eliminado
// }


// Verificar el estatus de mutabilidad de los objetos
console.log("%c13.- Mutabilidad POST Union de Objetos", style_console);

console.log("Vamos a verificar el estatus de mutabilidad del objeto PEDIDO");
console.log(`¿Esta el objeto de Pedido Congelado? : ${Object.isFrozen(Pedido)}`);
console.log(`¿Esta el objeto de Pedido Sellado? : ${Object.isSealed(Pedido)}`);

console.log("Vamos a verificar el estatus de mutabilidad del objeto COMPRADOR");
console.log(`¿Esta el objeto de Pedido Congelado? : ${Object.isFrozen(Comprador)}`);
console.log(`¿Esta el objeto de Pedido Sellado? : ${Object.isSealed(Comprador)}`);


console.log("Vamos a verificar el estatus de mutabilidad del objeto PRODUCTO");
console.log(`¿Esta el objeto de Pedido Congelado? : ${Object.isFrozen(Producto2)}`);
console.log(`¿Esta el objeto de Pedido Sellado? : ${Object.isSealed(Producto2)}`);

//Modificacion de la estructura de producto, agregando una nueva propiedad 
//Producto delegado ya no se hacen, o ya no tienen continuidad
Producto2['isLegacy'] = true; 
console.log(Producto2);
console.log(Venta2);
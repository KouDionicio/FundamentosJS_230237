//Tipos de datos

// 1-Undefined 
console.warn("----Tipo de dato Undefined");
let cliente;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente="Luna";
console.log("El cliente es: ",cliente);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
cliente=230237;
console.log("El cliente es: ",cliente);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

//Undefined es el tipo de dato que por defecto se asigna a varibles no inicializadas o no declaradas


// 2-Boolean
console.warn("----Tipo de dato Boolean");
let esPremium = "No lo se";
console.log(`¿Es el cliente Premium?: ${esPremium}`);
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

esPremium="true";
console.log("Asignando el valor 'true' a la variable");
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

esPremium = true;
console.log(`¿Es el cliente Premium?: ${esPremium}`);
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

console.log("Cambiando el valor de esPremium a false");
esPremium= false;
if(esPremium)
    console.log("El cliente pago por usar el servicio ");
else
console.log("El cliente que recibe los servicios gratuitos ");



// 2-Number
console.warn("----Tipo de dato Number (Números-Positivos-Negativos-Decimales-Flotantes)");
var cantidad;
const costo_producto = 10.50;
let saldo_cuenta = -2500.48;
let monto_trans ;
console.log(`Tu saldo al día de hoy es de: ${saldo_cuenta}, Tipo de dato = ${typeof(saldo_cuenta)}`)
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`);
cantidad= 10;
console.log(`Has elegido comprar: ${cantidad}, de productos`);
console.log(`El importe total de la compra es: ${cantidad*costo_producto}`);
saldo_cuenta= saldo_cuenta - (cantidad*costo_producto);
console.log(`El nuevo saldo es de: ${saldo_cuenta}`);
//El cliente realiza un abono de 1500
monto_trans=1500;
console.log(`Tu abono de: ${monto_trans} ha sido resivido, tu nuevo saldo es de ${(saldo_cuenta+monto_trans)}`)




//String o Cadenas de texto
console.warn("----Tipo de dato String (Cadena de caractères)");
const alumno = "Juan";
let producto = 'Monitor';

const numero = 30;
const numero2 = 20;

console.log(typeof numero);
console.log(typeof numero2);

const numeroGrande = BigInt(918298193891887139831091038173813);
console.log(typeof numeroGrande)
 
 const numero1 = 10;
 const numero02 = 20;
console.log(numero1 + Number(numeroGrande));

//Para ocupar una operacion de una cadena de texto con un numero
const numero4 = "30";
 const numero5 = 20;

console.log(typeof String(numero4));
console.log(typeof Number(numero5));


//Symbol
console.warn("----Tipo de dato Symbol");
const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);
console.log(primerSymbol === segundoSymbol);
 console.log(primerSymbol.valueOf());



//Null
console.warn("----Tipo de dato Null");
const descuento = null;
console.log(typeof descuento);
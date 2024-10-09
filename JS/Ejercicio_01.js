// Ejercicio 1 
/* Declaracion de variables  */

// Forma 1 Var
console.warn("----Declaracion de variables del tipo constante usando: VAR");
var miNombre ="Citlalli";
var misApellidos;
var edad = 20;

// El objeto de console nos permite enviar datos a la terminal y poder visualizar el valor de una variable o resultado 
console.log("Intentando leer variables",miNombre, misApellidos);

misApellidos ="Pérez Dionicio";
console.log("Intentando leer nuevamente",miNombre, misApellidos);

//Una variable puede cambiar en el proceso de ejecucion del programa


// Forma 2 Const
console.warn("----Declaracion de variables del tipo constante usando: CONST");
const miUni = "UT Xicotepec";
const matricula= 230237;
console.log("Hola, ",miNombre, misApellidos, " se que estudias actualmente en ",miUni, " te asignaron la matricula", matricula, "y tienes una edad de", edad);


//Para saber el tipo de dato que tiene una variable o constante podemos utilizar la funcion typeOf()
console.log("Analizando losdatos puedo deducir que: ");
console.log("Mi nombre es del tipo ", typeof(miNombre));
console.log("Mis apellidos son del tipo ", typeof(misApellidos));
console.log("Mi universidad es del tipo ", typeof(miUni));
console.log("Mi edad es del tipo ", typeof(edad));
console.log("Mi matricula es del tipo ", typeof(matricula));


// Forma 3 Let
console.warn("----Declaracion de variables del tipo constante usando: LET");
let fechanaci = "2004-09-12";
let colorfav ;
console.log("Mi fecha de nacimiento es", fechanaci, " y mi color favorito es.................");
colorfav = "negro";
console.log(`Creo que tu color favorito es el color ${colorfav}, le atine`); //La manera de mezclar textos fijos con el vlor actual de las variables se le conoce como interporlacion y deben iniciar y finalizar con un backtic - tilde inversa
console.log("Mi fecha es del tipo", typeof(fechanaci));
console.log("Mi color es del tipo", typeof(colorfav));
// Repaso de Ciclo y Sentencias de Control

//Declaración de Variables de Estilo
const bg = "linear-gradient(11deg, rgba(2,0,36,1) 5%, rgba(213,133,179,1) 34%, rgba(50,6,83,1) 62%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`;

//Personalización de las Salidas a Consola
console.warn("Práctica 0: Arreglos en JavaScript");

console.log("%c1.- Condicionales - Si/Entonces....(IF)", style_console);

//Le indicamos al programa que hacer o que no, en vase a una prueba lógica de verdadero o falso
let fechaActual = new Date();

console.log(`Hola, la fecha de hoy es: ${fechaActual.toString()}`);

//¿Y si la necesitamos en formato local?
const fechaLocalMX = fechaActual.toLocaleString('es-MX',{
weekday: 'long',
year: 'numeric',
month: 'long',
day: 'numeric',
hour: 'numeric',
minute: 'numeric',
second: 'numeric',
hour12: false
});

console.log(`En Formato Local (México): ${fechaLocalMX}`);

// Si es antes de las 12, saluda con un Buenos Días

if(fechaActual.getHours()<12)
    console.log(`Buenos Días, hoy es: ${fechaLocalMX}`);

// Existe un extensor de la sentencia if(si) que es el else (en caso contrario)
if(fechaActual.getMonth()<=6)
    console.log(`Estas en la Primera mitad del año`);
else
    console.log(`Estas en la Segunda mitad del año`);

//Que pasa si la validación tiene varias operaciones

const anio = fechaActual.getFullYear();

let inicioPrimavera = new Date(anio, 2,21);
let inicioVerano = new Date(anio, 5,21);
let inicioOtonio = new Date(anio, 8,21);
let inicioInvierno = new Date(anio, 11,21);
let estacion;
let horarioVerano = false;

if(fechaActual >= inicioPrimavera && fechaActual < inicioVerano){
    console.log("Estamos en Primavera")
    console.log("Inicia la floración de muchas plantas...")
    console.log("Los días son más largos y las noches más cortas...")
    console.log("Muchos animales despiertan de la hibernación...")
    estacion = "Primavera"
    horarioVerano = true;
} else if (fechaActual >= inicioVerano && fechaActual < inicioOtonio){
    console.log("Estamos en Verano")
    console.log("En esta temporada abundan los días Soleados y Calurosos ")
    console.log("En esta temporada, el índice de turismo vacacional sube...")
    console.log("Mucha gente busca realizar actividades al aire...")
    estacion = "Verano"
    horarioVerano = true;
}else if (fechaActual >= inicioOtonio && fechaActual < inicioInvierno){
    console.log("Estamos en Otoño")
    console.log("En esta temporada los días arboles suelen cambiar de follaje ")
    console.log("En esta temporada, se registran temperaturas más templadas...")
    console.log("Los animales comienzan con la recolección de alimento y prepraran sus espacios para la hibernación, incluso algunas aves migran...")
    estacion = "Otoño"
    horarioVerano = true;
}else{
    console.log("Estamos en Invierno")
    console.log("En esta temporada los días son más cortos y las noches más largas y frias ")
    console.log("En algunas regiones suele nevar")
    console.log("Dado las bajas temperaturas, se recomienda abrigarse")
    estacion = "Invierno"
    horarioVerano = false;
}


console.log("%c2.- Operador Ternario - (Validación cumple:no_cumple)", style_console);
// En javascript existe una opracion implicada qu evalida si una condición se cumple o no, y que tiene que hacer cada una

const edadPersona = 20;
const mayoriaEdadMX = 18;
const mayoriaEdadUS = 21;

let evaluarMayorEdad = (edad) =>
    edad>=18 ? "Eres mayor de edad ": "No eres mayor de edad."

console.log("Evaluando la mayoria de edad de una persona....")
console.log(evaluarMayorEdad(edadPersona));

// Sin embargo tenemos que considerar que la mayoria de edad varia en cada pais por cuestiones legales, 
//por lo que debemos considerar un segundo parametro en la evaluacion

evaluarMayorEdad = (edad,pais) =>
(edad>=18 && pais==="MX")? `En ${pais} eres mayor de edad `:`En pais ${pais} No eres mayor de edad`;
console.log("Evaluando la mayoria de edad de una persona en Mexico....");

console.log(evaluarMayorEdad(edadPersona, "MX"));

console.log("Evaluando la mayoria de edad de una persona en Estados Unidos....");
console.log(evaluarMayorEdad(edadPersona, "US"));

console.log("%c3.- SWITCH - CASE (Eleccion por valor definido)", style_console);

//calculando tu generacion en base a tu edad

let asignaGeneracion = (anioNacimiento)=>{
    switch(true){
        case(anioNacimiento<1968):
        return "Baby Boomers";
       
        case (anioNacimiento>1968 && anioNacimiento <=1980):
        return "Generacion X";

        case(anioNacimiento<1980 && anioNacimiento<=1994):
        return "Milenials";
       
        case (anioNacimiento>1994 && anioNacimiento <=2010):
        return "Centenials";

        case (anioNacimiento>2010):
        return "Krystal";
    }
}

console.log(`Dado que nació en el año 1997 soy de la generación: ${asignaGeneracion(1982)}`);
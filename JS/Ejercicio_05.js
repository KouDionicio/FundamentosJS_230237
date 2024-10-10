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

//? Sin embargo tenemos que considerar que la mayoria de edad varia en cada pais por cuestiones legales, 
//?por lo que debemos considerar un segundo parametro en la evaluacion

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

console.log(`Dado que naci en el año 2004 soy de la generación: ${asignaGeneracion(2004)}`);



console.log("%c4.- Manejo de Excepciones (TRY / CATCH)", style_console);

//? En algunas ocasiones existiran errores que no son culpa del programa, si no del usuario, la red, el so o incluso de un middleware, pero que sin duda debemos controlar para evitar las fallas de ejecucion

console.log("1-Intentamos dividir: 0/10, el reultado es: ");
try{  //intentamos
    let result = 0/10; //dividir 0 entre 1 entero
    console.log(result)
}catch(error){
    console.log("Ocurrio un error: "+ error.message);
}

console.log("2-Intentamos dividir: 10/0, el reultado es: ");
try{  //intentamos
    let result = 10/0; //dividir 1 entre 0 entero
    console.log(result)
}catch(error){
    console.log("Ocurrio un error: "+ error.message);
}

console.log("3-Intentamos dividir:  a /10, el reultado es: ");
try{  //intentamos
    let result = "a"/10 //dividir a/10
    console.log(result)
}catch(error){
    console.log("Ocurrio un error: "+ error.message);
}

console.log("4-Intentamos dividir: la variable a /10, el reultado es: ");
try{  //intentamos
    let result = a/10 //dividir una variable no definida entre 0 
    console.log(result)
}catch(error){
    console.log("Ocurrio un error: "+ error.message);
}

console.log("5-Intentamos dividir: el valor de la variable x / entre el valor de y , el reultado es: ");
try{  //intentamos
    let x=10, y=5, result= x/y  //dividir entre 2 variables definidas
    console.log(result)
}catch(error){
    console.log("Ocurrio un error: "+ error.message);
}


console.log("%c5.- Control de Ciclos (BREAK / CONTINUE)", style_console);

//? En algunas ocasiones sera importante detener uun ciclo de manera abrupta para controlar

console.log("Vamos a contar del 1 al 10");
for (let num = 1; num<=10;num++){
    console.log(num)
}
  



console.log("Ahora necesitamos que... si llegas al 7 pares de contar.. suponiendo que solo por hoy es de mala suerte..(Aqui se rompe)");
for (let num = 1; num<=10;num++){
    if(num==7)
        break;
    else
        console.log(num)

}
    

console.log("Ahora necesitamos que... si llegas al 7 te saltes ese numero y continues(Aqui se continua)");
for (let num = 1; num<=10;num++){
    if(num==7){
      continue;
    }
      console.log(num);
}
   
       
        
console.log("%c6.- Ciclo Iterativo (FOR)", style_console);
//? Recorre de manera iterativa (i), de incremento o decremental

console.log("Los dias de la semana son en orde ascendente son: ")
let dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]

for(let i=0; i<dias.length;i++){
    console.log(dias[i]);
}
   


console.log("Ahora vamos a imprimir los meses en orden descendente...");
const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

for(let i=meses.length-1 ;i>=0; i--){
    console.log(meses[i]);
}
    



console.log("%c7.- Ciclo Condicional (WHILE)", style_console);
//? Estos ciclos (BUCKLE) dependen de una condicion para continuar ejecutandose

let finDeSemana = false;
let mensaje = " ";
let j = 0;
 while(j < dias.length){
    switch(j){
        case 0:
          finDeSemana = true;
          mensaje = "Dia de Flojeraaaaa - domingoooooo";
          break;
        case 1:
          finDeSemana = false;
          mensaje = "Lunes flojeraa";
          break;
        case 2:
          finDeSemana = false;
          mensaje = "Martes flojeraa";
          break;
        case 3:
          finDeSemana = false;
          mensaje = "Miercoles flojeraa";
          break;
        case 4:
          finDeSemana = false;
          mensaje = "Jueves flojeraa";
          break;
        case 5:
          finDeSemana = false;
          mensaje = "Viernes flojeraa";
          break;
        case 6:
          finDeSemana = false;
          mensaje = "Sabado flojeraa";
          break;
    }
    if(!finDeSemana){
        console.log(`Dia: ${dias[j]}`)
        console.log(`Mensaje del dia: ${mensaje}`)
    }
    j++;
 }



 console.log("%c8.- Ciclo Condicionales, que se ejecutan al menos una vez (DO WHILE)", style_console);
 //? Simulando una lista de episodios de una temporada

 let episodios= [
    "Sweet Home Episodio 7 Temp: 1: Hyun-su salva al grupo de un ataque letal",
    "Sweet Home Episodio 7 Temp: 1: Cuando un grupo de forajidos se apodera del edificio",
    "Sweet Home Episodio 2 Temp: 2: Eun‑yu encuentra una pista de lo que pudo ocurrirle a Eun‑hyeok en una parada del camino.",
    "Sweet Home Episodio 7 Temp: 2: Eun‑yu tiene una reunión interesante con Hyun‑su: ",
    "Sweet Home Episodio 9 Temp: 2: Yi‑kyung corre peligro de muerte, y la niña intenta salvarla.",
    "Sweet Home Episodio 5 Temp: 3: El encuentro entre Eun‑hyeok, Hyun‑su y Eun‑yu termina en caos.",
    "Sweet Home Episodio 8 Temp: 3: En la batalla final, Hyun‑su y Eun‑hyeok arremeten con todo contra la chica, pero reciben ayuda de un viejo amigo. ¿Lograrán su cometido",
 ];

 let indice = 0;
 let continuarViendo= true;  //? aqui se simula la desicion del usuario de continuar viendo

 do{
    console.log(`Reproduciendo ${episodios[indice]}`);

    indice++; //?simulando la reproduccion del episodio

    if(indice<episodios.length){ //?simulamos una pregunta al usuario si desea seguir viendo
        continuarViendo = confirm("¿deseas continuar con el siguiente episodio?");
    }else{
        continuarViendo = false;  //?cuando se acaba la lista de episodios
    }


 } while(continuarViendo && indice<episodios.length);
 console.log("Fin de reproduccion");


 console.log("%c9.- Ciclos para recorrer elementos finitos (FOR...OF)", style_console);
 //?ciclo para recorrer objetos iterables como mapas, arreglos,cadenas y conjunto de datos


 let seriesTrending = [
    {nombre: "The Witcher", temporadas: 3, totalViewrs: "6.5M", totalRepro: "7.1M"},
    {nombre: "Stranger Thins", temporadas: 4, totalViewrs: "30M", totalRepro: "31M"},
    {nombre: "The Boys", temporadas: 3, totalViewrs: "1.9M", totalRepro: "2.0M"},
    {nombre: "Loki", temporadas: 2, totalViewrs: "144M", totalRepro: "150M"},
    {nombre: "Succession", temporadas: 4, totalViewrs: "60M", totalRepro: "61M"}
 ];


 //? usamos for...of para recorrer la lista
 for( let serie of seriesTrending){
    console.log(`Serie: ${serie.nombre}, Temporadas: ${serie.temporadas}`);
 }

 try{
    console.log(`La ultima serie vista fue: ${serie.nombre}`);  //?no va a funcionar ya que la variable serie ya alcanzo su alcance 
 }catch(error){
    console.log("Mensaje de error: "+ error.mensaje);
 }



console.log("%c10.- Ciclos para recorrer las propiedades de elementos finitos (FOR...IN)", style_console);
//?usando for...in para recorrer cada serie
for (let i in seriesTrending){
    console.log(`Serie ${parseInt(i) +1}`);
    for(let propiedad in seriesTrending[i]){
        console.log(`${propiedad}: ${seriesTrending[i][propiedad]}`);
    }
    console.log('◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘');
}

console.log("%c11.- Ciclos interrumpidos para cada uno de los elementos del arreglo (FOR EACH)", style_console);

//?listas de series tv 
let seriesTrending2 = [
    {nombre: "The Witcher", temporadas: 3, viewrs: "600000", reproducciones: "710000"},
    {nombre: "Stranger Thins", temporadas: 4, viewrs: "300000", reproducciones: "3100000"},
    {nombre: "The Boys", temporadas: 3, viewrs: "100090", reproducciones: "200000"},
    {nombre: "Loki", temporadas: 2, viewrs: "1440000", reproducciones: "1500000"},
    {nombre: "Succession", temporadas: 4, viewrs: "6000000", reproducciones: "610000"},
    {nombre: "The Walking Dead", temporadas: 16, viewrs: "66000", reproducciones: "8900000"}
];

//?usando for each para recorrer cada serie y calcular la calificacion 
seriesTrending2.forEach((serie, index)=>{
    let calificacion = (serie.reproducciones / serie.viewrs).toFixed(2); //? calculamos la calificacion y lo redondea a 2 decimales

    console.log(`Serie ${index +1}`);
    console.log(`Nombre ${serie.nombre}`);
    console.log(`Temporadas ${serie.temporadas}`);
    console.log(`Viewers ${serie.viewrs}`);
    console.log(`Reproducciones ${serie.reproducciones}`);
    console.log(`Calificacion ${calificacion}`);
    console.log('---------------------------');
});


//? usaremos filter,map para transformar la informacion
let seriesDeseadas = ["The Walking Dead","The Boys","Loki"]; //?lista de series que queremos verificar

//? usando map e includes para filtar y obtener los nombres de series con 3 temporadas
let seriesConTresTemporadas = seriesTrending2
 .filter(serie => serie.temporadas <= 3) //?filtramos las series que tienen 3 temporadas
 .map(serie => serie.nombre) //?obtenemos solo los nombres de esas series
 .filter(nombre => seriesDeseadas.includes(nombre)); //?filtramos las que estan en la lista de series deseadas

 //?mostrar los resultados
 console.log("Series con 3 temporadas que estan en la lista deseada");
 console.table(seriesConTresTemporadas);
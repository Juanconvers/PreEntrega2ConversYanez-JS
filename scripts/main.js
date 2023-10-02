

// Nuevo contexto del proyecto:
// Cálculo de copmpetencia de procesos de pertenencia:
// 1. De varios inmuebles al tiempo porque es en el contexto de una firma de abogados grande.
// 2. Sirve para sacar estadísticas de los procesos (urbano / rural) (cuantía)

// Declaración de variables:

let nombrePredio = "";
let avaluo = 0;
let porcentaje = 0;
let tipo = "";
let caso = {};

// Definición de la función que realiza el cálculo de la cuantía:

function calcularCuantia (avaluo, porcentaje) {
  if (avaluo !== NaN && porcentaje !== NaN) {
    return (avaluo * porcentaje) / 100;
  }
  return NaN;
}




// Introducción al programa

alert("Bienvenido(a) - Este servicio le ayudará a saber a cuál tipo de juzgado le corresponde tramitar su proceso de pertenencia en Colombia.");

let respuestaContinuar = prompt("¿Desea realizar un cálculo de competencia judicial? Responda Si / No");

// Definición del Array que tendrá como elementos los casos (objetos) introducidos por el usuario en la consulta

const listaCasos = [];

//  Ciclo de introducción de datos y cálculo de cuantía 

while (respuestaContinuar.toUpperCase() === "SI") {
  alert("Por favor responda las siguientes preguntas:");
 
// Solicitud de información al usuario.

    nombrePredio = prompt("¿Cuál es nombre del predio a reclamar? O indique el nombre con que se conoce su caso"),
    avaluo = parseFloat(prompt("¿Cuál es avalúo catastral del inmueble que pretende o el de mayor extensión? Escriba el valor en pesos colombianos. Use números, sin puntos, comas u otros signos")),
    porcentaje = parseFloat (prompt("¿Cuál es el porcentaje que ocupa el predio que usted pretende en posesión? Escriba un valor del 0 al 100")),
    tipo = prompt("¿El predio a reclamar es urbano o rural?")
  

// Cálculo de las cuantías que definen la competencia judicial. (*Con cada resultado solicité impresión de los resultados numéricos en la consola para verificar el funcionamiento de la función.)

let cuantia = calcularCuantia (avaluo, porcentaje)

    if (cuantia !== NaN) {
      if (cuantia <= 46400000){
            alert("El proceso llamado " + nombrePredio + 
            " se cataloga de Mínima Cuantía - Le corresponde radicar el proceso en un Juzgado Municipal o de Pequeñas Causas")
            console.log("Avalúo catastral ingresado: $" + avaluo + ". Porcentaje sobre el avalúo:" + porcentaje + "% . Cuantía de la pretensión: $" + cuantia );
          } else if (46400000 < cuantia && cuantia <= 174000000){
            alert("El proceso llamado " + nombrePredio + 
            " se cataloga de Menor Cuantía - Le corresponde radicar el proceso en un Juzgado Municipal");
            console.log("Avalúo catastral ingresado: $" + avaluo + ". Porcentaje sobre el avalúo:" + porcentaje + "% . Cuantía de la pretensión: $" + cuantia ); 
          } else if (174000000 < cuantia){
            alert("El proceso llamado " + nombrePredio + 
            " se cataloga de Mayor Cuantía - Le corresponde radicar el proceso en un Juzgado del Circuito");
            console.log("Avalúo catastral ingresado: $" + avaluo + ". Porcentaje sobre el avalúo:" + porcentaje + "% . Cuantía de la pretensión: $" + cuantia );
          } else {
            alert("No se puede procesar la solicitud"); 
          }
    }

// Instanciación del objeto que hará parte del array.

    caso = {
      nombrePredio,
      cuantia,
      tipo
      }

// Método que agrega el nuevo objeto al array.

    listaCasos.push(caso);
    
// Se imprime el array modificado en la consola.

    console.log(listaCasos);
    
// Opción para realizar un nuevo cálculo de jurisdicción o terminar.

    respuestaContinuar = prompt("¿Desea realizar otro cálculo de competencia judicial? Responda Si / No"); 

} 
// Fin del bucle


console.log(listaCasos.length);

const urbanos = listaCasos.filter(x => x.tipo.toUpperCase() === "URBANO")
const estadisticaUrbanos = (urbanos.lenght * 100) / listaCasos.length;

const rurales = listaCasos.filter(x => x.tipo.toUpperCase() === "RURAL")

console.log(urbanos);

console.log(estadisticaUrbanos);



alert("Gracias por elegirnos");





// const resultadoTipo = listaCasos.filter(function(caso) {
//   caso.tipo.toUpperCase() === "URBANO";
// })















// // alert("Avalúo catastral ingresado: $" + Caso.avaluo + ". Porcentaje sobre el avalúo:" + Caso.porcentaje + "% . Cuantía de la pretensión: $" + cuantia + "Tipo de inmueble:" + Caso.tipo);


// ******************************   FUNCIONA **********************
 
// // Declaración de variables:

// let nombrePredio = "";
// let avaluo = 0;
// let porcentaje = 0;
// let clasificacion = "";



// // Definición de la función que realiza el cálculo de la cuantía:

// function calcularCuantia (avaluo, porcentaje) {
//   if (avaluo !== NaN && porcentaje !== NaN) {
//     return (avaluo * porcentaje) / 100;
//   }
//   return NaN;
// }

// // Introducción

// alert("Bienvenido(a) - Este servicio le ayudará a saber a cuál tipo de juzgado le corresponde tramitar su proceso de pertenencia en Colombia.");

// let respuestaContinuar = prompt("¿Desea realizar un cálculo de competencia judicial? Responda Si / No");
// while (respuestaContinuar.toUpperCase() === "SI") {
//   alert("Por favor responda las siguientes preguntas:");
 
// // Instanciación del objeto que correponde a cada caso que se consulta

//   let Caso = {
//     nombrePredio: prompt("¿Cuál es nombre del predio a reclamar? O indique el nombre con que se conoce su caso"),
//     avaluo: parseFloat(prompt("¿Cuál es avalúo catastral del inmueble que pretende o el de mayor extensión? Escriba el valor en pesos colombianos. Use números, sin puntos, comas u otros signos")),
//     porcentaje: parseFloat (prompt("¿Cuál es el porcentaje que ocupa el predio que usted pretende en posesión? Escriba un valor del 0 al 100")),
//     tipo: prompt("¿El predio a reclamar es urbano o rural?")
//     }
// console.log(Caso); 



// // Con cada resultado solicité impresión de los resultados numéricos en la consola para verificar el funcionamiento de la función.

// let cuantia = calcularCuantia (Caso.avaluo, Caso.porcentaje)

//     if (cuantia !== NaN) {
//       if (cuantia <= 46400000){
//             alert("Su proceso se cataloga de Mínima Cuantía - Le corresponde radicar el proceso en un Juzgado Municipal o de Pequeñas Causas")
//             console.log("Avalúo catastral ingresado: $" + Caso.avaluo + ". Porcentaje sobre el avalúo:" + Caso.porcentaje + "% . Cuantía de la pretensión: $" + cuantia );
//           } else if (46400000 < cuantia && cuantia <= 174000000){
//             alert("Su proceso se cataloga de Menor Cuantía - Le corresponde radicar el proceso en un Juzgado Municipal");
//             console.log("Avalúo catastral ingresado: $" + Caso.avaluo + ". Porcentaje sobre el avalúo:" + Caso.porcentaje + "% . Cuantía de la pretensión: $" + cuantia ); 
//           } else if (174000000 < cuantia){
//             alert("Su proceso se cataloga de Mayor Cuantía - Le corresponde radicar el proceso en un Juzgado del Circuito");
//             console.log("Avalúo catastral ingresado: $" + Caso.avaluo + ". Porcentaje sobre el avalúo:" + Caso.porcentaje + "% . Cuantía de la pretensión: $" + cuantia );
//           } else {
//             alert("No se puede procesar la solicitud"); 
//           }
//     }

//         //Declaraciòn de array vacío y variable para determinar cantidad
//     const listaCasos = [];
//        //Empleo de do...while para cargar nombres en el array por prompt()
   
//     listaCasos.push(Caso);
//     console.log(listaCasos);
    

//     // Opción para realizar un nuevo cálculo de jurisdicción o terminar.
//     respuestaContinuar = prompt("¿Desea realizar otro cálculo de competencia judicial? Responda Si / No"); 
// }
// alert("Gracias por elegirnos");
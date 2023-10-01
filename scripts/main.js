

// READ FIRST:

// ***** CALCULADORA PRA USOS JUDICIALES - DEFINICIÓN DE LA COMPETENCIA PARA PROCESOS DE PERTENENCIA EN COLOMBIA AÑO 2023 *****

// Explicación del programa:
// 1. El procesos judiciale de pertenencia juzga si alguien puede ser propietario de un inmueble sólo por el hecho de ocuparlo.
// 2. La "competencia judicial" es definir a cual Juez al que le corresponde decidir el asunto, pues hay muchos tipos de jueces.
// 3. La forma de definir esta competencia depende del valor del inmueble que se quiere adquirir. 
//    En Colombia se le llama "cuantía" y dicho valor es el avalúo catastral del inmueble.
// 4. Puede ser que no se quiera adquirir la totalidad del inmueble (100%), sino que se se quiera otro porcentaje.
// 5. Esta calculadora determina el valor de la cuantía según el porcentaje que se pretenda adquirir.
// 6. El valor puede tener tres categorías: 
//                  1). Ser inferior a $46.400.000 COP --> Juzgado Municipal o de Pequeñas Causas
//                  2). Estar entre $46.400.000 COP y $174.000.000 COP --> Juzgado Municipal
//                  3). Ser mayor a $174.000.000 COP --> Juzgado del Circuito

// Declaración de variables:

let avaluo = 0;
let porcentaje = 0;
let cuantia = 0;

// Definición de la función que realiza el cálculo de la cuantía:

function calcularCuantia (avaluo, porcentaje) {
  if (avaluo !== NaN && porcentaje !== NaN) {
    return (avaluo * porcentaje) / 100;
  }
  return NaN;
}

// Introducción

alert("Bienvenido(a) - Este servicio le ayudará a saber a cuál tipo de juzgado le corresponde tramitar su proceso de pertenencia en Colombia.");

let respuestaContinuar = prompt("¿Desea realizar un cálculo de competencia judicial? Responda Si / No");
while (respuestaContinuar.toUpperCase() === "SI") {
  alert("Por favor responda las siguientes preguntas:");
 
  avaluo = parseFloat(prompt("¿Cuál es avalúo catastral del inmueble que pretende o el de mayor extensión? Escriba el valor en pesos colombianos. Use números, sin puntos, comas u otros signos")); 
  porcentaje = parseFloat (prompt("¿Cuál es el porcentaje que ocupa el predio que usted pretende en posesión? Escriba un valor del 0 al 100"));
  cuantia = calcularCuantia (avaluo, porcentaje);

// Con cada resultado solicité impresión de los resultados numéricos en la consola para verificar el funcionamiento de la función.

    if (cuantia !== NaN) {
      if (cuantia <= 46400000){
            alert("Su proceso se cataloga de Mínima Cuantía - Le corresponde radicar el proceso en un Juzgado Municipal o de Pequeñas Causas")
            console.log("Avalúo catastral ingresado: $" + avaluo + ". Porcentaje sobre el avalúo:" + porcentaje + "% . Cuantía de la pretensión: $" + cuantia );
          } else if (46400000 < cuantia && cuantia <= 174000000){
            alert("Su proceso se cataloga de Menor Cuantía - Le corresponde radicar el proceso en un Juzgado Municipal");
            console.log("Avalúo catastral ingresado: $" + avaluo + ". Porcentaje sobre el avalúo:" + porcentaje + "% . Cuantía de la pretensión: $" + cuantia ); 
          } else if (174000000 < cuantia){
            alert("Su proceso se cataloga de Mayor Cuantía - Le corresponde radicar el proceso en un Juazgado del Circuito");
            console.log("Avalúo catastral ingresado: $" + avaluo + ". Porcentaje sobre el avalúo:" + porcentaje + "% . Cuantía de la pretensión: $" + cuantia );
          } else {
            alert("No se puede procesar la solicitud"); 
          }
    }
    // Opción para realizar un nuevo cálculo de jurisdicción o terminar.
    respuestaContinuar = prompt("¿Desea realizar otro cálculo de competencia judicial? Responda Si / No"); 
}

alert("Gracias por elegirnos");

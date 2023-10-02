# PreEntrega2ConversYanez-JS
Repositorio de preentrega No. 2 - CODERHOUSE Javascript

// READ FIRST:

** CAMBIOS Y MEJORAS RESPECTO DE PROYECTO DE LA PREENTREGA No. 1 **

1. Se integró una nueva funcionalidad al programa que consiste en decirle al usuario cuántos de los casos ingresados en su consulta corresponden a una de las tres categorías de procesos judiciales (mínima, menor o mayor cuantía)

    Para logarar esto:
    1.1. Se dispuso que la información introducida por el usuario:  
        a. Nombre del caso
        b. La cuantía resultante del cálculo hecho por el programa
        c. Y la denominación jurídica de la cuantía
        Formaran un objeto llamado "caso".
    1.2. Cada uno de estos objetos formará un array llamado "listaCasos" - Uso del método Push para formar el array.
    1.3. Cuando se termina de ingresar la información y de formar el array, los datos se filtran y se forma un array que corresponda a cada categoría (mínima, menor o mayor cuantía).
    1.4. Luego se imprime el resultado de la filtración indicando cuántos casos resultaron de la consulta.

** CALCULADORA PRA USOS JUDICIALES - DEFINICIÓN DE LA COMPETENCIA PARA PROCESOS DE PERTENENCIA EN COLOMBIA AÑO 2023 **

Explicación del programa:
1. El procesos judiciale de pertenencia juzga si alguien puede ser propietario de un inmueble sólo por el hecho de ocuparlo.
2. La "competencia judicial" es definir a cual Juez al que le corresponde decidir el asunto, pues hay muchos tipos de jueces.
3. La forma de definir esta competencia depende del valor del inmueble que se quiere adquirir. 
    En Colombia se le llama "cuantía" y dicho valor es el avalúo catastral del inmueble.
4. Puede ser que no se quiera adquirir la totalidad del inmueble (100%), sino que se se quiera otro porcentaje.
5. Esta calculadora determina el valor de la cuantía según el porcentaje que se pretenda adquirir.
6. El valor puede tener tres categorías: 
                  1. Ser inferior a $46.400.000 COP --> Juzgado Municipal o de Pequeñas Causas
                  2. Estar entre $46.400.000 COP y $174.000.000 COP --> Juzgado Municipal
                 3. Ser mayor a $174.000.000 COP --> Juzgado del Circuito


// Nuevo contexto del proyecto:
// Cálculo de copmpetencia de procesos de pertenencia:
// 1. De varios inmuebles al tiempo porque es en el contexto de una firma de abogados grande.
// 2. Sirve para sacar estadísticas de los procesos (urbano / rural) (cuantía)
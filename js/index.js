//# RandomGame

//## Variables

//- Declaramos una variable vacía que contendrá el número aleatorio.
let luckyNumber;
//- Declaramos una variable que contenga el botón del HTML que va a comprobar el número.
let checkButton = document.querySelector('.section__button');
//- Declaramos una variable que contenga el botón del HTML que va a limpiar el localStorage.
let clearButton = document.querySelector('.borrarDatos');
//- Declaramos una variable que contenga el div del HTML que tendrá el texto de resultado.
let resultItem = document.querySelector('#resultado');
//- Declaramos una variable que contenga el div del HTML que tendrá el texto de estadísticas
let statisticsItem = document.querySelector('#estadisticas');
//- Declaramos una variable que contenga la obtención del valor de "exitosos" almacenado en el localStorage, agregamos un "or" para que se ponga como valor "0" si no existe aún dicha clave.
let successCounter = localStorage.getItem('successCounter') || '0';
//- Declaramos una variable que contenga la obtención del valor de "fallidos" almacenado en el localStorage, agregamos un "or" para que se ponga como valor "0" si no existe aún dicha clave.
let failCounter = localStorage.getItem('failCounter') || '0';

//## Funciones

//### Función generadora del número

//- Declaramos una función que generará el número aleatorio.
//    - Le añade como valor a la variable que va a contener dicho número un random como número entero.

//### Función verificadora de número

//- Declaramos una función que comprobará el número que agreguemos.
//    - Declaramos una variable local que coge el valor del input donde el usuario va a escribir su número.
//    - Ese valor lo transformamos en un número entero (parseInt).
//    - Si el número del usuario es estrictamente igual que el número almacenado en la variable que contiene el número aleatorio:
//        - Aumentamos el valor de la variable que contiene el número de éxitos.
//        - Guardamos el valor en el localStorage con la clave correspondiente al almacenamiento de éxitos.
//        - Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de resultado y agregamos el contenido que queramos. Por ejemplo "¡Muy bien!".
//        - Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de estadísticas para actualizar los valores de éxito y de fallidos.
//        - Llamamos a la función generadora de números para generar un nuevo número aleatorio.
//    - Si no:
//        - Aumentamos el valor de la variable que contiene el número de fallidos.
//        - Guardamos el valor en el localStorage con la clave correspondiente al almacenamiento de fallidos.
//        - Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de resultado y agregamos el contenido que queramos. Por ejemplo "Fallaste".
//        - Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de estadísticas para actualizar los valores de éxito y de fallidos.

//### Función limpiadora de datos

//- Declaramos una función que se encargará de limpiar los datos del localStorage
//    - Usamos el método de localStorage para limpiar los datos.
//    - Utilizamos "location.reload()" para reiniciar la página.

//## Listeners

//### Botón comprobar

//- Creamos un addEventListener para que al hacer click en el botón de comprobar se active la función verificadora de número.

//### Botón limpiar

//- Creamos un addEventListener para que al hacer click en el botón de limpiar se active la función limpiadora de datos.

//## Códigos de inicio

//> [!NOTE]
//> Recuerda que estos códigos se ponen fuera de funciones para que al iniciar la primera vez comiencen a ocurrir cosas. Por ejemplo que aparezcan las estadisticas sin necesidad de darle al botón de "comprobar".

//- Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de estadísticas para actualizar los valores de éxito y de fallidos.
//- Llamamos la función generadora de números para que nos genere el primer número que el usuario debe adivinar.
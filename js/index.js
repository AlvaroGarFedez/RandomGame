//# RandomGame


//## Variables

//- Declaramos una variable vacía que contendrá el número aleatorio.
let randomNumber;
//- Declaramos una variable que contenga el botón del HTML que va a comprobar el número.
let checkButton = document.querySelector('.section__button');
//- Declaramos una variable que contenga el botón del HTML que va a limpiar el localStorage.
let clearButton = document.querySelector('.borrarDatos');
//- Declaramos una variable que contenga el div del HTML que tendrá el texto de resultado.
let resultItem = document.querySelector('#resultado');
//- Declaramos una variable que contenga el div del HTML que tendrá el texto de estadísticas
let statisticsItem = document.querySelector('#estadisticas');
//- Declaramos una variable que contenga la obtención del valor de "exitosos" almacenado en el localStorage, agregamos un "or" para que se ponga como valor "0" si no existe aún dicha clave.
let successCounter = localStorage.getItem('successCounter') || 0;
//- Declaramos una variable que contenga la obtención del valor de "fallidos" almacenado en el localStorage, agregamos un "or" para que se ponga como valor "0" si no existe aún dicha clave.
let failCounter = localStorage.getItem('failCounter') || 0;


//## Funciones

//### Función generadora del número
//- Declaramos una función que generará el número aleatorio.
function generateRandomNumber() {
    //- Le añade como valor a la variable que va a contener dicho número un random como número entero.
    randomNumber = Math.floor(Math.random()*9.99+1);
}

//### Función verificadora de número
//- Declaramos una función que comprobará el número que agreguemos.
function checkNumber() {
    //- Declaramos una variable local que coge el valor del input donde el usuario va a escribir su número.
    let inputValue = document.querySelector('#numeroUsuario').value;
    //- Ese valor lo transformamos en un número entero (parseInt).
    inputValue = parseInt(inputValue);
    //- Si el número del usuario es estrictamente igual que el número almacenado en la variable que contiene el número aleatorio:
    if (inputValue === randomNumber) {
        //- Aumentamos el valor de la variable que contiene el número de éxitos.
        successCounter ++;
        //- Guardamos el valor en el localStorage con la clave correspondiente al almacenamiento de éxitos.
        localStorage.setItem('successCounter', successCounter);
        //- Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de resultado y agregamos el contenido que queramos. Por ejemplo "¡Muy bien!".
        resultItem.innerHTML = `¡Bingo! El número secreto era el ${randomNumber}.`;
        //- Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de estadísticas para actualizar los valores de éxito y de fallidos.
        statisticsItem.innerHTML = `Éxitos: ${successCounter} - Fallos: ${failCounter}`;
        //- Llamamos a la función generadora de números para generar un nuevo número aleatorio.
        generateRandomNumber();
    //- Si no:
    } else {
        //- Aumentamos el valor de la variable que contiene el número de fallidos.
        failCounter ++;
        //- Guardamos el valor en el localStorage con la clave correspondiente al almacenamiento de fallidos.
        localStorage.setItem('failCounter', failCounter);
        //- Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de resultado y agregamos el contenido que queramos. Por ejemplo "Fallaste".
        resultItem.innerHTML = `No, el ${inputValue} no era el número. Prueba otra vez.`;
        //- Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de estadísticas para actualizar los valores de éxito y de fallidos.
        statisticsItem.innerHTML = `Éxitos: ${successCounter} - Fallos: ${failCounter}`;
    }
    // Esto es para resetear el campo cuando el número no es el correcto.
    document.querySelector('#numeroUsuario').value = '';
}

//### Función limpiadora de datos
//- Declaramos una función que se encargará de limpiar los datos del localStorage
function clearLocalStorage() {
    //- Usamos el método de localStorage para limpiar los datos.
    localStorage.clear();
    //- Utilizamos "location.reload()" para reiniciar la página.
    location.reload();
}


//## Listeners

//### Botón comprobar
//- Creamos un addEventListener para que al hacer click en el botón de comprobar se active la función verificadora de número.
checkButton.addEventListener('click', checkNumber);

//### Botón limpiar

//- Creamos un addEventListener para que al hacer click en el botón de limpiar se active la función limpiadora de datos.
clearButton.addEventListener('click', clearLocalStorage);

//## Códigos de inicio

//> [!NOTE]
//> Recuerda que estos códigos se ponen fuera de funciones para que al iniciar la primera vez comiencen a ocurrir cosas. Por ejemplo que aparezcan las estadisticas sin necesidad de darle al botón de "comprobar".

//- Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de estadísticas para actualizar los valores de éxito y de fallidos.
statisticsItem.innerHTML = `Éxitos: ${successCounter} - Fallos: ${failCounter}`;
//- Llamamos la función generadora de números para que nos genere el primer número que el usuario debe adivinar.
generateRandomNumber();
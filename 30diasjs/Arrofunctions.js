/* funcion sin argumeto */
const saludar = () => {
    console.log ('Hola! ');
}

/* funcion con argumentos */

const doble = (numero) => {
    return numero * 2;
}

/* función con varios argumentos */
const sumar = (a,b) => a + b;


/* funcion con una sola linea de codigo */

const esMayorDeEdad = edad  => edad >= 18;

/* funcion anidada dentro de otra función */

const sumaYResta = (a,b) =>{
    const suma = a + b;
    const resta = a - b;
    return [suma,resta];
}






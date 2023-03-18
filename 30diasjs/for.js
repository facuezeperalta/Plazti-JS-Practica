/* for (var i = 0; i< estudiantes.length;i++){
    saludarEstudiantes(estudiantes[i]);
} */



var estudiantes = ['facundo','ezequiel','Roberto','Carlos'];

function saludarEstudiantes(estudiante){
    console.log(`Hola! ${estudiante}, que tengas un lindo día.`)
}

for(let estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

/* loop for in  */

const user = {
    name: 'Facundo',
    surname : 'Peralta',
    age : 27,
    profesion : 'Fotografo y estudiante de programación'
}

for (let valor in user) {
    console.log(user[valor])
}

/* ciclo while */

var w = 0;
while (w < 100){
    console.log(w);
    console.log('-----');
    w ++;
}


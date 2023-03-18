const curso = {
    nombre : '30 días de JS',
    duracion: '20 horas',
    clases: 100,
    detalles: {
        tecnologias : ['JS','Node','Web browser'],
        calificacion : 5,
    },
    comentarios : ['Excelente curso!','JavaScript no es lo mismo que Java','Hola']
};


let carro = {
    marca : 'Toyota',
    encender : function (){
        console.log('el carro se ha encendido');
    }
};

carro.encender();
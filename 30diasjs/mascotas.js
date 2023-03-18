function getPetExerciseInfo(type,age){
    switch (type){
        case 'perro':
            if (age >= 1 && age <= 7 ){
                return console.log('Los perros a esta edad necesitan caminatas diarias y sesiones de juego');
            }
            else if (age > 7){
                return console.log('Los perros viejos necesitan caminatas más cortas');
            }
            else if(age < 1){
                return console.log('Los cachorros necesitan pequeñas y frecuentes sesiones de juego');
            }  else{return console.log('Tipo de dato no valido') }
            break;
        case 'gato':
            if (age < 1){
                return console.log('Los gatitos necesitan frecuentes sesiones de juego');
            }
            else if (age > 1 && age <= 7){
                
                return console.log('Los gatos a esta edad necesitan jugar diariamente');
            }
            else if(age > 7){
               return console.log('Los gatos viejos necesitan sesiones de juego más cortas')
            }else{console.log('Tipo de dato no valido')}
            break;
        case 'ave': 
            if(age< 1){
                return console.log('Las aves jóvenes necesitan mucho espacio para volar');
            }
            else if(age >= 1 && age <= 7){
               return console.log('Las aves necesitan jugar diariamente y un lugar para volar')
            }
            else if(age > 7){
               return console.log('Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar');
            }
           
        default: return console.log('No tenemos infomracion para el tipo de animal inrgreado consulte a su veternicarion de confianza');
        
     }
}

/*   case 'gato':
            if (age < 1){
                console.log('Los gatitos necesitan frecuentes sesiones de juego');
            }
            else if (age > 1 && age <= 7){
                console.log('Los gatos a esta edad necesitan jugar diariamente');
            }
            else if(age > 7){
                console.log('Los gatos viejos necesitan sesiones de juego más cortas')';'
            }else{console.log('Tipo de dato no valido')}
            break;
        
        case 'ave': 
            if(age< 1){
                console.log('Las aves jóvenes necesitan mucho espacio para volar');
            }
            else if(age >= 1 && age <= 7){
                console.log('Las aves necesitan jugar diariamente y un lugar para volar')
            }
            else if(age > 7){
                console.log('Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar');
            }else(console.log('Tipo de dato no valido'));
            break;
        default: console.log('No tenemos infomracion para el tipo de animal inrgreado consulte a su veternicarion de confianza'); */
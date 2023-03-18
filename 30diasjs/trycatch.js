try{
    const num = 51;
    if(num > 50){
        throw new Error ('El numero es mayor a 50');
    }
} catch(error){
    console.error(error.message);
}
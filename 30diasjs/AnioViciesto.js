function isLeapYear(year){
    if(year % 4 === 0 && year % 100 === 1){
        return true;
        /* console.log('Es un año biciesto') */;
    }else if(year % 100 === 0 && year %400 ===0){
        return true;
        /* console.log('Es un año biciesto'); */
    }else {return false;}
}
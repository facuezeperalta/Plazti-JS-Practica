function add (a,b){
    return a + b;
}

const operation = add;

function makeOperation (operation,num1,num2){
    return operation(num1,num2);
}

console.log(makeOperation(operation,5,2));


const numbers =  [1,2,3,4,5,6,7,8];

const doubles = numbers.map(function(number){
    return number * 2;
});

console.log(doubles);


const arr = [1, 2, 3, 4, 5]; 

const result = arr.map(num => num * 2).filter(num => num > 5); 

console.log(result);
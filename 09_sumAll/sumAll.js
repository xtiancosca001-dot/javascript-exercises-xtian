const sumAll = function(num1, num2) {
    let sum = 0;
    const isInteger = Number.isInteger(num1) && Number.isInteger(num2);
    const isNonNegative = num1 >= 0 && num2 >= 0;
    const isNumber = typeof num1 === 'number' && typeof num2 === 'number';

    // Program will not proceed 
    if(!isNumber || !isInteger  || !isNonNegative ) {
        return 'ERROR';
    }

    let number1, number2;
    if(num1 < num2) {
        number1 = num1; number2 = num2;
    } else if(num1 > num2) {
        number1 = num2; number2 = num1;
    } 

    for(let i = number1; i <= number2; i++) {
        sum += i;
    }

    return sum;
    
};


// Do not edit below this line
module.exports = sumAll;

const fibonacci = function (number) {
    number = Number(number);
    if (number < 0) { 
        return "OOPS"; 
    } else if (number === 0) { 
        return 0;
    } else if (number === 1 || number === 2) { 
        return 1 
    } else {
        let fib = [1, 1];
        for (let i = 2; i < number; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        return fib[number - 1];
    };
};

/* 
    I know the solution is:
    function fibonacci(num) {
        return (num === 1 || num === 2) ? 1 : (fibonacci(num-1) + fibonacci(num-2));
    }
*/

// Do not edit below this line
module.exports = fibonacci;

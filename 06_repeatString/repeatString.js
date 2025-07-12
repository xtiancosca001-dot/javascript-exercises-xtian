const repeatString = function(string, num) {
    if(num < 0) 
        return 'ERROR';
    
    let newString = [];
    for(let i = 1; i <= num; i++) {
        newString.push(string);
    }
    return newString.join('');
};

// Do not edit below this line
module.exports = repeatString;

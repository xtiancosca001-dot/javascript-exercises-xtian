const reverseString = function(string) {
    return string.split('').reduceRight((acc,letter) => acc+letter ,'');
};

// Do not edit below this line
module.exports = reverseString;

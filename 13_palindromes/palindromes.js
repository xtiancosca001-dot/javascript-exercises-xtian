const palindromes = function (str) {
    const charIsLetter = char=>char!==' '&&char!=='!'&&char!=='.'&&char!==',';
    const source = str.split('')
                       .filter(char=>charIsLetter(char))
                       .join('').toLowerCase();
    const reversedString = source.split('')
                                 .reverse()
                                 .join('');
    console.log(reversedString);
    return source === reversedString;
};

// Do not edit below this line
module.exports = palindromes;

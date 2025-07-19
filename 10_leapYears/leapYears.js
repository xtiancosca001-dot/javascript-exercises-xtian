const leapYears = function(year) {
    const isFactorOfFour = year % 4 === 0;
    const isFactorOfOneHundred = year % 100 === 0;
    const isFactorOfFourHundred = year % 400 === 0;

    if(isFactorOfFourHundred) {
        return true;
    } else if(isFactorOfOneHundred) {
        return false;
    } else if(isFactorOfFour){
        return true;
    } 
    return false;

    // return isFactorOfFour && (!isFactorOfOneHundred || isFactorOfFourHundred);
};

// Do not edit below this line

module.exports = leapYears;

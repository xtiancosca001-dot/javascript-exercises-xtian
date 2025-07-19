const findTheOldest = function (peopleArray) {
    const yearToday = (new Date()).getFullYear();
    return peopleArray.sort((b, a) => ((a.yearOfDeath || yearToday) - a.yearOfBirth) -
        ((b.yearOfDeath || yearToday) - b.yearOfBirth))[0];
};

// Do not edit below this line
module.exports = findTheOldest;

const convertToCelsius = function(degressF) {
  const degreesC = (5 / 9) * (degressF - 32)
  return Number( degreesC.toFixed(1) );
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

var _ = require("lodash");

var worker = function(towns) {
  return _.forEach(towns, function(city) {
    if (city.population > 1.00) {
      city.size = "big";
    } else if (city.population > .50) {
      city.size = "med";
    } else {
      city.size = "small";
    }
  });
};

module.exports = worker;

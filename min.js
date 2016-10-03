var _ = require("lodash");

var worker = function(towns) {
        // do work; return stuff
    var towns_by_temp = { hot: [],
                          warm: [] };

    function getTemp (temperature) {
      if(temperature > 19) {
        return true;
      } else {
        return false;
      }
    };

    _.forEach(towns, function(town, name) {
      if (_.every(town, getTemp)) {
        towns_by_temp.hot.push(name);
      } else if (_.some(town, getTemp)) {
        towns_by_temp.warm.push(name);
      }
    });

    return towns_by_temp;

};

module.exports = worker;

var _ = require("lodash");

var worker = function(list) {
    return _.chain(list)
            .map(function(word){
              return word.toUpperCase() + 'CHAINED';
            }).sortBy()
};

module.exports = worker;

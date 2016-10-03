var _ = require("lodash");

var worker = function(initial_freelancers) {

  var average = function(freelancers) {
    total = _.reduce(freelancers, function(sum, freelancer){
      return sum + freelancer.income
    }, 0)
    return (total / freelancers.length)
  };

  var underperform = function(freelancers) {
    return _.filter(freelancers, function(freelancer){
      return freelancer.income <= average(freelancers);
    })
  };

  var overperform = function(freelancers) {
    return _.filter(freelancers, function(freelancer){
      return freelancer.income <= average(initial_freelancers);
    })
  };

  var overperform = function(freelancers) {
    return _.filter(freelancers, function(freelancer){
      return freelancer.income > average(initial_freelancers);
    })
  };

  var sorted = function(freelancers) {
    return _.sortBy(freelancers, 'income')
  }


  return { average: average(initial_freelancers),
           underperform: sorted(underperform(initial_freelancers)),
           overperform: sorted(overperform(initial_freelancers))}
};

module.exports = worker;

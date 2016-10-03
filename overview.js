var _ = require("lodash");

var worker = function(orders) {
  var result = [];

  var grouped = _.groupBy(orders, 'article');

  _.forEach(grouped, function (item, name) {
    var total = _.reduce(item, function (sum, item) {
      return sum + item.quantity;
    }, 0);

    result.push({ article: parseInt(name), total_orders: total });
  })

  return _.sortBy(result, 'total_orders').reverse();
};

module.exports = worker;

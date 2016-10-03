var _ = require("lodash");

var worker = function(comments) {
  var allCounted = []

  var byUser =  _.groupBy(comments, 'username')

  var commentCount = _.forEach(byUser, function(comments, user) {
    allCounted.push({ username: user,
                     comment_count: _.size(comments)})
  })

  return _.orderBy(allCounted, 'comment_count', 'desc');
};

module.exports = worker;

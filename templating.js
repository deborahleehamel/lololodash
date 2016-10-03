var _ = require("lodash");

  var worker = function (user) {

    var mytemplate = "Hello <%= name %> (logins: <%= login.length %>)";

    return _.template(mytemplate)(user);
  };

    module.exports = worker;

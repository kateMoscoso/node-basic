const Application = require("../application");
const User = require("../user");
var bc = require("bcrypt-nodejs");

var RegResult = function () {
  var result = {
    success: false,
    message: null,
    user: null,
  };

  return result;
};

var validateInputs = function (app) {
  if (!app.email || !app.password) {
    app.setInvalid("Email and password are required");
  } else if (app.password !== app.confirm) {
    app.setInvalid("notauth");
  } else {
    app.validate();
  }
};

exports.applyForMembership = function (args) {
  var regResult = new RegResult();
  var app = new Application(args);

  validateInputs(app)

  if (app.isValid()) {
    ///2user.hashedPassword = bc.hashSync(app.password);
    regResult.success = true;
    regResult.message = "Welcome!";

    regResult.user = new User(args);
  }

  return regResult;
};

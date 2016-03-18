/**
 * Created by ronnygeo on 3/17/16.
 */

module.exports = function(app) {

    // pass db and mongoose reference to model
    var userModel    = require("./models/user.model.js")();
    var formModel   = require("./models/form.model.js")();

    var userService  = require("./services/user.service.server.js") (app, formModel, userModel);
    var formService = require("./services/form.service.server.js")(app, formModel, userModel);
    var fieldService = require("./services/field.service.server.js")(app, formModel, userModel);
};
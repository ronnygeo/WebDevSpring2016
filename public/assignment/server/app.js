/**
 * Created by ronnygeo on 3/17/16.
 */

module.exports = function(app) {

    // pass db and mongoose reference to model
    var userModel    = require("models/user.model.server.js")(db);
    var formModel   = require("models/form.model.server.js")(db);

    var userService  = require("services/user.service.server.js") (app, formModel, userModel);
    var formService = require("services/form.service.server.js")(app, formModel, userModel);
    var fieldService = requrire("services/field.service.server.js")(app, formModel, userModel);
};
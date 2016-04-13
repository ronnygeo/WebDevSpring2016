module.exports = function(app, mongoose, passport) {
    var LocalStrategy    = require('passport-local').Strategy;


    // pass db and mongoose reference to model
    var userModel = require("./models/user.model.js")(mongoose);
    var formModel = require("./models/form.model.js")(mongoose);
    var fieldModel = require("./models/field.model.server.js")(mongoose);

    var userService = require("./services/user.service.server.js")(app, userModel, passport);
    var formService = require("./services/form.service.server.js")(app, formModel);
    var fieldService = require("./services/field.service.server.js")(app, fieldModel);
};
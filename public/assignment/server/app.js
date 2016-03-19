module.exports = function(app) {
    var uuid = require('node-uuid');

    // pass db and mongoose reference to model
    var userModel = require("./models/user.model.js")(uuid);
    var formModel = require("./models/form.model.js")(uuid);

    var userService = require("./services/user.service.server.js")(app, userModel);
    var formService = require("./services/form.service.server.js")(app, formModel);
    var fieldService = require("./services/field.service.server.js")(app, formModel);
};
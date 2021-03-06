/**
 * Created by ronnygeo on 4/1/16.
 */

module.exports = function (mongoose) {
    var FieldModel = require('./field.schema.server.js')(mongoose);
    // use mongoose to declare a user schema
    var FormSchema = mongoose.Schema({
        title: {type: String, default: "New Form"},
        userId: String,
        fields: [FieldModel],
        created: {type: Date, default: Date.now},
        updated: {type: Date, default: Date.now}
    }, {collection: 'form'});

    return FormSchema;
}
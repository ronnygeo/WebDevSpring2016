/**
 * Created by ronnygeo on 4/1/16.
 */
module.exports = function (mongoose) {
    // use mongoose to declare a user schema
    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        emails: [String],
        roles: [String],
        // imdb ids of movies this user likes
        phones: [String]
    }, {collection: 'user'});
    return UserSchema;
}
/**
 * Created by ronnygeo on 3/17/16.
 */

(function () {
    module.exports = function (app) {

        // POST /api/assignment/user
        // creates a new user embedded in the body of the request, and responds with an array of all users

        app.post();
        // GET /api/assignment/user
        // responds with an array of all users
        app.get();

        // GET /api/assignment/user/:id
        // responds with a single user whose id property is equal to the id path parameter
        app.get();

        // GET /api/assignment/user?username=username
        //     responds with a single user whose username property is equal to the username path parameter
        app.get();

        // GET /api/assignment/user?username=alice&password=wonderland
        //     responds with a single user whose username property is equal to the username path parameter and its password is equal to the password path parameter
        app.get();

        // PUT /api/assignment/user/:id
        // updates an existing user whose id property is equal to the id path parameter. The new properties are set to the values in the user object embedded in the HTTP request. Responds with an array of all users
        app.put();

        // DELETE /api/assignment/user/:id
        // removes an existing user whose id property is equal to the id path parameter. Responds with an array of all users
        app.delete();
        
    }

})();
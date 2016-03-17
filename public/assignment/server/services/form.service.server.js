/**
 * Created by ronnygeo on 3/17/16.
 */

(function () {
    module.exports = function (app) {

        // GET /api/assignment/user/:userId/form
        // returns an array of forms belonging to a user whose id is equal to the userId path parameter
        // GET /api/assignment/form/:formId
        // returns a form object whose id is equal to the formId path parameter
        // DELETE /api/assignment/form/:formId
        // removes a form object whose id is equal to the formId path parameter
        // POST /api/assignment/user/:userId/form
        // creates a new form whose properties are the same as the form object embedded in the HTTP request's body and the form belongs to a user whose id is equal to the userId path parameter. The form object's id is initially null since it is a new record. The id of the new form should be set dynamically using Node.js guid or node-uuid libraries. These will eventually be set by the database when they are inserted into a collection
        // PUT /api/assignment/form/:formId
        // updates a form object whose id is equal to the formId path parameter so that its properties are the same as the property values of the form object embedded in the request's body

    }

})();
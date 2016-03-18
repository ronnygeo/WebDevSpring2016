/**
 * Created by ronnygeo on 3/17/16.
 */

module.exports = function (app, formModel) {

    // GET /api/assignment/user/:userId/form
    // returns an array of forms belonging to a user whose id is equal to the userId path parameter
    app.get('/api/assignment/user/:userId/form', getFormsByUserId);

    // GET /api/assignment/form/:formId
    // returns a form object whose id is equal to the formId path parameter
    app.get('/api/assignment/form/:formId', getFormById);

    // DELETE /api/assignment/form/:formId
    // removes a form object whose id is equal to the formId path parameter
    app.delete('/api/assignment/form/:formId', deleteForm);

    // POST /api/assignment/user/:userId/form
    // creates a new form whose properties are the same as the form object embedded in the HTTP request's body and the form belongs to a user whose id is equal to the userId path parameter. The form object's id is initially null since it is a new record. The id of the new form should be set dynamically using Node.js guid or node-uuid libraries. These will eventually be set by the database when they are inserted into a collection
    app.post('/api/assignment/user/:userId/form', createForm);

    // PUT /api/assignment/form/:formId
    // updates a form object whose id is equal to the formId path parameter so that its properties are the same as the property values of the form object embedded in the request's body
    app.put('/api/assignment/form/:formId', updateForm);

    function getFormsByUserId(req, res) {
        var userId = req.params.userId;
        res.send(formModel.getFormsByUserId(userId));
    }

    function getFormById(req, res) {
        var id = req.params.formId;
        res.send(formModel.findById(id));
    }

    function deleteForm(req, res) {
        var id = req.params.formId;
        res.send(formModel.delete(id));
    }

    function createForm(req, res) {
        var userId = req.params.userId;
        var form = req.body;
        form.userId = userId;
        res.send(formModel.create(form));
    }

    function updateForm(req, res) {
        var id = req.params.formId;
        var form = req.body;
        res.send(formModel.update(id, form));
    }
};
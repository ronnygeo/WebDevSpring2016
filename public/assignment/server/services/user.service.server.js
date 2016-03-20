module.exports = function (app, userModel) {

    // POST /api/assignment/user
    // creates a new user embedded in the body of the request, and responds with an array of all users
    app.post('/api/assignment/user', createUser);

    // GET /api/assignment/user
    // responds with an array of all users
    app.get('/api/assignment/user', getUsers);

    // GET /api/assignment/user/:id
    // responds with a single user whose id property is equal to the id path parameter
    app.get('/api/assignment/user/:id', getUser);

    // // GET /api/assignment/user?username=username
    // //     responds with a single user whose username property is equal to the username path parameter
    // app.get('/api/assignment/user?username=username', getUserByUsername);
    //
    // // GET /api/assignment/user?username=alice&password=wonderland
    // //     responds with a single user whose username property is equal to the username path parameter and its password is equal to the password path parameter
    // app.get('/api/assignment/user?username=alice&password=wonderland', getUserByCredentials);

    // PUT /api/assignment/user/:id
    // updates an existing user whose id property is equal to the id path parameter. The new properties are set to the values in the user object embedded in the HTTP request. Responds with an array of all users
    app.put('/api/assignment/user/:id', updateUser);

    // DELETE /api/assignment/user/:id
    // removes an existing user whose id property is equal to the id path parameter. Responds with an array of all users
    app['delete']('/api/assignment/user/:id', deleteUser);

    function createUser(req, res) {
        var user = req.body;
        res.json(userModel.create(user));
    }

    function getUsers(req, res) {
        if (req.query.username && req.query.password) {
            getUserByCredentials(req, res);
        } else if (req.query.username) {
            getUserByUsername(req, res);
        } else {
        res.json(userModel.findAll());
        }
    }

    function getUser(req, res) {
        var id = req.params.id;
        res.json(userModel.findById(id));
    }

    function getUserByUsername(req, res) {
        var username = req.query.username;
        res.json(userModel.findUserByUsername(username));
    }

    function getUserByCredentials(req, res) {
        var username = req.query.username;
        var password = req.query.password;
        res.json(userModel.findUserByCredentials({username: username, password: password}));
    }

    function updateUser(req, res) {
        var id = req.params.id;
        var user = req.body;
        res.json(userModel.update(id, user));
    }

    function deleteUser(req, res) {
        var id = req.params.id;
        res.json(userModel.delete(id));
    }

};


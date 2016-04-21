module.exports = function (app, userModel, passport) {
    var LocalStrategy    = require('passport-local').Strategy;

    passport.use(new LocalStrategy(localStrategy));
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    // POST /api/assignment/user
    // creates a new user embedded in the body of the request, and responds with an array of all users
    app.post('/api/assignment/user', createUser);

    // GET /api/assignment/user
    // responds with an array of all users
    app.get('/api/assignment/user', passport.authenticate('local'),getUsers);

    // GET /api/assignment/user/:id
    // responds with a single user whose id property is equal to the id path parameter
    app.get('/api/assignment/user/:id', passport.authenticate('local'), getUser);

    // // GET /api/assignment/user?username=username
    // //     responds with a single user whose username property is equal to the username path parameter
    app.get('/api/assignment/user?username=username', getUserByUsername);
    //
    // // GET /api/assignment/user?username=alice&password=wonderland
    // //     responds with a single user whose username property is equal to the username path parameter and its password is equal to the password path parameter
    app.get('/api/assignment/user?username=alice&password=wonderland', getUserByCredentials);

    //Logout
    app.post('/api/assignment/logout', logout);

    //Login
    app.post('/api/assignment/login', passport.authenticate('local'), login);

    //Loggedin User
    app.get('/api/assignment/loggedIn', loggedIn);

    //Register
    app.post('/api/assignment/register', register)

    // PUT /api/assignment/user/:id
    // updates an existing user whose id property is equal to the id path parameter. The new properties are set to the values in the user object embedded in the HTTP request. Responds with an array of all users
    app.put('/api/assignment/user/:id', updateUser);

    // removes an existing user whose id property is equal to the id path parameter. Responds with an array of all users
    //DELETE /api/assignment/admin/user/:id - used by admins to remove a user whose _id is userId
    app['delete']('/api/assignment/admin/user/:id', deleteUser);


    //POST /api/assignment/admin/user - used by admins to create new users. New user is in the body
    app.post("/api/assignment/admin/user", adminCreateUser);

    //GET /api/assignment/admin/user - used by admins to retrieve all users
    app.get("/api/assignment/admin/user", adminListUsers);

    //GET /api/assignment/admin/user/:userId - used by admins to retrieve a single user whose _id is userId
    app.get("/api/assignment/admin/user/:id", adminFindUser)

    //PUT /api/assignment/admin/user/:userId - used by admins to update a user whose _id is userId. New user properties are in the body
    app.put("/api/assignment/admin/user/:id", adminUpdateUser);

    function createUser(req, res) {
        var user = req.body;
        userModel.create(user).then(function (data) {
            res.json(data);
        });
    }

    function adminCreateUser(req, res) {
        if (isAdmin(req.user)) {
            var user = req.body;
            userModel.create(user).then(function (data) {
                res.json(data);
            });
        } else {
            res.status(403).send(403);
        }
    }

    function adminListUsers(req, res) {
        // console.log(req.user);
        if (isAdmin(req.user)) {
            userModel.findAll().then(function (data) {
                res.json(data);
            });
        } else {
            res.status(403).send(403);
        }
    }

    function adminUpdateUser(req, res) {
        if (isAdmin(req.user)) {
            var id = req.params.id;
            var user = req.body;
            delete user._id;
            userModel.update(id, user).then(function(data) {
                res.json(data);
            });
        } else {
            res.status(403).send(403);
        }
    }

    function adminFindUser(req, res) {
        if (isAdmin(req.user)) {
            var id = req.params.id;

            userModel.findById(id).then(function (data) {
                res.json(data);
            });
        } else {
            res.status(403).send(403);
        }
    }

    function getUser(req, res) {
        var id = req.params.id;
        userModel.findById(id).then(function (data) {
            res.json(data);
        });
    }

    function getUsers(req, res) {
        if (req.query.username && req.query.password) {
            getUserByCredentials(req, res);
        } else if (req.query.username) {
            getUserByUsername(req, res);
        }
    }

    function getUserByUsername(req, res) {
        var username = req.query.username;
        userModel.findUserByUsername(username).then(function (data) {res.json(data);});
    }

    function getUserByCredentials(req, res) {
        var username = req.query.username;
        var password = req.query.password;
        userModel.findUserByCredentials({username: username, password: password}).then(function(data) {res.json(data);
        });
    }

    function updateUser(req, res) {
            var id = req.params.id;
            var user = req.body;
            delete user._id;
            userModel.update(id, user).then(function (data) {
                res.json(data);
            });
    }

    function deleteUser(req, res) {
        if(isAdmin(req.user)) {
            var id = req.params.id;
            userModel.delete(id).then(function (data) {res.json();});
        }
    }

    function loggedIn(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }

    function logout(req, res) {
        req.logOut();
        res.send(200);
    }

    function login(req, res) {
        var user = req.user;
        res.json(user);
    }

    function register(req, res) {
        var newUser = req.body;
        newUser.roles = ['student'];
        userModel
            .findUserByUsername(newUser.username)
            .then(
                function(user){
                    if(user) {
                        res.json(null);
                    } else {
                        return userModel.create(newUser);
                    }
                },
                function(err){
                    res.status(400).send(err);
                }
            )
            .then(
                function(user){
                    if(user){
                        req.login(user, function(err) {
                            if(err) {
                                res.status(400).send(err);
                            } else {
                                res.json(user);
                            }
                        });
                    }
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }


    function localStrategy(username, password, done) {
        userModel
            .findUserByCredentials({username: username, password: password})
            .then(
                function(user) {
                    if (!user) { return done(null, false); }
                    return done(null, user);
                },
                function(err) {
                    if (err) { return done(err); }
                }
            );
    }

    function isAdmin(user) {
        if(user.roles.indexOf("admin") !== -1) {
            return true
        }
        return false;
    }

    function serializeUser(user, done) {
        done(null, user);
    }

    function deserializeUser(user, done) {
        userModel
            .findById(user._id)
            .then(
                function(user){
                    done(null, user);
                },
                function(err){
                    done(err, null);
                }
            );
    }
};


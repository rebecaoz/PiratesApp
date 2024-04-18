const UserController = require("../controllers/user.controller");

module.exports = app => {   
    app.post("/api/register", UserController.createUser);
    app.post("/api/login", UserController.loginUser);
};
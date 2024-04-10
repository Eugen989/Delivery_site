"use strict"

module.exports = (app) => {
    const indexController = require("../controller/indexController");
    const usersController = require("../controller/usersController")

    app.route("/").get(indexController.index);
    app.route("/api/users").get(usersController.getAllUsers)
    app.route("/api/auth/signUp").post(usersController.signUp)
}
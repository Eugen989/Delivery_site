"use strict"

module.exports = (app) => {
    const indexController = require("../controller/indexController");
    const usersController = require("../controller/usersController")

    app.route("/ap").get(indexController.pushFront)
    //app.route("/").get(indexController.index);
    app.route("/api/users").get(usersController.getAllUsers)
    app.route("/api/buyers").get(usersController.getAllBuyers)
    app.route("/api/salesmans").get(usersController.getAllSalesmans)
    app.route("/api/auth/signUp").post(usersController.signUp)
    app.route("/api/auth/signIn").get(usersController.signIn)
}
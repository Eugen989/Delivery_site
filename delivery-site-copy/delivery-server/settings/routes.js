"use strict"

module.exports = (app) => {
    const indexController = require("../controller/indexController");
    const usersController = require("../controller/usersController")
    const productController = require("../controller/productController");

    app.route("/ap").get(indexController.pushFront);
    //app.route("/").get(indexController.index);
    app.route("/api/users").get(usersController.getAllUsers);
    app.route("/api/buyers").get(usersController.getAllBuyers);
    app.route("/api/salesmans").get(usersController.getAllSalesmans);
    app.route("/api/auth/signUp").post(usersController.signUp);
    app.route("/api/auth/signIn").get(usersController.signIn);

    app.route("/api/product/createWarehouse").post(productController.createWarehouse);
    app.route("/api/product/createPickUpPoint").post(productController.createPickUpPoint);
    app.route("/api/product/createProduct").post(productController.createProduct);
    app.route("/api/product/createCheque").post(productController.createCheque);
    app.route("/api/product/getWarehouse").get(productController.getWarehouse);
    app.route("/api/product/getPickUpPoint").get(productController.getPickUpPoint);
    app.route("/api/product/getProduct").get(productController.getProduct);
    app.route("/api/product/getAllProducts").get(productController.getAllProducts);
    app.route("/api/product/getCheque").get(productController.getCheque);
}
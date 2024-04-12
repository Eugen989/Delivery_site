"use strict"

const response = require("../response");
const db = require("../settings/db");
const config = require("../config");

exports.createWarehouse = (req, res) => {
    console.log(req.body);
    let sql = "INSERT INTO `warehouse`(`name`, `address`, `x`, `y`) VALUES('" + req.body.name + "', '" + req.body.address +"', " + req.body.x +", " + req.body.y +");";
    db.query(sql, (error, rows, fields) => {
        if(error) {
            console.log("Ошибка создания склада - 400");
            response.status(400, {message: "Ошибка создания склада - 400"}, res);
        }
        else {
            console.log("Успешное создание склада");
            response.status(200, {message: "Склад успешно создался"}, res);
        }
    });
}

exports.createPickUpPoint = (req, res) => {
    console.log(req.body);
    let sql = "INSERT INTO `pick-up_point`(`name`, `address`, `x`, `y`) VALUES('" + req.body.name + "', '" + req.body.address +"', " + req.body.x +", " + req.body.y +");";
    db.query(sql, (error, rows, fields) => {
        if(error) {
            console.log("Ошибка создания склада - 400");
            response.status(400, {message: "Ошибка точки сбыта - 400"}, res);
        }
        else {
            console.log("Успешное создание склада");
            response.status(200, {message: "Точка сбыта создалась"}, res);
        }
    });
}

exports.createProduct = (req, res) => {
    console.log(req.body);
    let sql = "INSERT INTO `product`(`name`, `id_salesman`, `id_warehouse`, `quantity_of_product`, `price`, `proportions`, `weight`, `description`) VALUES('" 
    + req.body.name +"', " + req.body.id_salesman + ", " + req.body.id_warehouse +", " + req.body.quantity_of_product + ", " + req.body.price + ", " + req.body.proportions + 
    ", " + req.body.weight + ", '" + req.body.description + "');";
    db.query(sql, (error, rows, fields) => {
        if(error) {
            console.log("Ошибка создания продукта - 400");
            response.status(400, {message: "Ошибка создания продукта - 400"}, res);
        }
        else {
            console.log("Успешное создание продутка");
            response.status(200, {message: "Успешное создание продутка"}, res);
        }
    });
}

exports.createCheque = (req, res) => {
    console.log(req.body);
    let sql = "INSERT INTO `cheque`(`id_product`, `id_salesman`, `date`, `id_buyer`, `tax`) VALUES(" + req.body.id_product + " , " + req.body.id_salesman + 
    " , \"" + req.body.date + "\", " + req.body.id_buyer + ", " + req.body.tax + ");";
    console.log(sql);
    db.query(sql, (error, rows, fields) => {
        if(error) {
            console.log("Ошибка создания склада - 400");
            response.status(400, {message: "Ошибка чека - 400"}, res);
        }
        else {
            console.log("Успешное создание склада");
            response.status(200, {message: "Чек создался"}, res);
        }
    });
}



exports.getWarehouse = (req, res) => {
    console.log(req.body);
    let sql = "INSERT INTO `cheque`(`id_product`, `id_salesman`, `date`, `id_buyer`, `tax`) VALUES(" + req.body.id_product + " , " + req.body.id_salesman + 
    " , \"" + req.body.date + "\", " + req.body.id_buyer + ", " + req.body.tax + ");";
    db.query(sql, (error, rows, fields) => {
        if(error) {
            console.log("Ошибка создания склада - 400");
            response.status(400, {message: "Ошибка чека - 400"}, res);
        }
        else {
            console.log("Успешное создание склада");
            response.status(200, {message: "Чек создался"}, res);
        }
    });
}

exports.getPickUpPoint = (req, res) => {
    console.log(req.body);
    let sql = "INSERT INTO `cheque`(`id_product`, `id_salesman`, `date`, `id_buyer`, `tax`) VALUES(" + req.body.id_product + " , " + req.body.id_salesman + 
    " , \"" + req.body.date + "\", " + req.body.id_buyer + ", " + req.body.tax + ");";
    db.query(sql, (error, rows, fields) => {
        if(error) {
            console.log("Ошибка создания склада - 400");
            response.status(400, {message: "Ошибка чека - 400"}, res);
        }
        else {
            console.log("Успешное создание склада");
            response.status(200, {message: "Чек создался"}, res);
        }
    });
}

exports.getProduct = (req, res) => {
    console.log(req.body);
    let sql = "INSERT INTO `cheque`(`id_product`, `id_salesman`, `date`, `id_buyer`, `tax`) VALUES(" + req.body.id_product + " , " + req.body.id_salesman + 
    " , \"" + req.body.date + "\", " + req.body.id_buyer + ", " + req.body.tax + ");";
    db.query(sql, (error, rows, fields) => {
        if(error) {
            console.log("Ошибка создания склада - 400");
            response.status(400, {message: "Ошибка чека - 400"}, res);
        }
        else {
            console.log("Успешное создание склада");
            response.status(200, {message: "Чек создался"}, res);
        }
    });
}

exports.getCheque = (req, res) => {
    console.log(req.body);
    let sql = "INSERT INTO `cheque`(`id_product`, `id_salesman`, `date`, `id_buyer`, `tax`) VALUES(" + req.body.id_product + " , " + req.body.id_salesman + 
    " , \"" + req.body.date + "\", " + req.body.id_buyer + ", " + req.body.tax + ");";
    db.query(sql, (error, rows, fields) => {
        if(error) {
            console.log("Ошибка создания склада - 400");
            response.status(400, {message: "Ошибка чека - 400"}, res);
        }
        else {
            console.log("Успешное создание склада");
            response.status(200, {message: "Чек создался"}, res);
        }
    });
}
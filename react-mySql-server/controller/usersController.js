"use strict"

const response = require("../response");
const db = require("../settings/db")

exports.getAllUsers = (req, res) => {

    db.query("SELECT * FROM `users`", (error, rows, fields) => {
        if(error) {
            console.log(404, error, res);
        } else {
            response.status(200, rows, res);
        }
    })

}

exports.signUp = (req, res) => {
    const sql = "INSERT INTO `users`(`name`, `second_name`, `email`) VALUES('" + req.query.name + "', '" + req.query.second_name + "', '" + req.query.email + "')";
    console.log( req.query.name, req.query.second_name, req.query.email );

    db.query("SELECT `id`, `email`, `name`, FROM `users` WHERE `email` = '" + req.query.email + "'", (error, rows, fields) => {
        if(error) {
            response.status(400, error, res)
        }
        else if(typeof rows !== 'undefined' && rows.length > 0) {
            console.log(rows);
            const row = JSON.parse(JSON.stringify(rows));
            response.status(404, "Already exists", res);
        }
        e
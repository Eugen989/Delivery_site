"use strict"

const bscrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const response = require("../response");
const db = require("../settings/db");
const config = require("../config");

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
    db.query("SELECT `id`, `email`, `name` FROM `users` WHERE `email` = '" + req.body.email + "'", (error, rows, fields) => {
        console.log(rows);
        if(error) {
            response.status(400, error, res);
        } else if(typeof rows !== 'undefined' && rows.length > 0) {
            const row = JSON.parse(JSON.stringify(rows));
            row.map(rw => {
                if(rw.email == req.body.email) {
                    response.status(302, {message: `Пользователь с таким email - ${rw.email} уже зарегистрирован`}, res);
                    return true;
                }
            });
        } else {
            const email = req.body.email;
            const name = req.body.name;
            const secondName = req.body.second_name !== '' ? req.body.second_name : "Фамилия не указана";
            const salt = bscrypt.genSaltSync(2);
            const password = bscrypt.hashSync(req.body.password, salt);



            const sql = "INSERT INTO `users`(`name`, `second_name`, `email`, `password`) VALUES('" + name + "', '" + secondName + "', '" + email + "', '" + password + "')";
            db.query(sql, (error, result) => {
                if(error) {
                    response.status(400, {message: "Ошибка регистрации"}, res);
                } else {
                    response.status(200, {message: "Регистрация прошла успешно", result}, res);
                }
            });
        }
    });
};

exports.signIn = (req, res) => {

    db.query("SELECT `id`, `email`, `password` FROM `users` WHERE `email` = '" + req.body.email + "'", (error, rows, fields) => {

        if(error) {
            console.log(400);
            response.status(400, error, res);

        } else if (rows.length <= 0) {
            console.log(401);
            response.status(401, "User is this email not registred", res);

        } else {
            const row = JSON.parse(JSON.stringify(rows));
            
            row.map(rw => {
                if(rw.email == req.body.email) {
                    const password = bscrypt.compareSync(req.body.password, rw.password);

                    if(password){
                        const token = jwt.sign({
                            userId: rw.id,
                            email: rw.email
                        }, config.jwt, {expiresIn: 120 * 120 });
                        response.status(200, {token: token}, res);

                    } else {
                        response.status(401, {message: "Пароль не верный"}, res);
                    }
                    
                    return true;
                }
            });
            
        }
    })
}
 
// id	
// name	
// second_name
// email
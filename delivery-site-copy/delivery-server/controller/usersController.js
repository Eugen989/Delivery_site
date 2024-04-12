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

exports.getAllBuyers = (req, res) => {
    db.query("SELECT * FROM `buyer`", (error, rows, fields) => {
        if(error) {
            console.log(404, error, res);
        } else {
            response.status(200, rows, res);
        }
    })
}

exports.getAllSalesmans = (req, res) => {
    db.query("SELECT * FROM `salesman`", (error, rows, fields) => {
        if(error) {
            console.log(404, error, res);
        } else {
            response.status(200, rows, res);
        }
    })
}


exports.signUp = (req, res) => {
    db.query("SELECT `id`, `email`, `name` FROM `users` WHERE `email` = '" + req.body.email + "'", (error, rows, fields) => {
        console.log("signUp - ", req.body);
        if(error) {
            console.log("Ошибка - 400");
            response.status(400, error, res);
        } else if(typeof rows !== 'undefined' && rows.length > 0) {
            let flag = true;
            const row = JSON.parse(JSON.stringify(rows));
            row.map(rw => {
                if(rw.email == req.body.email) {
                    if(flag) {
                        console.log(`Пользователь с таким email - ${rw.email} уже зарегистрирован`);
                        response.status(302, {message: `Пользователь с таким email - ${rw.email} уже зарегистрирован`}, res);
                        flag = false;
                        return true; // Добавьте return здесь
                    }
                }
            });
        } else {
            const email = req.body.email;
            const name = req.body.name;
            const salt = bscrypt.genSaltSync(2);
            const password = bscrypt.hashSync(req.body.password, salt);

            let sql = "INSERT INTO `users`(`name`, `email`, `password`) VALUES('" + name + "', '" + email + "', '" + password + "'); ";
            if(req.body.userType == "buyer") {
                const delivery = "0";
                const reviews = "0";

                sql += "INSERT INTO `buyer`(`delivery`, `reviews`, `id_user`) VALUES('" + delivery + "', '" + reviews + "', LAST_INSERT_ID());" 
                db.query(sql, (next_error, next_result) => {
                    console.log(sql);
                    if(error) {
                        console.log("Ошибка регистрации покупателя - 400");
                        response.status(400, {message: "Ошибка регистрации покупателя"}, res);
                    }
                    else {
                        console.log("Успешная регистрация покупателя");
                        response.status(200, {message: "Регистрация прошла успешно"}, res);
                    }
                });
            } else if(req.body.userType == "salesman") {
                const raiting = "0";
                const reviews = "0";
                const status = "1";

                sql += "INSERT INTO `salesman`(`rating`, `reviews`, `status`, `id_user`) VALUES('" + raiting + "', '" + reviews + "', '" + status + "', LAST_INSERT_ID());" 
                db.query(sql, (next_error, next_result) => {
                    console.log(sql);
                    if(error) {
                        console.log("Ошибка регистрации продавца - 400");
                        response.status(400, {message: "Ошибка регистрации продавца"}, next_result);
                    }
                    else {
                        console.log("Успешная регистрация продавца");
                        response.status(200, {message: "Регистрация прошла успешно"}, res);
                    }
                });
            } else {
                console.log("Ошибка регистрации: Неопределенный тип пользователя - 400")
                response.status(400, {message: "Ошибка регистрации: Неопределенный тип пользователя"}, res);
            }
        }
    });
};


exports.signIn = (req, res) => {

    db.query("SELECT `id`, `email`, `password` FROM `users` WHERE `email` = '" + req.query.email + "'", (error, rows, fields) => {
        if(error) {
            console.log(400);
            response.status(400, error, res);

        } else if (rows.length <= 0) {
            console.log("Этот пользователь не был зарегестрирован 401");
            response.status(401, "Этот пользователь не был зарегестрирован", res);

        } else {
            const row = JSON.parse(JSON.stringify(rows));
            
            row.map(rw => {
                if(rw.email == req.query.email) {
                    const password = bscrypt.compareSync(req.query.password, rw.password);

                    if(password){
                        const token = jwt.sign({
                            userId: rw.id,
                            email: rw.email
                        }, config.jwt, {expiresIn: 120 * 120 });

                        console.log("Вы зашли под своим акаунтом");
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
// email
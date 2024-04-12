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
        console.log("signUp - ", req.body);
        if(error) {
            console.log("Ошибка - 400");
            response.status(400, error, res);
        } else if(typeof rows !== 'undefined' && rows.length > 0) {
            const row = JSON.parse(JSON.stringify(rows));
            row.map(rw => {
                if(rw.email == req.body.email) {
                    console.log(`Пользователь с таким email - ${rw.email} уже зарегистрирован`);
                    response.status(302, {message: `Пользователь с таким email - ${rw.email} уже зарегистрирован`}, res);
                    return true;
                }
            });
        } else {
            const email = req.body.email;
            const name = req.body.name;
            const salt = bscrypt.genSaltSync(2);
            const password = bscrypt.hashSync(req.body.password, salt);

            const raiting = "3";
            const reviews = "5";
            const status = "1";
            const id_user = "20";

            // INSERT INTO `users` (`name`, `email`, `password`) VALUES( 'euax', 'azsf@gmail.com', 'q12');
            // INSERT INTO `salesman`(`rating`, `reviews`, `status`, `id_user`) VALUES('3', '5', '1', '20');

            let sql = "INSERT INTO `users`(`name`, `email`, `password`) VALUES('" + name + "', '" + email + "', '" + password + "');";
            sql += "INSERT INTO `salesman`(`rating`, `reviews`, `status`, `id_user`) VALUES('" + raiting + "', '" + reviews + "', '" + status + "', '" + id_user + "');" 
            db.query(sql, (error, result) => {
                if(error) {
                    console.log("Ошибка регистрации - 400");
                    response.status(400, {message: "Ошибка регистрации"}, res);
                } else {
                    console.log("Успешная регистрация");
                    response.status(200, {message: "Регистрация прошла успешно", result}, res);
                }
            });
        }
    });
};

exports.signIn = (req, res) => {

    db.query("SELECT `id`, `email`, `password` FROM `users` WHERE `email` = '" + req.query.email + "'", (error, rows, fields) => {
        if(error) {
            console.log(400);
            response.status(400, error, res);

        } else if (rows.length <= 0) {
            console.log(401);
            response.status(401, "User is this email not registred", res);

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
                        response.status(200, {token: token}, res);
                        console.log("Вы зашли под своим акаунтом");

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
"use strict"

const response = require("../response");

exports.index = (req, res) => {
    response.status(200, "Hello rest Api", res);
}

exports.pushFront = (req, res) => {
    //response.status(200, {message: "Hy from Api"}, res);
    res.json({
        message: "Hy from Api"
    })
}
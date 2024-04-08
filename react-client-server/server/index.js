const express = require("express");
const mongoose = require("mongoose");
const config = require("config")
const authRouter = require("./routes/auth.routes")
const app = express();
const PORT = config.get("serverPort");

app.use(express.json());
app.use("/api/auth", authRouter);

const start = async () => {
    try {
        mongoose.connect(config.get("dbUrl"), {
            serverSelectionTimeoutMS: 500000,
            socketTimeoutMS: 500000
        });

        app.listen(PORT, () => {
            console.log("Server started ", PORT);
        });
    } catch (e) {

    }
}

start();
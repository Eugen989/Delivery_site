const express = require("express");
const app = express();
const port = 5000;

const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
    res.send("ok");
})

app.get("/api/stocks", (req, res) => {
    const stocks = [
        {
            title: "Apple",
            price: "123"
        },
        {
            title: "Test",
            price: "326"
        }
    ]
    res.send(stocks);
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
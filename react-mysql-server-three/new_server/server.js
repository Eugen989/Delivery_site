const express = require("express");
const app = express();
const port = process.config.PORT || 5000;
const bodyParser = require("body-parser")
const cors = require("cors");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

const routes = require("./settings/routes");
routes(app);


app.get("/api/stocks", (req, res) => {
    const stocks = [
        {
            title: "Apple",
            price: "13"
        },
        {
            title: "Test",
            price: "326"
        }
    ]
    res.send(stocks);
})


app.listen(port, () => {
    console.log(`Server - http://localhost:${port}`);
})
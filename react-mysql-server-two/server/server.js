const express = require("express");
const app = express();
const port = process.config.PORT || 3001;
const bodyParser = require("body-parser")
const cors = require("cors");

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());

// const routes = require("./settings/routes");
// routes(app);

app.use(cors());

app.get("/api", (req, res) => {
    const stocks = [{
        title:"apple"
    }]
    res.send(stocks);
})

app.listen(port, () => {
    console.log(`Server - http://localhost:${port}`);
})
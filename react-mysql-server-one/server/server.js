const express = require("express");
const app = express();
const port = process.config.PORT || 3001;
const bodyParser = require("body-parser")

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());

// const routes = require("./settings/routes");
// routes(app);

app.get("/api", (req, res) => {
    res.json({
        message: "Hello from back"
    })
})

app.listen(port, () => {
    console.log(`Server - http://localhost:${port}`);
})
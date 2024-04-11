const express = require("express");
const app = express();
const port = process.config.PORT || 5000;
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const routes = require("./settings/routes");
routes(app);

app.listen(port, () => {
    console.log(`Server - http://localhost:${port}`);
})
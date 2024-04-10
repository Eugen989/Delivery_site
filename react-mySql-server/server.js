const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const routes = require("./settings/routes");
routes(app);

// app.get("/", (req, res) => {
//     res.send("Hello api");
// })

app.listen(port, () => {
    console.log(`Server - http://localhost:${port}`);
})
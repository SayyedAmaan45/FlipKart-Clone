let express = require("express");
let app = express();
let connection = require("./database/db.js");
let dotEnv = require("dotenv");
let defaultData = require("./default.js");
let router = require("./routes.js");
let cors = require("cors");

dotEnv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(router);

const PORT =8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

connection(USERNAME,PASSWORD);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

defaultData();


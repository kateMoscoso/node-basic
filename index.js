const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

const app = express();

const mongo = require("./db/connect");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./routes/views")(app);
require("./routes/api")(app);

require("./routes/special")(app);


async function initMongo() {
    const db = await mongo.connect();
    if (db) {
        initExpress();
    }
}

function initExpress() {
    app.listen(PORT, () => {
        console.log(`Express ready on port ${PORT}`);
        process.on('SIGINT', closeApp);
        process.on('SIGTERM', closeApp);
    });
}

function closeApp() {
    mongoose.disconnect()
        .then(() => process.exit(0));

}


app.get("*", (req, res) => {
    res.send("Hola, soy Express!");
});

app.listen(3000, () => {
    console.log("Express ha iniciado correctamente!");
});
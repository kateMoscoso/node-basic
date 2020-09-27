const express = require('express');
const app = express();

const chalk = require('chalk');
const cors = require('cors');
const debug = require('debug')('app');
const bodyParser = require('body-parser');
const charlasApi = require('./routes/charlas');

const port = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

charlasApi(app);

app.listen(port, () => debug(`Listening port ${chalk.green(port)}`));

const express = require('express');
const app = express();

const chalk = require('chalk');
const cors = require('cors');
const debug = require('debug')('app');
const bodyParser = require('body-parser');
const cloudinaryApi = require('./routes');

const port = process.env.PORT || 3000;
const {
  errorHandler
} = require('../../utils/middlewares/errorHandlers');

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

cloudinaryApi(app);
app.use(errorHandler);

app.listen(port, () => debug(`Listening port ${chalk.green(port)}`));

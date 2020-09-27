const express = require('express');
const Controller = require('./controllers')

function cloudinaryApi(app) {
  const router = express.Router();
  app.use('/api/cloudinary', router);
  router.get('/statistics', async function (req, res, next) {
    try {
      const statistics = Controller.getStatistics()
      res.status(200).json(statistics);
    } catch (err) {
      next(err);
    }
  });

  router.get('/csv', async function (req, res, next) {
    try {
      const csv = await Controller.getCsv();
      res.attachment('data.csv')
      res.status(200).send(csv)
    } catch (err) {
      next(err);
    }
  });

}

module.exports = cloudinaryApi;

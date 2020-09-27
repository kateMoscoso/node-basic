const express = require('express');
const { charlaSchema } = require('../utils/middlewares/schemas/charla');
const { validationHandler } = require('../utils/middlewares/validationHandler');
const charlaController = require('../controllers/charla');

function charlasApi(app) {
  const router = express.Router();
  app.use('/api/charlas', router);
  router.post('/', validationHandler(charlaSchema), async function (req, res, next) {
    const { body: charla } = req;
    try {
      const conferencesList = charlaController.saveConference(charla)

      res.status(201).json({
        data: conferencesList,
        charla: 'charla created',
      });
    } catch (err) {
      next(err);
    }
  });

}

module.exports = charlasApi;

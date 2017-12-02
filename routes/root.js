module.exports = (app) => {
  const rootController = require('../controllers/root');

  app.route('/')
    .get(rootController.showAll)
    .post(rootController.initDB);
};
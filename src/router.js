const email = require('./email.js');

const router = (app) => {
  app.get('/', (req, res) => res.render('home'));
  app.post('/submitContact', email.sendEmail);
  app.get('*', (req, res) => res.render('home'));
};

module.exports = router;

const path = require('path');
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const expressHandlebars = require('express-handlebars');

const router = require('./router.js');

// adds port for the app to listen on
const PORT = process.env.PORT || process.env.NODE_PORT || 3000;

const app = express();
app.use('/assets', express.static(path.resolve(`${__dirname}/../client/`)));
app.use(favicon(`${__dirname}/../client/images/favicon.png`));
app.disable('x-powered-by');
app.use(compression());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/../views`);

router(app);

// starts the server
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Listening on port ${PORT}`);
});

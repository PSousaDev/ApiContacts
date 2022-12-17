const express = require('express');
require('express-async-errors');
const routes = require('./app/routes');

const app = express();
app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  console.log('### ErrorHandler');
  console.log(error);
  response.sendStatus(500);
});
app.listen(3000, () => console.warn('server listening on port 3000'));

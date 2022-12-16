const express = require('express');
const routes = require('./app/routes');

const app = express();
app.use(express.json());
app.use(routes);
app.listen(3000, () => console.warn('server listening on port 3000'));

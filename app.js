const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 5000;
const routes = require('./src/controllers/index');

routes.forEach(([name, handler]) => app.use(`/${name}`, handler)); 

app.listen(port, () => {
  console.log(`Server started on port, ${port}`);
});

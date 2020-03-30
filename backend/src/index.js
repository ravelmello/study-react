const express = require('express');
const routes = require('./routes/routes');
const cors = require('cors');
const {errors} = require('celebrate');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use(errors());

app.listen(3333);


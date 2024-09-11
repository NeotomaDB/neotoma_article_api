'use strict';
const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser')
const dbtest = require('./database/pgp_db').dbheader;

const PORT = process.env.PORT || 3000;

const app = express();

// app.use(helmet());
app.use(cors());
app.use(bodyParser.json({limit:'500mb'}));
app.use(bodyParser.urlencoded({limit: '500mb', extended: true, parameterLimit: 1000000}));

app.locals.db = dbtest();

app.use(express.static('public'));
app.use(express.urlencoded({
  extended: false,
}));
app.use(express.json());

// Locations for v0 route files
const v0data = require('./v0.1/routes/routes');

// use the v0.1 endpoints:
app.use('/v0.1', v0data);

app.listen(3000);
  
module.exports = app;

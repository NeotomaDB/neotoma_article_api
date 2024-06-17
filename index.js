'use strict';
const express = require('express');
const cors = require('cors');
const dbtest = require('./database/pgp_db').dbheader;

const PORT = process.env.PORT || 3000;

const app = express();

// app.use(helmet());
app.use(cors());
app.use(express.json());

app.locals.db = dbtest();

app.use(express.static('public'));
app.use(express.urlencoded({
  extended: false,
}));
app.use(express.json());

// Locations for v2.0 files
const v0data = require('./v0/routes/routes');

// use the v1.5 endpoints:
app.use('/', v0data);
  
app.all('*', function(req, res) {
    res.redirect('/api-docs');
});

app.listen(3000);
  
module.exports = app;

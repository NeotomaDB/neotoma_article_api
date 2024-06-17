'use strict';

const express = require('express');
const router = express.Router();

const handlers = require('../handlers/handler');

router.post('/doi', handlers.postdois);
router.get('/doi', handlers.doisummary);

router.get('/', function(req, res, next) {
    res.status(200)
              .json({
                status: 'success',
              });
  });

module.exports = router;

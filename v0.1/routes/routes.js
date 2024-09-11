'use strict';

const express = require('express');
const router = express.Router();

const handlers = require('../handlers/handler');

router.get('/doi/summary', handlers.doisummary);
router.get('/doi/embeddingtext', handlers.embeddingtext);
router.post('/doi/embeddings/', handlers.submitembeddings)
router.get('/doi/embeddings/', handlers.checkembeddings)
router.get('/doi/labels/', handlers.checklabels)
router.post('/doi/', handlers.postdois);
router.get('/doi/', handlers.getdoi);

module.exports = router;

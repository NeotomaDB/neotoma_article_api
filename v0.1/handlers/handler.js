'use strict';
module.exports = {
  postdois: function(req, res, next) {
    const postdois = require('../helpers/dois/dois.js');
    postdois.postdois(req, res, next);
  },
  doisummary:
  function(req, res, next) {
    const doisummary = require('../helpers/dois/dois.js');
    doisummary.getdois(req, res, next);
  },
  embeddingtext:
  function(req, res, next) {
    const embedders = require('../helpers/dois/dois.js');
    embedders.embeddingtext(req, res, next);
  },
  submitembeddings:
  function(req, res, next) {
    const embedders = require('../helpers/dois/dois.js');
    embedders.submitembedding(req, res, next);
  },
  checkembeddings:
  function(req, res, next) {
    const embedders = require('../helpers/dois/dois.js');
    embedders.checkembeddings(req, res, next);
  },
  checklabels:
  function(req, res, next) {
    const labels = require('../helpers/dois/dois.js');
    labels.checklabels(req, res, next);
  },
  getdoi:
  function(req, res, next) {
    const papers = require('../helpers/dois/dois.js');
    papers.getdoi(req, res, next);
  },
}
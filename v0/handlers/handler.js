'use strict';
module.exports = {
  postdois: function(req, res, next) {
    const postdois = require('../helpers/dois/dois.js');
    postdois.postdois(req, res, next);
  },
  doisummary:
  function(req, res, next) {
    const postdois = require('../helpers/dois/dois.js');
    postdois.getdois(req, res, next);
  }, 
  
}
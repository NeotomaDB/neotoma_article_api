'use strict';

const pgPromise = require('pg-promise');

const pgp = require('pg-promise')({
    /* initialization options */
    capSQL: true // capitalize all generated SQL
});

const {ColumnSet, insert} = pgp.helpers;


/**
 * Take a set of DOIs and post them to the database.
 * @param {req} req An Express request object.
 * @param {res} res An Express response object.
 * @param {next} next An Express "next" object.
 */
function postdois(req, res, next) {
    const db = req.app.locals.db;
    const doitab = new ColumnSet(['doi', 'dateadded'], {table: 'papers'});

    const values = req.body.dois;
    const query = insert(values, doitab)
    db.any(query)
        .then(function(data) {
          res.status(200)
              .json({
                status: 'success',
                message: 'Inserted DOIs',
              });
        })
        .catch(function(err) {
          return res.status(500)
              .json({
                status: 'failure',
                message: err.message,
                query: [query],
              });
        });
}


/**
 * Take a set of DOIs and post them to the database.
 * @param {req} req An Express request object.
 * @param {res} res An Express response object.
 * @param {next} next An Express "next" object.
 */
function getdois(req, res, next) {
    const db = req.app.locals.db;
    
    const doi_query = `
        SELECT pp.doi AS doi,
            COUNT(CASE WHEN pl.labelid is null then 0 else 1 END) AS labels,
            COUNT(CASE WHEN em.embedding is null then 0 else 1 END) AS embedding_arrays,
            COUNT(CASE WHEN pr.prediction is null then 0 else 1 END) AS predictions
        FROM papers AS pp
        LEFT JOIN paperlabels AS pl ON pp.doi = pl.doi
        LEFT JOIN embeddings AS em ON em.doi = pp.doi
        LEFT JOIN paperpredictions AS pr ON pp.doi = pr.doi
        GROUP BY pp.doi;
        `

    db.any(doi_query)
        .then(function(data) {
          res.status(200)
              .json({
                status: 'success',
                message: data,
              });
        })
        .catch(function(err) {
          return res.status(500)
              .json({
                status: 'failure',
                message: err.message,
              });
        });
}

module.exports.postdois = postdois
module.exports.getdois = getdois
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST Route
router.post('/', (req, res) => {

    const item = req.body;

    const sqlText = `INSERT INTO "feedback" 
                    ("feeling", "understanding", "support", "comments") 
                    VALUES ($1, $2, $3, $4);`;

    pool.query(sqlText, [item.feeling, item.understanding, item.support, item.comments])
        .then((databaseResult) => {
            console.log('added item to the database', item);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error posting item to the database', error);
            res.sendStatus(500);
        })
}); // End POST Route

// GET Route
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "feedback" ORDER BY "id" DESC;`)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('error getting items from the database', error);
            res.sendStatus(500);
        });
}); // End GET Route

// PUT Route
router.put('/flagged/:id', (req, res) => {
    console.log('in PUT with id', req.params.id);
    console.log(req.params); // { id: '#' }
    const feedbackId = req.params.id;

    const sqlText = `UPDATE "feedback" SET "flagged" = NOT "flagged" WHERE "id" = $1;`;

    pool.query(sqlText, [feedbackId])
        .then((databaseResult) => {
            // okay
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error updating gallery item', error);
            res.sendStatus(500);
        })
}); // End PUT Route

// DELETE Route
router.delete('/flagged/:id', (req, res) => {
    console.log('in DELETE with id', req.params.id);
    console.log(req.params); // { id: '#' }
    const feedbackId = req.params.id;

    const sqlText = `DELETE FROM "feedback" WHERE "id" = $1;`;
    const sqlParams = [feedbackId];

    pool.query(sqlText, sqlParams)
        .then((databaseResult) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('error in DELETE', err);

            res.sendStatus(500);
        })
}); // End DELETE Route

module.exports = router;
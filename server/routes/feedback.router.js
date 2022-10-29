const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

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
});

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "feedback" ORDER BY "id" DESC;`)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('error getting items from the database', error);
            res.sendStatus(500);
        });
});

module.exports = router;
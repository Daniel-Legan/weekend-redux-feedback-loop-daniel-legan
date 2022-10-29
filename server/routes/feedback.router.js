const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// router.get('/', (req, res) => {
//     console.log('GET /api/pizza');
//     pool.query('SELECT * from "pizza";').then((result) => {
//         console.log(result.rows);
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log('Error GET /api/pizza', error)
//         res.sendStatus(500);
//     });
// })

router.post('/', (req, res) => {

    const item = req.body;

    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`;

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



module.exports = router;
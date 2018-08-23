const router = require('express').Router();
const pool = require('../module/pool.js')

router.post('/', (req,res) => {
    
    const genreAdded = req.body;
    console.log('in post', genreAdded);
    const query = 'INSERT INTO "genre" ("genre") VALUES($1);'
    pool.query(query, [genreAdded.genre]).then((response) => {
        console.log('success in making query', response);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error in Post route');
        res.sendStatus(500);
    });
});

router.get('/', (req,res) => {
    console.log('in GET');
    const query = 'SELECT * FROM "genre";'
    pool.query(query).then((results) => {
        console.log(results);
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error getting information from DB', error);
        res.sendStatus(500);
    });
});

router.delete('/:id', (req,res) => {
    console.log('Deleting in progress', );
    let deleteThis = req.params.id;
    const query = 'DELETE FROM "genre" WHERE "id" = $1;';
    pool.query(query, [deleteThis]).then((results) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(`Oh No You can't delete yet`, error);
        res.sendStatus(500);
    });
});


module.exports = router;




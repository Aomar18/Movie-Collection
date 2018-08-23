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
    })
})


module.exports = router;




//requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const genre = require('./routes/genre.router');

//use
app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use('/genre', genre);


app.listen(PORT, () => {
    console.log('Listening on port', PORT);
})
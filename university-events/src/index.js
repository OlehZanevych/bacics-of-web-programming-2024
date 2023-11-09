const express = require('express');
const {initRouters} = require('./routes');

const protocol = 'http';
const host = 'localhost';
const port = 8080;

const app = express();

app.use(express.json());

initRouters(app);

app.listen(port, () => {
    console.log(`App listening at ${protocol}://${host}:${port}`);
});

module.exports = app;
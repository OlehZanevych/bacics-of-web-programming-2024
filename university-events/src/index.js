const express = require('express');

const protocol = 'http';
const host = 'localhost';
const port = 8080;

const app = express();

app.use('/events/:eventId', (req, res, next) => {
    const {eventId} = req.params;
    console.log(`Before call endpoint for event with id ${eventId}`);
    next();
});

app.get('/events', (req, res) => {
    res.send('Get all Events');
});

app.get('/events/:eventId', (req, res) => {
    const {eventId} = req.params;
    res.send(`Get Event with id ${eventId}`);
});

app.post('/events', (req, res) => {
    res.status(201).send(`Create Event`);
});

app.put('/events/:eventId', (req, res) => {
    const {eventId} = req.params;
    res.send(`Update Event with id ${eventId}`);
});

app.patch('/events/:eventId', (req, res) => {
    const {eventId} = req.params;
    res.send(`Partially update Event with id ${eventId}`);
});

app.delete('/events/:eventId', (req, res) => {
    const {eventId} = req.params;
    res.send(`Delete Event with id ${eventId}`);
});

app.listen(port, () => {
    console.log(`App listening at ${protocol}://${host}:${port}`);
});

module.exports = app;
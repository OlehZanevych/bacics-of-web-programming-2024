const { validationResult } = require('express-validator');

const eventRepository = require('../repository/event');

const create = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const event = req.body;

    const [{id}] = await eventRepository.createEvent(event);

    event.id = id;

    res.status(201).send(event);
}

const findAll = (req, res) => eventRepository.findAll()
    .then(events => {
        res.send(events);
    })

const findById = (req, res) => {
    const id = +req.params.id;

    return eventRepository.findById(id)
        .then(event => {

            if (event) {
                res.send(event);
            } else {
                res.status(404).send({errorMessage: 'Event not found!'});
            }
        })
}

const updateById = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const id = +req.params.id;

    const event = req.body;

    return eventRepository.updateById(id, event).then(effectedRows => {
        if (effectedRows) {
            res.status(204).send();
        } else {
            res.status(404).send({errorMessage: 'Event not found!'});
        }
    });
}

const deleteById = (req, res) => {
    const id = +req.params.id;

    return eventRepository.deleteById(id)
        .then(effectedRows => {
            if (effectedRows) {
                res.status(204).send();
            } else {
                res.status(404).send({errorMessage: 'Event not found!'});
            }
        })
}

module.exports = {
    create,
    findAll,
    findById,
    updateById,
    deleteById
}

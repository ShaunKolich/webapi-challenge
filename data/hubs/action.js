const express = require('express');
const db = require('../helpers/actionModel.js');
const router = express.Router();

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.get(id)
        .then(dbId => {
            if (dbId.length) {
                res.json(dbId);
            } else {
                res.status(404).json({
                    message: 'Invalid ID'
                })
            }
        })
        .catch(({ message }) => {
            res.status(500).json({ message })
        })
})

router.post('/', (req, res) => {
    const newAction = req.body;
    db.insert(newAction)
        .then(newAction => {
            res.status(200).json(newAction);
        })
        .catch(({ message }) => {
            res.status(500).json({ message })
        })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const change = req.body;

    db.update(id, change)
        .then(change => {
            res.status(200).json(change);


        })
        .catch(({ message }) => {
            res.status(500).json({ message })
        })

})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.remove(id)
        .then(deleteId => {
            res.json(deleteId)

        })
        .catch(({ message }) => {
            res.status(500).json({ message })
        })


})

module.exports = router;
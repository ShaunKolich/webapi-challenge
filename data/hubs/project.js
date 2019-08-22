const express = require('express');
const db = require('../helpers/projectModel');
const router = express.Router();

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.get(id)
        .then(id => {
            if (id.length) {
                res.status(200).json(id);
            } else {
                res.status(500).json({
                    error: "Project not found"
                })
            }
        })
        .catch(({ message }) => {
            res.status(500).json({ message })
        })
})

router.post('/', (req, res) => {
    const newProj = req.body;
    db.insert(newProj)
        .then(newProj => {
            res.status(200).json(newProj);
        })
        .catch(({ message }) => {
            res.status(500).json({ message });
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
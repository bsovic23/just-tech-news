const router = require('express').Router();
const { application } = require('express');
const { User } = require('../../models/User');

// Get /api/users
router.get('/', (req, res) => {
    User.findAll()
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get /api/users/1
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Post /api/users
router.get('/', (req, res) => {});

// Put /api/users/1
router.put('/:id', (req, res) => {});

// Delete /api/users/1
router.delete('/:id', (req, res) => {});

module.exports = router;
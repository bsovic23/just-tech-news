const router = require('express').Router();
const { User, Post } = require('../../models');

// get all users
router.get ('./', (req, res) => {
    console.log('===================');
    Post.findAll({
        // insert query here
    })

});
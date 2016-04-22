'use strict';
var router = require('express').Router();
var models = require('../../../models')
var chalk = require('chalk')
var multer = require('multer')
var storage = multer.memoryStorage()
var upload = multer({
    storage: storage
})

var ensureAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).end();
    }
}

router.get('/', function(req, res) {
    models.User.findAll({}).then(function(users) {
        res.json(users);
    });
});

router.put('/update', function(req, res) {
    req.body.completed = true
    models.User.findById(req.body.id)
        .then(function(user) {
            return user.update(req.body)
        }).then(function(updatedUser) {
            res.json(updatedUser)
        })
})

router.post('/photo/:id', upload.single('file'), function(req, res) {
    console.log(req.file.buffer)
    models.User.findById(req.params.id)
        .then(function(user) {
            return user.update({
                photo: req.file.buffer
            })
        }).then(function(updatedUser) {
            res.json(updatedUser)
        })
})

module.exports = router;
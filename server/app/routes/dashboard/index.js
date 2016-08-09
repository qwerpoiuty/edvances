"use strict"
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

//fetches
//get the schdeuld of a particular dashboard
router.get('/classes/:dashboard_id', function(req, res) {

    //there needs to be a raw query here that returns the rows for classrooms on the dashboard
    models.Dashboard.findById(req.body).then(function(dashboard) {
        //there needs to be some check for scheduling conflicts here as well
        res.json(dashboard.classes)
    })
})


//scheduling is done by populating all the dashboards with classes and nesting the queries

//this one adds a class
router.put('/students/add/:id', function(req, res) {
    models.User.findById(req.params.id).then(function(user) {
        user.classrooms.push(req.body)
        return user.update(user)
    }).then(function(user) {
        if (user.classrooms.indexOf(req.body) !== -1) res.sendStatus(200)
        else res.sendStatus(300)
    })
})

router.put('/students/remove/:id', function(req, res) {
    models.User.findById(req.params.id).then(function(user) {
        if (user.classrooms.indexOf(req.body) === -1) res.sendStatus(404)
        user.classrooms.splice(user.classrooms.indexOf(req.body), 1)
        return user.update(user)
    }).then(function(user) {
        res.sendStatus(200)
    })
})


module.exports = router;
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
router.get('/:dashboard_id', function(req, res) {
    models.Dashboard.find({
        where: {
            dashboard_id: req.params.id
        },
        include: [{
            model: models.Classroom,
            include: [models.Calendar]
        }]
    }).then(function(dashboard) {
        res.json(dashbaord)
    })
})


//scheduling is done by populating all the dashboards with classes and nesting the queries

//this one adds a class
router.put('/addClass/:id', function(req, res) {
    models.Dashboard.findById(req.params.id).then(function(dashboard) {
        return dashboard.addClassroom(req.body)
    }).then(function(dashboard) {
        res.json(dashboard)
    })
})

//this one removes a class
router.put('/removeClass/:id', function(req, res) {
    models.Dashboard.findById(req.params.id).then(function(dashboard) {
        return dashboard.removeClassroom(req.body)
    }).then(function(dashboard) {
        res.json(dashboard)
    })
})
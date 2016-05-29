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

router.get('/:dashboard_id', function(req, res) {
    models.Dashboard.find({
        where: {
            dashboard_id: req.params.id
        },
        include: [models.Event]
    }).then(function(dashboard) {
        res.json(dashbaord)
    })
})

router.put('/update', function(req, res) {
    models.Dashboard.find({
        where: {
            dashboard_id: req.body.dashboard_id
        }
    }).then(function(dashboard) {
        return dashboard.update(req.body)
    }).then(function(updatedDashboard) {
        res.json(updatedDashboard)
    })
})
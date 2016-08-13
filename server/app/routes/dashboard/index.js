"use strict"
var router = require('express').Router();
var models = require('../../../models')
var chalk = require('chalk')
var multer = require('multer')
var storage = multer.memoryStorage()
var upload = multer({
    storage: storage
})
var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://localhost:5432/edvancesdb', {
    dialect: 'postgres',
    protocol: 'postgres'
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
    sequelize.query('select b.title,b.description, c.year,c.month,c.day,c.weekday,c.date,c.calendar_id from "Dashboards" as a inner join "Classrooms" as b on b."classroom_id" = any(a."classrooms") inner join "Calendars" as c on c."calendar_id" = any(b."blocks") where a.dashboard_id=' + req.params.dashboard_id).then(function(schedule) {
        res.json(schedule)
    })
    // select b.title,b.description, c.year,c.month,c.day,c.weekday,c.date,c.calendar_id from "Dashboards" a
    //     inner join "Classrooms" b
    //     on b."classroom_id" = any(a."classrooms")
    //     inner join "Calendars" c
    //     on c."calendar_id" = any(b."blocks")
    //there needs to be a raw query here that returns the rows for classrooms on the dashboard
    // models.Dashboard.findById(req.body).then(function(dashboard) {
    //     //there needs to be some check for scheduling conflicts here as well
    //     res.json(dashboard.classes)

    // })
})


//scheduling is done by populating all the dashboards with classes and nesting the queries

//this one adds a class
router.put('/students/add/:id', function(req, res) {

    models.Dashboard.findById(req.params.id).then(function(dashboard) {
        var classrooms = dashboard.classrooms.concat(req.body)
        return dashboard.update({
            classrooms: classrooms
        })
    }).then(function(dashboard) {

        res.json(dashboard)
    })
})

router.put('/students/remove/:id', function(req, res) {
    models.Dashboard.findById(req.params.id).then(function(dashboard) {
        if (dashboard.classrooms.indexOf(req.body[0]) === -1) {
            console.log('that class isn\'t in this dashboard')
            res.sendStatus(404)
        }
        dashboard.classrooms.splice(dashboard.classrooms.indexOf(req.body[0]), 1)
        var classrooms = dashboard.classrooms
        return dashboard.update({
            classrooms: classrooms
        })
    }).then(function(dashboard) {
        res.sendStatus(200)
    })
})


module.exports = router;
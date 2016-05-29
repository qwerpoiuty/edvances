'use strict';
var router = require('express').Router();
var models = require('../../../models')
var chalk = require('chalk')
var multer = require('multer')
var storage = multer.memoryStorage()
var upload = multer({
    storage: storage
})

//get functions
router.get('/', function(req, res) {
    models.Classroom.findAll({}).then(function(classrooms) {
        res.json(classrooms)
    })
    // models.Calendar.find({
    //     where:{id: },
    //     include:[{
    //         model:Calendar,
    //         where:[

    //         ]
    //     }]
    // })
})

router.get('/:id', function(req, res) {
    models.Classroom.findById(req.params.id).thne(function(classroom) {
        res.json(classroom)
    })
})

//some get function to do searches
router.get('/search', function(req, res) {
    //req.body is probably going to be a string

})


//puts
//this is probably going to be for adding descriptions or assignments
router.put('/update', function(req, res) {
    models.Classroom.findById(req.body.id)
        .then(function(classroom) {
            return classroom.update(req.body)
        }).then(function(updatedClassroom) {
            res.json(updatedClassroom)
        })
})



//this is probably going to be something for adding documents to the classroom. maybe avatar?


//posts
router.post('/', function(req, res) {
    modesls.Classroom.create(req.body).then(function(classroom) {
        res.json(classroom)
    })
})

router.post('/schedule', function(req, res) {
    models.Event.create(req.body.event).then(function(event) {
        models.Dashboard.find({
            where: {
                id: req.body.dashboards
            }
        }).then(function(dashboards) {
            dashboards.forEach(dashboard) {
                dashboard.update({
                    dashboard.events.push(event.id)
                })
            }
        })
    })
})

module.exports = router;
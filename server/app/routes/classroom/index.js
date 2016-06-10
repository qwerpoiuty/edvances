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
    // models.Classroom.findAll({}).then(function(classrooms) {
    //     res.json(classrooms)
    // })
    // models.Classroom.findById(1).then(function(classroom) {
    //     console.log(classroom.blocks)
    //     models.Calendar.findAll({
    //         where: {
    //             calendar_id: classroom.blocks
    //         }
    //     }).then(function(calendars) {
    //         res.json(calendars)
    //     })
    // })
    // models.Classroom.find({
    //     include: [models.Calendar],
    //     where:{
    //         models.Calendar:
    //     }
    // }).then(function(classroom) {
    //     console.log(classroom)
    // })
    // models.Classroom.findById(1).then(function(classroom) {
    //     models.Calendar.findById(1).then(function(calendar) {
    //         console.log(classroom.setCalendars)
    //         classroom.setCalendars([calendar]).then(function(classroom) {
    //             classroom.getCalendars().then(function(calendars) {
    //                 console.log(calendars)
    //             })
    //         })
    //     })
    // })
})

router.get('/:id', function(req, res) {
    models.Classroom.findById(req.params.id).then(function(classroom) {
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

//this is for scheduling
router.put('/schedule/:id', function(req, res) {
    //this route overides the previous schedule of the class with the new schedule
    models.Classroom.findById(req.params.id).then(function(classroom) {
        return classroom.setCalendars(req.body)
    }).then(function(classroom) {
        res.json(classroom)
    })
})

//this is for adding a block
router.put('/addBlock/:id', function(req, res) {
    models.Classroom.findById(req.params.id).then(function(classroom) {
        return classroom.addCalendar(req.body)
    }).then(function(classroom) {
        res.json(classroom)
    })
})

//this is for removing a block
router.put('/removeBlock/:id', function(req, res) {
    models.Classroom.findById(req.params.id).then(function(classroom) {
        return classroom.removeCalendar(req.body)
    }).then(function(classroom) {
        res.json(classroom)
    })
})

//this is probably going to be something for adding documents to the classroom. maybe avatar?


//posts
router.post('/:id', function(req, res) {
    //this route needs to receive the classroom object, as well as a dashboardid
    models.Classroom.create({
        title: req.body.title,
        start: req.body.start,
        end: req.body.end,
        teacher: req.params.id,
        description: req.body.description
    }).then(function(classroom) {
        //do some scheduling for this
        models.Dashboard.findById(req.params.id).then(function(dashboard) {
            dashboard.addClassroom(classroom)
            console.log(dashboard)
        })
        // res.json(classroom)
    })
})









module.exports = router;
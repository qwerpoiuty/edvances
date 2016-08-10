'use strict';
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

//get functions
router.get('/', function(req, res) {
    var modelParams = {}
    if (req.query.classroomId) modelParams.id = req.query.classroomId
    if (req.query.classroomTag) {
        modelParams.tags = req.query.classroomTags
    }
    if (req.query.classroomKeyWord) modelParams.keyWord = req.query.classroomKeyWord
    for (var key in modelParams) {
        modelParams[key] = modelParams[key].map(function(e) {
            return '{' + e + '}'
        })
    }

    models.Classroom.findAll({
        where: {
            tags: {
                $in: modelParams.tags
            },
            id: {
                $in: modelParams.id
            }
        }
    }).then(function(classrooms) {
        res.json(classrooms)
    })
})

// router.get('/:id', function(req, res) {
//     models.Classroom.findById(req.params.id).then(function(classroom) {
//         res.json(classroom)
//     })
// })

//some get function to do searches
router.get('/search/:query', function(req, res) {
    //req.body is probably going to be a string
    var query = req.params.query.toString().split(',')
    query = query.map(function(e) {
        return '{' + e + '}'
    })
    models.Classroom.findAll({
        where: {
            tags: {
                $in: query
            }
        }
    }).then(function(classrooms) {
        res.json(classroom)
    })

})

//puts
//this is probably going to be for adding descriptions or assignments
router.put('/', function(req, res) {
    //this is the update for ONLY THE CLASSROOM ATTRIBUTES. SCHEDULING TAKES PLACE IN THE SCHEDULING ROUTE
    models.Classroom.findById(req.body.classroom_id)
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
        // classroom.blocks = req.body
        return classroom.update({
            blocks: req.body
        })
    }).then(function(classroom) {
        res.sendStatus(200)
    })
})

// router.put('/addBlock/:id', function(req, res) {
//     models.Classroom.findById(req.params.id).then(function(classroom) {
//         classroom.blocks = req.body
//         return classroom.update(classroom)
//     }).then(function(classroom) {
//         res.json(classroom)
//     })
// })

// //this is for removing a block
// router.put('/removeBlock/:id', function(req, res) {
//     models.Classroom.findById(req.params.id).then(function(classroom) {


//     }).then(function(classroom) {
//         res.json(classroom)
//     })
// })


//this is probably going to be something for adding documents to the classroom. maybe avatar?


//posts
router.post('/', function(req, res) {
    models.Classroom.findOrCreate({
        where: {
            title: req.body.title
        },
        defaults: req.body


    }).spread(function(classroom, created) {
        if (!created) {
            res.json(false)
        }
        res.json(classroom.classroom_id)
    })
})


module.exports = router;
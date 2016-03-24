var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title: {
        type: String
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }],
    data: {}

});

mongoose.model('Classrooms', schema);
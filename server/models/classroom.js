"use strict";


module.exports = function(sequelize, DataTypes) {
    var Classroom = sequelize.define("Classroom", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
        tableName: 'Classroom'
    });

    return Classroom;
}
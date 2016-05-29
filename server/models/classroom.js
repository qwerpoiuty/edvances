"use strict";


module.exports = function(sequelize, DataTypes) {
    var Classroom = sequelize.define("Classroom", {
        classroom_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        start: {
            type: DataTypes.DATE
        },
        end: {
            type: DataTypes.DATE
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        blocks: {
            type: DataTypes.ARRAY(DataTypes.INTEGER)
        }
    }, {
        classMethods: {
            associate: function(models) {
                Classroom.hasMany(models.Document)
                Classroom.hasMany(models.Calendar)
            }
        }
    }, {
        tableName: 'Classroom'
    });

    return Classroom;
}
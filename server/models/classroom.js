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
        teacher: {
            type: DataTypes.INTEGER
        },
        students: {
            type: DataTypes.ARRAY(DataTypes.INTEGER)
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        description: {
            type: DataTypes.TEXT
        }
    }, {
        classMethods: {
            associate: function(models) {
                Classroom.hasMany(models.Document)
                Classroom.hasMany(models.Calendar, {
                    foreignKey: 'classroom_hasMany_blocks'
                })
            }
        }
    }, {
        tableName: 'Classroom'
    });

    return Classroom;
}
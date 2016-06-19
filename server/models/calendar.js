"use strict"

module.exports = function(sequelize, DataTypes) {
    var Calendar = sequelize.define("Calendar", {
        calendar_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DATE
        },
        block: {
            type: DataTypes.INTEGER
        },
        year: {
            type: DataTypes.INTEGER
        },
        month: {
            type: DataTypes.INTEGER
        },
        day: {
            type: DataTypes.INTEGER
        }
    }, {
        classMethods: {
            associate: function(models) {
                Calendar.belongsToMany(models.Classroom, {
                    through: 'schedule',
                })
            }
        }
    });
    return Calendar;
}
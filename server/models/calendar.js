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
        year: {
            type: DataTypes.INTEGER
        },
        month: {
            type: DataTypes.INTEGER
        },
        day: {
            type: DataTypes.INTEGER
        },
        weekday: {
            type: DataTypes.INTEGER
        }
    });
    return Calendar;
}
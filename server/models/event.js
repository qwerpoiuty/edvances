"use strict";


module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
        event_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        startdate: DataTypes.DATE,
        enddate: DataTypes.DATE,
        repeat: DataTypes.INTEGER,
        description: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function(models) {
                Event.belongsTo(models.Calendar, {
                    foreignKey: {
                        allowNull: false
                    }
                })

            }
        }
    }, {
        tableName: 'Event'
    });
    return Event;
}
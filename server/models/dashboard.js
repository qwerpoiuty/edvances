"use strict";


module.exports = function(sequelize, DataTypes) {
    var Dashboard = sequelize.define("Dashboard", {
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        events: DataTypes.ARRAY(DataTypes.STRING),
        todo: DataTypes.ARRAY(DataTypes.STRING)
    }, {
        tableName: 'Dashboard'
    });

    return Dashboard;
}
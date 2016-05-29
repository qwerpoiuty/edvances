"use strict";


module.exports = function(sequelize, DataTypes) {
    var Dashboard = sequelize.define("Dashboard", {
        dashboard_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        todo: DataTypes.ARRAY(DataTypes.STRING)
    }, {
        classMethods: {
            associate: function(models) {
                Dashboard.belongsTo(models.User, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false,
                        as: 'id'
                    }
                })
            }
        }
    }, {
        tableName: 'Dashboard '
    });

    return Dashboard;
}
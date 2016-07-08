"use strict";


module.exports = function(sequelize, DataTypes) {
    var verifiedTeachers = sequelize.define("verifiedTeachers", {
        teacher_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        verifier: DataTypes.INTEGER,
        notes: DataTypes.STRING
    }, {
        tableName: 'verifiedTeachers'
    });

    return verifiedTeachers;
}
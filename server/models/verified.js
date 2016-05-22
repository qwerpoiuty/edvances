"use strict";


module.exports = function(sequelize, DataTypes) {
    var verifiedTeachers = sequelize.define("verifiedTeachers", {
        teacher_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        verifier: DataTypes.STRING,
        notes: DataTypes.STRING
    }, {
        tableName: 'verifiedTeachers'
    });

    return verifiedTeachers;
}
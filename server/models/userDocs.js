"use strict";


module.exports = function(sequelize, DataTypes) {
    var userDocs = sequelize.define("userDocs", {
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: DataTypes.STRING,
        doc: DataTypes.BLOB
    }, {
        tableName: 'userDocs'
    });

    return userDocs;
}
"use strict";


module.exports = function(sequelize, DataTypes) {
    var Document = sequelize.define("Document", {
        doc_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        origin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: DataTypes.STRING,
        doc: DataTypes.BLOB
    }, {
        classMethods: {
            associate: function(models) {
                Document.belongsTo(models.User)
            }
        }
    }, {
        tableName: 'Document'
    });

    return Document;
}
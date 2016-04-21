"use strict";
var bcrypt = require('bcrypt')
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        salt: {
            type: DataTypes.STRING
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        title: DataTypes.STRING,
        statement: DataTypes.STRING,
        area: DataTypes.STRING,
        grades: DataTypes.ARRAY(DataTypes.STRING),
        dob: DataTypes.DATEONLY,
        years: DataTypes.INTEGER,
        education: DataTypes.ARRAY(DataTypes.STRING),
        documents: DataTypes.ARRAY(DataTypes.BLOB),
        photo: DataTypes.BLOB,
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        notes: DataTypes.STRING

    }, {
        instanceMethods: {
            validPassword: function(password) {
                return bcrypt.compareSync(password, this.password, this.salt);
            },
            getFullName: function() {
                return this.firstName + " " + this.lastName
            }
        }
    });

    User.beforeCreate(function(user) {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(user.password, salt);
        user.password = hash;
        user.salt = salt
    });


    return User;
};
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
        summary: DataTypes.STRING,
        subjectArea: DataTypes.ARRAY(DataTypes.STRING),
        gradeLevels: DataTypes.ARRAY(DataTypes.INTEGER),
        dob: DataTypes.DATEONLY,
        years: DataTypes.INTEGER,
        education: DataTypes.ARRAY(DataTypes.STRING),
        documents: DataTypes.ARRAY(DataTypes.BLOB),
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }

    }, {
        instanceMethods: {
            validPassword: function(password) {
                console.log(bcrypt.compareSync(password, this.password, this.salt))
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
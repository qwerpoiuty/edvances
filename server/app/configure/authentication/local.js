'use strict';
var passport = require('passport');
var _ = require('lodash');
var LocalStrategy = require('passport-local').Strategy;
var models = require('../../../models/')
var bcrypt = require('bcrypt')
var chalk = require('chalk')
module.exports = function(app) {

    // When passport.authenticate('local') is used, this function will receive
    // the email and password to run the actual authentication logic.
    var strategyFn = function(email, password, done) {
        console.log(chalk.red(email))
        models.User.findOne({
            where: {
                email: email
            }
        })
            .then(function(user) {
                if (!user || !user.validPassword(password)) {
                    done(null, false);
                } else {
                    // Properly authenticated.
                    done(null, user);
                }
            }, function(err) {
                done(err);
            });
    };

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, strategyFn));


    // A POST /login route is created to handle login.
    app.post('/login', function(req, res, next) {

        var authCb = function(err, user) {
            if (err) return next(err);

            if (!user) {
                var error = new Error('Invalid login credentials.');
                error.status = 401;
                return next(error);
            }

            // req.logIn will establish our session.
            req.logIn(user, function(loginErr) {
                console.log(user)
                if (loginErr) return next(loginErr);
                // We respond with a response object that has user with _id and email.
                res.status(200).send({
                    user: _.omit(user.toJSON(), ['password', 'salt'])
                });
            });

        };

        passport.authenticate('local', authCb)(req, res, next);

    });

    app.post('/signup', function(req, res, next) {
        // models.User.findOne({
        //     email: req.body.email
        // }, function(err, user) {
        //     if (!user) {
        models.User.create(req.body).then(function(user) {
            res.json(user);
        });
        // models.User.findAll().then(function(users) {
        //     console.log(users)
        // })
        //     } else {
        //         res.send(500);
        //     }
        // })
    });




};
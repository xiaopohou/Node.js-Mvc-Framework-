var express = require('express');
var app = express();
import MainController = require('../Controllers/MainController');
var Main = new MainController.MainController();


app.get('/', function (req, res) {
    Main.Home.IndexAction(req, res);
});


app.get('/:Controller', function (req, res) {
    Main.Manage(req, res);
});

app.get('/:Controller/:Action', function (req, res) {
    Main.Manage(req, res);
});

app.get('/:Controller/:Action/:Params', function (req, res) {
    Main.Manage(req, res);
});


//404
app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !');
});

module.exports.app = app;
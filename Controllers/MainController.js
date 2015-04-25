var HomController = require('./Controller/HomeController');

var MainController = (function () {
    function MainController() {
        this.Home = new HomController.HomeController();
    }
    MainController.prototype.isDefined = function (x) {
        var undefined;
        return x !== undefined;
    };

    MainController.prototype.Manage = function (req, res) {
        try  {
            var Type = require('./Controller/' + req.params.Controller + 'Controller.js')['' + req.params.Controller + 'Controller'];
            var Controller = new Type();
            var Action = req.params.Action;
            if (this.isDefined(Action)) {
                if (Action != 'Index') {
                    //SI Laction est un Param DONC ON APPELE LACTION
                    if (Controller.__proto__.hasOwnProperty(Action + "Action")) {
                        Controller[Action + "Action"](req, res);
                    } else {
                        req.params.Params = Action;
                        Controller.IndexAction(req, res);
                    }
                } else {
                    Controller.IndexAction(req, res);
                }
            } else {
                Controller.IndexAction(req, res);
            }
        } catch (e) {
            res.setHeader('Content-Type', 'text/plain');
            res.send(404, 'Page introuvable !');
        }
    };
    return MainController;
})();
exports.MainController = MainController;
//# sourceMappingURL=MainController.js.map

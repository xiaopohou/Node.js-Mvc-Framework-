

import HomController = require('./Controller/HomeController');

export class MainController {


    Home = new HomController.HomeController();

    isDefined(x) {
        var undefined;
        return x !== undefined;
    }


    Manage(req, res)
    {
        try {
            var Type = require('./Controller/' + req.params.Controller + 'Controller.js')['' + req.params.Controller + 'Controller'];
            var Controller = new Type();
            var Action = req.params.Action;
            if (this.isDefined(Action)) {
                if (Action != 'Index') {
                    //SI Laction est un Param DONC ON APPELE LACTION
                    if (Controller.__proto__.hasOwnProperty(Action + "Action")) {
                        Controller[Action + "Action"](req, res);
                    }
                    else {// SINON ON APPELE LINDEX DU CONTROLLER PAR DEFAUT AVEC DES PARAMETRE
                        req.params.Params = Action;
                        Controller.IndexAction(req, res);
                    }
                }
                else {
                    Controller.IndexAction(req, res);
                }
            }
            else {
                Controller.IndexAction(req, res);
            }
        }
        catch (e) {
            res.setHeader('Content-Type', 'text/plain');
            res.send(404, 'Page introuvable !');
        }
    }
}


  




import ControllerInterface = require("./ControllerInterface");
import Class = require("../../Model/User");

export class UserController extends ControllerInterface.MainInterface {

        public User: Class.User;
        constructor() {
            super();
        }

        IndexAction(req, res) {
            this.User = new Class.User("MonNom", "MonPrénom");
            req.Params.Id = 0;
            this.View(req,res, this.User);
        }

        GetAction(req, res) {
            this.View(req, res);
        }
        
}


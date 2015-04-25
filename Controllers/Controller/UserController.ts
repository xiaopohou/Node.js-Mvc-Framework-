
import ControllerInterface = require("./ControllerInterface");
import Class = require("../../Model/User");
import Connexion = require("../../node_modules/libColbeaf/Connexion");

export class UserController extends ControllerInterface.MainInterface {

        public User: Class.User;
        constructor() {
            super();
        }

        IndexAction(req, res) {
            this.User = new Class.User("MonNom", "MonPrénom");
            this.User.Read(1, new Connexion.Connexion());
            this.View(req,res,this.User);
        }

        GetAction(req, res) {
            this.View(req, res);
        }
        
}



import ControllerInterface = require("./ControllerInterface");
import Class = require("../../Model/User");
import Connexion = require("../../Utils/libColbeaf/Connexion");
import EventEmitter = require('events');

export class UserController extends ControllerInterface.MainInterface {

        public User: Class.User;
        constructor() {
            super();
        }

        IndexAction(req, res) {
            this.User = new Class.User();
            this.User.Read(1);
            var obj = this;
            this.User.on("Read", function () {
                obj.View(req, res, obj.User);
            });
            
        }

        GetAction(req, res) {
            this.View(req, res);
        }
        
}


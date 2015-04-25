import ControllerInterface = require("./ControllerInterface");
export class HomeController extends ControllerInterface.MainInterface {

    constructor() {
        super();
    }

    IndexAction(req, res) {
        this.View(req, res);
    }


    NouvelleAction(req, res) {
        this.View(req, res);
    }
    }


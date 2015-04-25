var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ControllerInterface = require("./ControllerInterface");
var HomeController = (function (_super) {
    __extends(HomeController, _super);
    function HomeController() {
        _super.call(this);
    }
    HomeController.prototype.IndexAction = function (req, res) {
        this.View(req, res);
    };

    HomeController.prototype.NouvelleAction = function (req, res) {
        this.View(req, res);
    };
    return HomeController;
})(ControllerInterface.MainInterface);
exports.HomeController = HomeController;
//# sourceMappingURL=HomeController.js.map

﻿var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ControllerInterface = require("./ControllerInterface");
var Class = require("../../Model/User");

var UserController = (function (_super) {
    __extends(UserController, _super);
    function UserController() {
        _super.call(this);
    }
    UserController.prototype.IndexAction = function (req, res) {
        this.User = new Class.User();
        this.User.Read(1);
        var obj = this;
        this.User.on("Read", function () {
            obj.View(req, res, obj.User);
        });
    };

    UserController.prototype.GetAction = function (req, res) {
        this.View(req, res);
    };
    return UserController;
})(ControllerInterface.MainInterface);
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map

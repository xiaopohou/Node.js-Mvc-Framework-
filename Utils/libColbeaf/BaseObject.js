var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Connexion = require("./Connexion");
var EventEmitter = require('events');

var BaseObject = (function (_super) {
    __extends(BaseObject, _super);
    function BaseObject() {
        _super.call(this);
        this.Params = {};
    }
    BaseObject.prototype.GetClassName = function () {
        return this["__proto__"].constructor.name;
    };

    BaseObject.prototype.Read = function (id) {
        var conn = new Connexion.Connexion();
        this.Sql = "SELECT * FROM " + this.GetClassName() + " WHERE Id = ? ;";
        this.Params = [id];
        var obj = this;
        conn.on("ExecuteRequete", function (result) {
            for (var key in result[0]) {
                obj[key] = result[0][key];
            }
            obj.emit("Read");
        });
        conn.ExecuteRequete(this.Sql, this.Params);

        this.on("Read", function () {
        });
    };

    BaseObject.prototype.SaveOrUpdate = function (obj) {
    };

    BaseObject.prototype.Delete = function (id) {
    };
    return BaseObject;
})(EventEmitter.EventEmitter);
exports.BaseObject = BaseObject;
//# sourceMappingURL=BaseObject.js.map

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Config = require("./WebConfig");
var EventEmitter = require('events');

(function (ConnectorType) {
    ConnectorType[ConnectorType["MySql"] = 0] = "MySql";
    ConnectorType[ConnectorType["MongoDb"] = 1] = "MongoDb";
})(exports.ConnectorType || (exports.ConnectorType = {}));
var ConnectorType = exports.ConnectorType;
;
var Connexion = (function (_super) {
    __extends(Connexion, _super);
    //public Obj: { [id: number]: { [id: string]: string; }; } = {};
    // this.Obj[0] = { "Champ": "Value" };
    function Connexion() {
        _super.call(this);
        switch (Config.Orm.Connector) {
            case "MySql":
                this.Type = Config.Orm.Connector;
                var mysql = require('mysql');
                this.Session = mysql.createConnection({
                    host: Config.Orm.host,
                    database: Config.Orm.database,
                    user: Config.Orm.user,
                    password: Config.Orm.password
                });
                break;
        }
    }
    Connexion.prototype.ExecuteRequete = function (Req, Params) {
        var Obj = {};
        switch (Config.Orm.Connector) {
            case "MySql":
                var conn = this;
                this.Session.connect(function (err) {
                    if (err) {
                        console.error('error connecting: ' + err.stack);
                        return;
                    }
                });
                this.Session.query(Req, [Params], function (err, rows, fields) {
                    if (err) {
                        return;
                    }
                    for (var index = rows.length - 1; index >= 0; --index) {
                        Obj[index] = rows[index];
                    }
                    conn.emit('ExecuteRequete', Obj);
                });
                this.Session.end();

                break;
        }
    };
    return Connexion;
})(EventEmitter.EventEmitter);
exports.Connexion = Connexion;
//# sourceMappingURL=Connexion.js.map

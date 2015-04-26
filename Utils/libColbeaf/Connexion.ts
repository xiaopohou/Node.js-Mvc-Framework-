
var Config = require("./WebConfig");
import EventEmitter = require('events');

export enum ConnectorType { MySql, MongoDb };    
export class Connexion  extends EventEmitter.EventEmitter{
        
    public Type: ConnectorType;
    public Session: any;
    //public Obj: { [id: number]: { [id: string]: string; }; } = {};
    // this.Obj[0] = { "Champ": "Value" };
    constructor() {
        super();
        switch (Config.Orm.Connector) {
            
            //If MySqlDriver
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


    ExecuteRequete(Req: string, Params: {}) {
        var Obj: { [id: number]: { [id: string]: string; }; } = {};
        switch (Config.Orm.Connector) {
            //If MySqlDriver
            case "MySql":
                var conn = this;
                this.Session.connect(function (err) {
                    if (err) {
                        console.error('error connecting: ' + err.stack);
                        return;
                    }
                });
                this.Session.query(Req, [Params] , function (err, rows, fields) {
                    if (err) { return; }
                    for (var index = rows.length - 1; index >= 0; --index) {//POUR CHAQUE LIGNE
                        Obj[index] = rows[index];
                    }
                   conn.emit('ExecuteRequete', Obj);
                });
                this.Session.end();

                break;
        }
    }
}
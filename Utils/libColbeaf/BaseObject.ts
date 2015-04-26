import Connexion = require("./Connexion");
import EventEmitter = require('events');

export class BaseObject<T> extends EventEmitter.EventEmitter {
    constructor()
    {
        super();   
    }
    public Id: number;

    private  GetClassName(){
        return this["__proto__"].constructor.name;
    }
    private Params =  {};
    private Sql: string;

    Read(id: any)  {
        var conn = new Connexion.Connexion();
        this.Sql = "SELECT * FROM "+this.GetClassName()+" WHERE Id = ? ;";
        this.Params = [id];
        var obj = this;
        conn.on("ExecuteRequete", function (result) {
            //PUISQUE READ result[0]
            for (var key in result[0]) {
                obj[key] = result[0][key];
            }
            obj.emit("Read");
        });
        conn.ExecuteRequete(this.Sql, this.Params);

        this.on("Read", function () {
            
        });

        
    }



    SaveOrUpdate(obj: T) {

    }

    Delete(id: any)
    {
    }
}


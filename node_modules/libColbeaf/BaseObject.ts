import Connexion = require("./Connexion");

export class BaseObject<T> {
    private  GetClassName(){
        return this["__proto__"].constructor.name;
    }



    Read(id: any, connexion : Connexion.Connexion) {
        connexion.Connexion.connect(function (err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }

            console.log('connected as id ' + connexion.Connexion.threadId);
        });
        connexion.Connexion.query("SELECT * FROM "+ this.GetClassName()+ " WHERE Id = " + id + ";", function (err, rows, fields) {
            if (err) {
                return;
            }
            var a = "";
        });
        connexion.Connexion.end();
    }

    SaveOrUpdate(obj: T) {

    }

    Delete(id: any)
    {
    }
}


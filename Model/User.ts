import LibColbeaf = require("../Utils/libColbeaf/BaseObject");

export class User extends LibColbeaf.BaseObject<User> {
    public Nom: string;
    public Prenom: string;
    constructor() {
        super();
        this.Nom = "";
        this.Prenom = "";
    }
    
}


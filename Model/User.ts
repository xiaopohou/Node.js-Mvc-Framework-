import LibColbeaf = require("../Utils/libColbeaf/BaseObject");

export class User extends LibColbeaf.BaseObject<User> {
    Nom: string;
    Prenom: string;
    constructor(public N, public P) {
        super();
        this.Nom = N;
        this.Prenom = P;
    }
}


var mysql = require('mysql');

export class Connexion {

    public Connexion: any;
    constructor() {
        this.Connexion = mysql.createConnection({
            host: 'localhost',
            database: 'node.js',
            user: 'root',
            password: ''
        });
    }

    
}
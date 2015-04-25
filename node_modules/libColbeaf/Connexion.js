var mysql = require('mysql');

var Connexion = (function () {
    function Connexion() {
        this.Connexion = mysql.createConnection({
            host: 'localhost',
            database: 'node.js',
            user: 'root',
            password: ''
        });
    }
    return Connexion;
})();
exports.Connexion = Connexion;
//# sourceMappingURL=Connexion.js.map

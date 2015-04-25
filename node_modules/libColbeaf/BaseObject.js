var BaseObject = (function () {
    function BaseObject() {
    }
    BaseObject.prototype.GetClassName = function () {
        return this["__proto__"].constructor.name;
    };

    BaseObject.prototype.Read = function (id, connexion) {
        connexion.Connexion.connect(function (err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }

            console.log('connected as id ' + connexion.Connexion.threadId);
        });
        connexion.Connexion.query("SELECT * FROM " + this.GetClassName() + " WHERE Id = " + id + ";", function (err, rows, fields) {
            if (err) {
                return;
            }
            var a = "";
        });
        connexion.Connexion.end();
    };

    BaseObject.prototype.SaveOrUpdate = function (obj) {
    };

    BaseObject.prototype.Delete = function (id) {
    };
    return BaseObject;
})();
exports.BaseObject = BaseObject;
//# sourceMappingURL=BaseObject.js.map

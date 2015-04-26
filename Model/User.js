var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LibColbeaf = require("../Utils/libColbeaf/BaseObject");

var User = (function (_super) {
    __extends(User, _super);
    function User(N, P) {
        _super.call(this);
        this.N = N;
        this.P = P;
        this.Nom = N;
        this.Prenom = P;
    }
    return User;
})(LibColbeaf.BaseObject);
exports.User = User;
//# sourceMappingURL=User.js.map

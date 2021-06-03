"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Server = /** @class */ (function () {
    function Server(port) {
        this.port = port;
    }
    Server.prototype.start = function () {
        var app = express_1.default();
        app.get('/', function (req, res) {
            res.send('Hello world');
        });
        app.listen(this.port, function () {
            console.log('serveur start');
        });
    };
    return Server;
}());
exports.default = Server;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeLog = writeLog;
const date_fns_1 = require("date-fns");
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const PATH_LOGS = path_1.default.join(__dirname, "logs.txt");
function writeLog(msg, id = 0) {
    if (id === 0) {
        fs_1.promises.writeFile(PATH_LOGS, `${msg} -> ${(0, date_fns_1.format)(new Date(), "dd-MM-yyy h:mm:ss")}\n`, {
            flag: "a",
        });
    }
    else {
        fs_1.promises.writeFile(PATH_LOGS, `${msg} ${id} -> ${(0, date_fns_1.format)(new Date(), "dd-MM-yyy h:mm:ss")}\n`, {
            flag: "a",
        });
    }
}
//# sourceMappingURL=utils.js.map
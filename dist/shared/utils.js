"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePasswords = void 0;
const bcrypt = require("bcryptjs");
exports.comparePasswords = async (userPassword, currentPassword) => {
    return await bcrypt.compare(currentPassword, userPassword);
};
//# sourceMappingURL=utils.js.map
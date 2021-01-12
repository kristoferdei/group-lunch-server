"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUserDto = void 0;
exports.toUserDto = (data) => {
    const { id, username, fullName, email } = data;
    return { id, username, fullName, email };
};
//# sourceMappingURL=mapper.js.map
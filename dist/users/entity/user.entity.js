"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersEntity = void 0;
const typeorm_1 = require("typeorm");
const bcrypt = require("bcryptjs");
let UsersEntity = class UsersEntity {
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], UsersEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false, unique: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], UsersEntity.prototype, "fullName", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], UsersEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], UsersEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], UsersEntity.prototype, "createdOn", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], UsersEntity.prototype, "updatedOn", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersEntity.prototype, "hashPassword", null);
UsersEntity = __decorate([
    typeorm_1.Entity('users')
], UsersEntity);
exports.UsersEntity = UsersEntity;
//# sourceMappingURL=user.entity.js.map
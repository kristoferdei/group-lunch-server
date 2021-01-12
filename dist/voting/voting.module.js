"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotingModule = void 0;
const common_1 = require("@nestjs/common");
const voting_service_1 = require("./voting.service");
const voting_controller_1 = require("./voting.controller");
const voting_entity_1 = require("./entity/voting.entity");
const typeorm_1 = require("@nestjs/typeorm");
let VotingModule = class VotingModule {
};
VotingModule = __decorate([
    common_1.Module({
        controllers: [voting_controller_1.VotingController],
        providers: [voting_service_1.VotingService],
        imports: [typeorm_1.TypeOrmModule.forFeature([voting_entity_1.Voting])]
    })
], VotingModule);
exports.VotingModule = VotingModule;
//# sourceMappingURL=voting.module.js.map
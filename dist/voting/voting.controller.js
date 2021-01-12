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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotingController = void 0;
const common_1 = require("@nestjs/common");
const voting_service_1 = require("./voting.service");
const create_voting_dto_1 = require("./dto/create-voting.dto");
let VotingController = class VotingController {
    constructor(votingService) {
        this.votingService = votingService;
    }
    async getAll() {
        return await this.votingService.getAll();
    }
    async getOne(votingId) {
        return await this.votingService.getOne(votingId);
    }
    async createOne(createVotingDto) {
        return await this.votingService.createOne(createVotingDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VotingController.prototype, "getAll", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VotingController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_voting_dto_1.CreateVotingDto]),
    __metadata("design:returntype", Promise)
], VotingController.prototype, "createOne", null);
VotingController = __decorate([
    common_1.Controller('voting'),
    __metadata("design:paramtypes", [voting_service_1.VotingService])
], VotingController);
exports.VotingController = VotingController;
//# sourceMappingURL=voting.controller.js.map
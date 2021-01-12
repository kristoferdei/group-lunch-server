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
var VotingService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const voting_entity_1 = require("./entity/voting.entity");
const voting_dto_1 = require("./dto/voting.dto");
let VotingService = VotingService_1 = class VotingService {
    constructor(votingRepository) {
        this.votingRepository = votingRepository;
    }
    async getOne(taskId) {
        const voting = await this.votingRepository.findOne(taskId);
        if (!voting)
            throw new common_1.NotFoundException(`Voting with the id ${taskId} was not found`);
        return VotingService_1.entityToDTO(voting);
    }
    async createOne(createVotingRequest) {
        const voting = new voting_entity_1.Voting();
        voting.restaurant = createVotingRequest.restaurant;
        voting.user = createVotingRequest.user;
        await this.votingRepository.save(voting);
        return VotingService_1.entityToDTO(voting);
    }
    static entityToDTO(voting) {
        const votingDto = new voting_dto_1.VotingDto();
        votingDto.id = voting.id;
        votingDto.restaurant = voting.restaurant;
        votingDto.user = voting.user;
        return votingDto;
    }
    async getAll() {
        const votings = await this.votingRepository.find();
        return votings.map(x => VotingService_1.entityToDTO(x));
    }
};
VotingService = VotingService_1 = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(voting_entity_1.Voting)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], VotingService);
exports.VotingService = VotingService;
//# sourceMappingURL=voting.service.js.map
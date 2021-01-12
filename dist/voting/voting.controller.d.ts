import { VotingService } from './voting.service';
import { CreateVotingDto } from './dto/create-voting.dto';
export declare class VotingController {
    private readonly votingService;
    constructor(votingService: VotingService);
    getAll(): Promise<any>;
    getOne(votingId: number): Promise<any>;
    createOne(createVotingDto: CreateVotingDto): Promise<any>;
}

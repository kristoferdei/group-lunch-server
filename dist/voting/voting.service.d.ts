import { Repository } from 'typeorm';
import { Voting } from './entity/voting.entity';
import { CreateVotingDto } from './dto/create-voting.dto';
export declare class VotingService {
    private votingRepository;
    constructor(votingRepository: Repository<Voting>);
    getOne(taskId: number): Promise<any>;
    createOne(createVotingRequest: CreateVotingDto): Promise<any>;
    private static entityToDTO;
    getAll(): Promise<any>;
}

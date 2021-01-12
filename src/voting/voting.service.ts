import { Injectable, NotFoundException } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Voting } from './entity/voting.entity'
import { VotingDto } from './dto/voting.dto'
import { CreateVotingDto } from './dto/create-voting.dto'

@Injectable()
export class VotingService {
  constructor(@InjectRepository(Voting) private votingRepository: Repository<Voting>) {}

  public async getOne(taskId: number): Promise<any> {
    const voting: Voting = await this.votingRepository.findOne(taskId)

    if (!voting) throw new NotFoundException(`Voting with the id ${taskId} was not found`)

    return VotingService.entityToDTO(voting)
  }

  public async createOne(createVotingRequest: CreateVotingDto): Promise<any> {
    const voting: Voting = new Voting()
    voting.restaurant = createVotingRequest.restaurant
    voting.user = createVotingRequest.user

    await this.votingRepository.save(voting)

    return VotingService.entityToDTO(voting)
  }

  private static entityToDTO(voting: Voting): VotingDto {
    const votingDto = new VotingDto()
    votingDto.id = voting.id
    votingDto.restaurant = voting.restaurant
    votingDto.user = voting.user

    return votingDto
  }

  public async getAll(): Promise<any> {
    const votings: Voting[] = await this.votingRepository.find()

    return votings.map(x => VotingService.entityToDTO(x))
  }
}

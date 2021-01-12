import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { VotingService } from './voting.service'
import { CreateVotingDto } from './dto/create-voting.dto'

@Controller('voting')
export class VotingController {
  constructor(private readonly votingService: VotingService) {}

  @Get()
  public async getAll(): Promise<any> {
    return await this.votingService.getAll()
  }

  @Get('/:id')
  public async getOne(@Param('id') votingId: number): Promise<any> {
    return await this.votingService.getOne(votingId)
  }

  @Post()
  public async createOne(@Body() createVotingDto: CreateVotingDto): Promise<any> {
    return await this.votingService.createOne(createVotingDto)
  }
}

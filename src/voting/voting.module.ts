import { Module } from '@nestjs/common'
import { VotingService } from './voting.service'
import { VotingController } from './voting.controller'
import { Voting } from './entity/voting.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  controllers: [VotingController],
  providers: [VotingService],
  imports: [TypeOrmModule.forFeature([Voting])]
})
export class VotingModule {}

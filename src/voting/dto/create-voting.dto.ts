import { IsNotEmpty } from 'class-validator'

export class CreateVotingDto {
  @IsNotEmpty()
  restaurant: string

  @IsNotEmpty()
  user: string
}

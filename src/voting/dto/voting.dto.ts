import { IsNotEmpty } from 'class-validator'

export class VotingDto {
  @IsNotEmpty()
  id: number

  @IsNotEmpty()
  restaurant: string

  @IsNotEmpty()
  user: string
}

import { IsNotEmpty, IsEmail } from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty()
  username: string

  @IsNotEmpty()
  password: string

  @IsNotEmpty()
  fullName: string

  @IsNotEmpty()
  @IsEmail()
  email: string
}

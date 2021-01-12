import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { UsersEntity } from './entity/user.entity'
import { UserDto } from './dto/user.dto'
import { toUserDto } from '../shared/mapper'
import { LoginUserDto } from './dto/user-login.dto'
import { CreateUserDto } from './dto/user.create.dto'
import { comparePasswords } from '../shared/utils'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepo: Repository<UsersEntity>
  ) {}

  async findOne(options?: object): Promise<UserDto> {
    const user = await this.userRepo.findOne(options)
    return toUserDto(user)
  }

  async findByLogin({ username, password }: LoginUserDto): Promise<UserDto> {
    const user = await this.userRepo.findOne({ where: { username } })

    if (!user) {
      throw new HttpException('User not found', HttpStatus.FORBIDDEN)
    }

    const areEqual = await comparePasswords(user.password, password)

    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED)
    }

    return toUserDto(user)
  }

  async findByPayload({ username }: any): Promise<UserDto> {
    return await this.findOne({ where: { username } })
  }

  async create(userDto: CreateUserDto): Promise<UserDto> {
    const { username, fullName, password, email } = userDto

    const userInDb = await this.userRepo.findOne({ where: { username } })
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST)
    }

    const user: UsersEntity = await this.userRepo.create({
      username,
      fullName,
      password,
      email
    })

    await this.userRepo.save(user)

    return toUserDto(user)
  }
}

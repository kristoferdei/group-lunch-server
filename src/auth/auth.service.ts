import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '../users/users.service'
import { CreateUserDto } from '../users/dto/user.create.dto'
import { RegistrationStatus } from './interfaces/regisration-status.interface'
import { LoginUserDto } from '../users/dto/user-login.dto'
import { LoginStatus } from './interfaces/login-status.interface'
import { UserDto } from '../users/dto/user.dto'
import { JwtPayload } from './interfaces/payload.interface'

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

  async register(userDto: CreateUserDto): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      success: true,
      message: 'user registered'
    }

    try {
      await this.usersService.create(userDto)
    } catch (err) {
      status = {
        success: false,
        message: err
      }
    }

    return status
  }

  async login(loginUserDto: LoginUserDto): Promise<LoginStatus> {
    const user = await this.usersService.findByLogin(loginUserDto)

    const token = this._createToken(user)

    return {
      username: user.username,
      fullName: user.fullName,
      email: user.email,
      ...token
    }
  }

  async validateUser(payload: JwtPayload): Promise<UserDto> {
    const user = await this.usersService.findByPayload(payload)
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED)
    }
    return user
  }

  private _createToken({ username, fullName, email }: UserDto): any {
    const expiresIn = process.env.EXPIRESIN

    const user: JwtPayload = { username, fullName, email }
    const accessToken = this.jwtService.sign(user)
    return {
      expiresIn,
      accessToken
    }
  }
}

import { Body, Controller, Get, HttpException, HttpStatus, Post, Req, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { RegistrationStatus } from './interfaces/regisration-status.interface'
import { CreateUserDto } from '../users/dto/user.create.dto'
import { LoginUserDto } from '../users/dto/user-login.dto'
import { LoginStatus } from './interfaces/login-status.interface'
import { JwtPayload } from './interfaces/payload.interface'
import { AuthGuard } from '@nestjs/passport'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  public async register(@Body() createUserDto: CreateUserDto): Promise<RegistrationStatus> {
    const result: RegistrationStatus = await this.authService.register(createUserDto)

    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST)
    }

    return result
  }

  @Post('login')
  public async login(@Body() loginUserDto: LoginUserDto): Promise<LoginStatus> {
    return await this.authService.login(loginUserDto)
  }

  @Get('WhoAmI')
  @UseGuards(AuthGuard())
  public async testAuth(@Req() req: any): Promise<JwtPayload> {
    return req.user
  }
}

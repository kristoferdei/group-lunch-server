import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/user.create.dto';
import { RegistrationStatus } from './interfaces/regisration-status.interface';
import { LoginUserDto } from '../users/dto/user-login.dto';
import { LoginStatus } from './interfaces/login-status.interface';
import { UserDto } from '../users/dto/user.dto';
import { JwtPayload } from './interfaces/payload.interface';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(userDto: CreateUserDto): Promise<RegistrationStatus>;
    login(loginUserDto: LoginUserDto): Promise<LoginStatus>;
    validateUser(payload: JwtPayload): Promise<UserDto>;
    private _createToken;
}

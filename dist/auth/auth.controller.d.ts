import { AuthService } from './auth.service';
import { RegistrationStatus } from './interfaces/regisration-status.interface';
import { CreateUserDto } from '../users/dto/user.create.dto';
import { LoginUserDto } from '../users/dto/user-login.dto';
import { LoginStatus } from './interfaces/login-status.interface';
import { JwtPayload } from './interfaces/payload.interface';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createUserDto: CreateUserDto): Promise<RegistrationStatus>;
    login(loginUserDto: LoginUserDto): Promise<LoginStatus>;
    testAuth(req: any): Promise<JwtPayload>;
}

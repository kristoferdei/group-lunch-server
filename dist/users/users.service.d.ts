import { Repository } from 'typeorm';
import { UsersEntity } from './entity/user.entity';
import { UserDto } from './dto/user.dto';
import { LoginUserDto } from './dto/user-login.dto';
import { CreateUserDto } from './dto/user.create.dto';
export declare class UsersService {
    private readonly userRepo;
    constructor(userRepo: Repository<UsersEntity>);
    findOne(options?: object): Promise<UserDto>;
    findByLogin({ username, password }: LoginUserDto): Promise<UserDto>;
    findByPayload({ username }: any): Promise<UserDto>;
    create(userDto: CreateUserDto): Promise<UserDto>;
}

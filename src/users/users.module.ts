import { Module } from '@nestjs/common'
import { UsersEntity } from './entity/user.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersService } from './users.service'

@Module({ imports: [TypeOrmModule.forFeature([UsersEntity])], providers: [UsersService], exports: [UsersService] })
export class UsersModule {}

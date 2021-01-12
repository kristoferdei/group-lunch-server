import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseConnectionService } from './database-connection.service'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { RestaurantsModule } from './restaurants/restaurants.module'
import { VotingModule } from './voting/voting.module'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService
    }),
    UsersModule,
    AuthModule,
    RestaurantsModule,
    VotingModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

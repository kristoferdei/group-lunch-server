import { Module } from '@nestjs/common'
import { RestaurantsController } from './restaurants.controller'
import { RestaurantsService } from './restaurants.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Restaurant } from './entity/restaurant.entity'

@Module({
  controllers: [RestaurantsController],
  providers: [RestaurantsService],
  imports: [TypeOrmModule.forFeature([Restaurant])]
})
export class RestaurantsModule {}

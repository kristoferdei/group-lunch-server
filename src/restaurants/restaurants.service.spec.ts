import { Test, TestingModule } from '@nestjs/testing'
import { RestaurantsService } from './restaurants.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Restaurant } from './entity/restaurant.entity'

describe('RestaurantService', () => {
  let service: RestaurantsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([Restaurant])],
      providers: [RestaurantsService]
    }).compile()

    service = module.get<RestaurantsService>(RestaurantsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})

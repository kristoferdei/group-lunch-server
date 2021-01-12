import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common'
import { RestaurantsService } from './restaurants.service'
import { CreateRestaurantDto } from './dto/create-restaurant.dto'
import { UpdateRestaurantDto } from './dto/update-restaurant.dto'

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Get()
  public async getAll(): Promise<any> {
    return await this.restaurantsService.getAll()
  }

  @Get('/:id')
  public async getOne(@Param('id') restaurantId: number): Promise<any> {
    return await this.restaurantsService.getOne(restaurantId)
  }

  @Post()
  public async createOne(@Body() createRestaurantRequest: CreateRestaurantDto): Promise<any> {
    return await this.restaurantsService.createOne(createRestaurantRequest)
  }

  @Put('/:id')
  public async updateOne(@Param('id') restaurantId: number, @Body() updateTaskRequest: UpdateRestaurantDto): Promise<any> {
    return await this.restaurantsService.updateOne(restaurantId, updateTaskRequest)
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async deleteOne(@Param('id') restaurantId: number): Promise<void> {
    await this.restaurantsService.deleteOne(restaurantId)
  }
}

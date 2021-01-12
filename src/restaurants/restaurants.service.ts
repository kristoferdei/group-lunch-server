import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Restaurant } from './entity/restaurant.entity'
import { Repository } from 'typeorm'
import { CreateRestaurantDto } from './dto/create-restaurant.dto'
import { RestaurantDto } from './dto/restaurant.dto'
import { UpdateRestaurantDto } from './dto/update-restaurant.dto'

@Injectable()
export class RestaurantsService {
  constructor(@InjectRepository(Restaurant) private restaurantRepository: Repository<Restaurant>) {}

  public async getOne(taskId: number): Promise<any> {
    const restaurant: Restaurant = await this.restaurantRepository.findOne(taskId)

    if (!restaurant) throw new NotFoundException(`Task with the id ${taskId} was not found`)

    return RestaurantsService.entityToDTO(restaurant)
  }

  public async createOne(createRestaurantRequest: CreateRestaurantDto): Promise<any> {
    const restaurant: Restaurant = new Restaurant()
    restaurant.name = createRestaurantRequest.name
    restaurant.phone = createRestaurantRequest.phone
    restaurant.distance = createRestaurantRequest.distance
    restaurant.image = createRestaurantRequest.image
    restaurant.vote = createRestaurantRequest.vote

    await this.restaurantRepository.save(restaurant)

    return RestaurantsService.entityToDTO(restaurant)
  }

  private static entityToDTO(restaurant: Restaurant): RestaurantDto {
    const restaurantDTO = new RestaurantDto()
    restaurantDTO.id = restaurant.id
    restaurantDTO.name = restaurant.name
    restaurantDTO.phone = restaurant.phone
    restaurantDTO.distance = restaurant.distance
    restaurantDTO.image = restaurant.image
    restaurantDTO.vote = restaurant.vote

    return restaurantDTO
  }

  public async getAll(): Promise<any> {
    const restaurants: Restaurant[] = await this.restaurantRepository.find()

    return restaurants.map(x => RestaurantsService.entityToDTO(x))
  }

  public async updateOne(restaurantId: number, updateRestaurantRequest: UpdateRestaurantDto): Promise<any> {
    const restaurant: Restaurant = await this.getOne(restaurantId)

    restaurant.name = updateRestaurantRequest.name || restaurant.name
    restaurant.phone = updateRestaurantRequest.phone || restaurant.phone
    restaurant.distance = updateRestaurantRequest.distance || restaurant.distance
    restaurant.image = updateRestaurantRequest.image || restaurant.image
    restaurant.vote = updateRestaurantRequest.vote || restaurant.vote

    await this.restaurantRepository.save(restaurant)

    return RestaurantsService.entityToDTO(restaurant)
  }

  public async deleteOne(restaurantId: number): Promise<any> {
    const restaurant: Restaurant = await this.getOne(restaurantId)

    await this.restaurantRepository.remove(restaurant)
  }
}

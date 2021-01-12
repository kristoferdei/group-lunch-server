import { Restaurant } from './entity/restaurant.entity';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
export declare class RestaurantsService {
    private restaurantRepository;
    constructor(restaurantRepository: Repository<Restaurant>);
    getOne(taskId: number): Promise<any>;
    createOne(createRestaurantRequest: CreateRestaurantDto): Promise<any>;
    private static entityToDTO;
    getAll(): Promise<any>;
    updateOne(restaurantId: number, updateRestaurantRequest: UpdateRestaurantDto): Promise<any>;
    deleteOne(restaurantId: number): Promise<any>;
}

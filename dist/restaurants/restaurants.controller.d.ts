import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
export declare class RestaurantsController {
    private readonly restaurantsService;
    constructor(restaurantsService: RestaurantsService);
    getAll(): Promise<any>;
    getOne(restaurantId: number): Promise<any>;
    createOne(createRestaurantRequest: CreateRestaurantDto): Promise<any>;
    updateOne(restaurantId: number, updateTaskRequest: UpdateRestaurantDto): Promise<any>;
    deleteOne(restaurantId: number): Promise<void>;
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var RestaurantsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const restaurant_entity_1 = require("./entity/restaurant.entity");
const typeorm_2 = require("typeorm");
const restaurant_dto_1 = require("./dto/restaurant.dto");
let RestaurantsService = RestaurantsService_1 = class RestaurantsService {
    constructor(restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }
    async getOne(taskId) {
        const restaurant = await this.restaurantRepository.findOne(taskId);
        if (!restaurant)
            throw new common_1.NotFoundException(`Task with the id ${taskId} was not found`);
        return RestaurantsService_1.entityToDTO(restaurant);
    }
    async createOne(createRestaurantRequest) {
        const restaurant = new restaurant_entity_1.Restaurant();
        restaurant.name = createRestaurantRequest.name;
        restaurant.phone = createRestaurantRequest.phone;
        restaurant.distance = createRestaurantRequest.distance;
        restaurant.image = createRestaurantRequest.image;
        restaurant.vote = createRestaurantRequest.vote;
        await this.restaurantRepository.save(restaurant);
        return RestaurantsService_1.entityToDTO(restaurant);
    }
    static entityToDTO(restaurant) {
        const restaurantDTO = new restaurant_dto_1.RestaurantDto();
        restaurantDTO.id = restaurant.id;
        restaurantDTO.name = restaurant.name;
        restaurantDTO.phone = restaurant.phone;
        restaurantDTO.distance = restaurant.distance;
        restaurantDTO.image = restaurant.image;
        restaurantDTO.vote = restaurant.vote;
        return restaurantDTO;
    }
    async getAll() {
        const restaurants = await this.restaurantRepository.find();
        return restaurants.map(x => RestaurantsService_1.entityToDTO(x));
    }
    async updateOne(restaurantId, updateRestaurantRequest) {
        const restaurant = await this.getOne(restaurantId);
        restaurant.name = updateRestaurantRequest.name || restaurant.name;
        restaurant.phone = updateRestaurantRequest.phone || restaurant.phone;
        restaurant.distance = updateRestaurantRequest.distance || restaurant.distance;
        restaurant.image = updateRestaurantRequest.image || restaurant.image;
        restaurant.vote = updateRestaurantRequest.vote || restaurant.vote;
        await this.restaurantRepository.save(restaurant);
        return RestaurantsService_1.entityToDTO(restaurant);
    }
    async deleteOne(restaurantId) {
        const restaurant = await this.getOne(restaurantId);
        await this.restaurantRepository.remove(restaurant);
    }
};
RestaurantsService = RestaurantsService_1 = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(restaurant_entity_1.Restaurant)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RestaurantsService);
exports.RestaurantsService = RestaurantsService;
//# sourceMappingURL=restaurants.service.js.map
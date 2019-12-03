import { Restaurant } from "./restaurant/restaurant.model";

export class RestaurantsService{
    constructor(private restaurantsService: RestaurantsService){}

    rests: Restaurant[]
          
    restaurants(): Restaurant[]{
        return this.rests;
    }
    }
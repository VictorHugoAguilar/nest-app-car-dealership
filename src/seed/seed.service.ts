import { Injectable } from '@nestjs/common';
import { BrandsService } from '../brands/brands.service';
import { CarsService } from '../cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BRAND_SEED } from './data/brand.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly brandsService: BrandsService,
    private readonly carService: CarsService,
  ) {}

  populateDB() {
    this.brandsService.fillBrandWithSeedData(BRAND_SEED);
    this.carService.fillCarWithSeedData(CARS_SEED);

    return {
      msg: 'fill data OK',
      brands: BRAND_SEED,
      cars: CARS_SEED,
    };
  }
}

import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corrolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokke',
    },
    {
      id: uuid(),
      brand: 'Mini',
      model: 'Cooper',
    },
  ];

  public getCars() {
    return this.cars;
  }

  public getById(id: string) {
    const carFound = this.cars.find((c) => c.id === id);
    if (!carFound) {
      throw new NotFoundException(`Car with id '${id}' not found`);
    }
    return carFound;
  }

  public createCars(createCarDto: CreateCarDto) {
    const car: Car = {
      ...createCarDto,
      id: uuid(),
    };
    this.cars.push(car);
    return car;
  }

  public updateCars(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.getById(id);
    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new BadRequestException(`Car id is not valid inside body`);
    }
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id };
        return carDB;
      }
      return car;
    });
    return carDB;
  }

  public deleteCar(id: string) {
    const carDB = this.getById(id);
    if (!carDB) {
      throw new BadRequestException(`Car id is not valid`);
    }
    this.cars = this.cars.filter((car) => car.id !== id);
    return carDB;
  }
}

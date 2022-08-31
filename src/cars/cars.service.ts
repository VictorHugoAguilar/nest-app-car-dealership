import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

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
}

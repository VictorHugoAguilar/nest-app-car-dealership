import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corrolla',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Cherokke',
    },
    {
      id: 4,
      brand: 'Mini',
      model: 'Cooper',
    },
  ];

  public getCars() {
    return this.cars;
  }

  public getById(id: number) {
    const carFound = this.cars.find((c) => c.id === id);
    if (!carFound) {
      throw new NotFoundException(`Car with id '${id}' not found`);
    }
    return carFound;
  }
}

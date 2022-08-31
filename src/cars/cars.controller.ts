import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private brand = ['Mini', 'Ford'];

  @Get()
  getMark() {
    return this.brand;
  }

  @Get(':id')
  GetCarById(@Param('id') id: string) {
    return this.brand[id];
  }
}

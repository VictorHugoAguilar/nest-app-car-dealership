import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.getCars();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.getById(id);
  }

  @Post()
  createCar(@Body() payload: any) {
    console.log('payload for create car', payload);
    return true;
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    console.log('id to update', id);
    console.log('payload to update', payload);
    return true;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    console.log('id to delete', id);
    return true;
  }
}

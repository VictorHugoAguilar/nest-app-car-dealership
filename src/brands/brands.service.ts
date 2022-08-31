import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createdAt: new Date().getTime(),
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;
    const brand: Brand = {
      name: name.toLocaleLowerCase(),
      id: uuid(),
      createdAt: new Date().getTime(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand: Brand = this.brands.find((bran) => bran.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand with id "${id}" not found`);
    }
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    if (!updateBrandDto.id && updateBrandDto.id !== id) {
      throw new BadRequestException(`Brand id is not valid inside body`);
    }
    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDB.updatedAt = new Date().getTime();
        brandDB = { ...brandDB, ...updateBrandDto, id };
        return brandDB;
      }
      return brand;
    });
    return brandDB;
  }

  remove(id: string) {
    const brand = this.findOne(id);
    this.brands = this.brands.filter((brand) => brand.id !== id);
    return brand;
  }
}

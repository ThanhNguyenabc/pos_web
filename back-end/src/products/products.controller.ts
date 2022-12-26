import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Post,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './product.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  async getProductList() {
    const res = await this.productService.getAll();
    console.log('data = ', res);
    return res;
  }

  @Get('categories')
  async getAllCategories() {}
  @Post()
  async addProduct(@Body() data: CreateProductDto) {}
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';
import { Product, ProductDocument } from './entities/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async findOne(productFilter: FilterQuery<Product>): Promise<Product> {
    return this.productModel.findOne(productFilter);
  }

  async find(productFilter: FilterQuery<Product>): Promise<Product[]> {
    return this.productModel.find(productFilter);
  }

  async getAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
}

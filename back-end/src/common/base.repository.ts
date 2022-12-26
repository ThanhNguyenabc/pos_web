import { InjectModel } from '@nestjs/mongoose';
import {
  Document,
  FilterQuery,
  Model,
  ProjectionType,
  QueryOptions,
  UpdateQuery,
  UpdateWithAggregationPipeline,
} from 'mongoose';

export abstract class BaseRepository<T extends Document> {
  constructor(readonly model: Model<T>) {}

  async create(doc): Promise<T | undefined> {
    try {
      return await this.model.create(doc);
    } catch (error) {
      throw error;
    }
  }

  async findById(id: string | number, options?: QueryOptions): Promise<T> {
    return this.model.findById(id, options);
  }

  async findByCondition(
    filter?: FilterQuery<T>,
    projection?: ProjectionType<T> | null,
    options?: QueryOptions<T> | null,
  ): Promise<T> {
    return this.model.findOne(filter, projection, options);
  }

  async getByCondition(
    filter?: FilterQuery<T>,
    projection?: ProjectionType<T> | null,
    options?: QueryOptions<T> | null,
  ): Promise<T[]> {
    return this.model.find(filter, projection, options);
  }

  async deleteOne(id: string) {
    return this.model.deleteOne({ _id: id });
  }

  async deleteMany(id: string[]) {
    return this.model.deleteMany({ _id: { $in: id } });
  }

  async deleteByCondition(filter: FilterQuery<T>) {
    return this.model.deleteMany(filter);
  }

  async updateMany(
    filter?: FilterQuery<T>,
    update?: UpdateQuery<T> | UpdateWithAggregationPipeline,
    options?: QueryOptions<T> | null,
  ) {
    return this.model.updateMany(filter, update, options);
  }

  async findByIdAndUpdate(id: string, update?: UpdateQuery<T>) {
    return this.model.findByIdAndUpdate(id, update);
  }
}

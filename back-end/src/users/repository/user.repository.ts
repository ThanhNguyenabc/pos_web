import { InjectModel } from '@nestjs/mongoose';
import { BaseRepository } from 'common/base.repository';
import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';

import { User, UserDocument } from 'users/model/user.model';

@Injectable()
export class UserRepository extends BaseRepository<UserDocument> {
  constructor(@InjectModel(User.name) readonly model: Model<UserDocument>) {
    super(model);
  }
}

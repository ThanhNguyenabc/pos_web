import {
  HttpException,
  HttpStatus,
  Injectable,
  UseFilters,
} from '@nestjs/common';
import { CreateUserDto } from 'users/dto/create-user.dto';
import { UserRepository } from 'users/repository/user.repository';
import bcrypt from 'bcrypt';
import { LoginDto } from 'users/dto/login.dto';
import { User } from 'users/model/user.model';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  async createUser(userDto: CreateUserDto): Promise<User> {
    userDto.password = await bcrypt.hash(userDto.password, 10);

    const userInDb = await this.userRepo.findByCondition({
      email: userDto.email,
    });

    if (userInDb) {
      throw new HttpException('User already exist', HttpStatus.BAD_REQUEST);
    }
    return await this.userRepo.create(userDto);
  }

  async findUserByLogin(loginDto: LoginDto) {
    const userInDb = await this.userRepo.findByCondition({
      email: loginDto.email,
    });

    if (!userInDb) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    const isequal = bcrypt.compareSync(loginDto.password, userInDb.password);

    if (!isequal) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    return userInDb;
  }
}

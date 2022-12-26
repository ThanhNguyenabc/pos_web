import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'users/dto/create-user.dto';
import { LoginDto } from 'users/dto/login.dto';

@Injectable()
export class AuthServcie {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(createUser: CreateUserDto) {
    const user = await this.userService.createUser(createUser);
    const token = this.createToken(user);
    return {
      email: user.email,
      ...token,
    };
  }

  async login(loginDto: LoginDto) {
    const user = await this.userService.findUserByLogin(loginDto);
    const token = this.createToken(user);
    return {
      email: user.email,
      ...token,
    };
  }
  private createToken({ email }) {
    const accessToken = this.jwtService.sign({ email });
    return {
      accessToken: accessToken,
    };
  }
}

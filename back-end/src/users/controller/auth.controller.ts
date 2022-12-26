import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'users/dto/create-user.dto';
import { LoginDto } from 'users/dto/login.dto';
import { AuthServcie } from 'users/service/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthServcie) {}

  @Post('login')
  async userLogin(@Body() data: LoginDto) {
    return this.authService.login(data);
  }

  @Post('register')
  async register(@Body() data: CreateUserDto) {
    return this.authService.register(data);
  }

  @Post('logout')
  async logout(@Body() data: LoginDto) {
    console.log(process.env.SECRET_KEY);
    // return this.userService.lo(data);
  }
}

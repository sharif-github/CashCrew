import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    const { username, password, email } = createUserDto;
    
    if (!username || !password || !email) {
      throw new BadRequestException('Username, password, and email are required.');
    }
    
    const user = await this.usersService.createUser(username, password, email);
    return { message: 'User registered successfully', user };
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const { username, password } = loginDto;
    console.log(username)
    const user = await this.usersService.findOne(username);
    console.log(user)
    if (!user || user.password !== password) {
      return { message: 'Invalid credentials' };
    }
    
    return { message: 'Login successful', user };
  }
}

import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from 'src/users/dto/create-user.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger/dist';
import { Token } from 'src/types';

@ApiTags('Authorizartion')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Login User' })
  @ApiResponse({ status: 200, type: String })
  @Post('/login')
  login(@Body() userDto: CreateUserDTO): Promise<Token> {
    return this.authService.login(userDto);
  }

  @ApiOperation({ summary: 'Register User' })
  @ApiResponse({ status: 200, type: String })
  @Post('/register')
  registration(@Body() userDto: CreateUserDTO): Promise<Token> {
    return this.authService.registration(userDto);
  }
}

import { Controller, Get, Post } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  @Get()
  getCurrentDog() {
    return 'current dog';
  }

  @Post()
  async signUp() {
    return 'signup';
  }

  @Post('login')
  logIn() {
    return 'login';
  }

  @Post('logout')
  logOut() {
    return 'logout';
  }

  @Post('upload/dogs')
  uploadDogImg() {
    return 'upload dog image';
  }
}

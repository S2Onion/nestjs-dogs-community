import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { DogRequestDto } from './dto/dogs.request.dto';

@UseInterceptors(new SuccessInterceptor())
@Controller('dogs')
export class DogsController {
	@Get()
	getCurrentDog() {
		return 'current dog';
	}

	@Post()
	async signUp(@Body() body: DogRequestDto) {
		console.log(body);
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

import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { DogsService } from './dogs.service';
import { DogRequestDto } from './dto/dogs.request.dto';
import { DogsReadOnlyDto } from './dto/dogs.response.dto';

@UseInterceptors(new SuccessInterceptor())
@Controller('dogs')
export class DogsController {
    constructor(private readonly dogsService: DogsService) {}

    @ApiOperation({ summary: '강아지 정보 조회' })
    @Get()
    getCurrentDog() {
        return 'current dog';
    }

    @ApiOperation({ summary: '회원가입' })
	@ApiResponse({
        status: 200,
        description: '성공',
		type: DogsReadOnlyDto
    })
    @ApiResponse({
        status: 500,
        description: '서버 내부 에러',
    })
    @Post()
    async signUp(@Body() body: DogRequestDto) {
        return await this.dogsService.signUp(body);
    }

    @ApiOperation({ summary: '로그인' })
    @Post('login')
    logIn() {
        return 'login';
    }

    @ApiOperation({ summary: '로그아웃' })
    @Post('logout')
    logOut() {
        return 'logout';
    }

    @ApiOperation({ summary: '강아지 사진 업데이트' })
    @Post('upload/dogs')
    uploadDogImg() {
        return 'upload dog image';
    }
}

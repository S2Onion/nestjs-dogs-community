import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { DogRequestDto } from './dto/dogs.request.dto';
import { Dog } from './schema/dogs.schema';

@Injectable()
export class DogsService {
    constructor(@InjectModel(Dog.name) private readonly dogModel: Model<Dog>) {}

    async signUp(body: DogRequestDto) {
        const { email, name, password } = body;
        const isDogExist = await this.dogModel.exists({ email });

        // 중복된 이메일 정보가 있을 경우 에러 처리
        if (isDogExist) {
            throw new UnauthorizedException('Exist dog.');
        }

        const hashedPassword = await bcrypt.hash(password, 10); // 패스워드 암호화

        const dog = await this.dogModel.create({
            email,
            name,
            password: hashedPassword,
        }); // 강아지 정보 저장

        return dog.readOnlyData;
    }
}

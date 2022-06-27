import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DogRequestDto } from './dto/dogs.request.dto';
import { Dog } from './schema/dogs.schema';

@Injectable()
export class DogsService {
    constructor(@InjectModel(Dog.name) private readonly dogModel: Model<Dog>) {}

    async signUp(body: DogRequestDto) {
        const { email, name, password } = body;
        const isDogExist = await this.dogModel.exists({ email });

        if(isDogExist){
            throw new UnauthorizedException('Exist dog.');
        }

        
    }
}

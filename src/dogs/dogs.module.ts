import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { Dog, DogSchema } from './schema/dogs.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Dog.name, schema: DogSchema }])],
    controllers: [DogsController],
    providers: [DogsService],
})
export class DogsModule {}

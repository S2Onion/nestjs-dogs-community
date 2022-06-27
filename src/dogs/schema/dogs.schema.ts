import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

const options: SchemaOptions = {
    timestamps: true,
};

@Schema(options)
export class Dog extends Document {
    @ApiProperty({
        example: 'test@test.com',
        description: '이메일',
        required: true,
    })
    @Prop({
        required: true,
        unique: true,
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        example: 'tester',
        description: '이름',
        required: true,
    })
    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        example: '123456',
        description: '패스워드',
        required: true,
    })
    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    password: string;

    @Prop()
    @IsString()
    imgUrl: string;

    readonly readOnlyData: { id: string; email: string; name: string };
}

export const DogSchema = SchemaFactory.createForClass(Dog);

DogSchema.virtual('readOnlyData').get(function (this: Dog) {
    return {
        id: this.id,
        email: this.email,
        name: this.name,
    };
});

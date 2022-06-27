import { ApiProperty, PickType } from '@nestjs/swagger';
import { Dog } from '../schema/dogs.schema';

export class DogsReadOnlyDto extends PickType(Dog, ['email', 'name'] as const) {
    @ApiProperty({
        example: '62b9....50fb',
        description: 'ID',
        required: true,
    })
    id: string;
}

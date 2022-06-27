import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe()); // Class validator 기능 파이프 추가
    app.useGlobalFilters(new HttpExceptionFilter()); // Custom HTTP Exception 필터 기능 추가

    // Swagger 설정
    const swaggerConfig = new DocumentBuilder().setTitle('Dogs Example').setDescription('The Dogs API description').setVersion('1.0.0').addTag('dogs').build();

    const document: OpenAPIObject = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('docs', app, document); // 여기서 Swagger 엔드포인트 설정

    await app.listen(process.env.APPLICATION_PORT);
}
bootstrap();

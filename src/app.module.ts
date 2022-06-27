import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      useNewUrlParser: true, // mongodb url을 읽을 수 있도록 설정
      useUnifiedTopology: true, // 최신 mongodb 드라이버 엔진을 사용하도록 설정
    }),
    DogsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  private readonly isDev: boolean = process.env.MODE === 'DEV' ? true : false;

  configure(consumer: MiddlewareConsumer) {
    mongoose.set('debug', this.isDev); // Query 로그 보여주기 여부
  }
}

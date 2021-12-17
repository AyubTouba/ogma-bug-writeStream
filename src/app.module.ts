import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { OgmaModule, OgmaInterceptor, OgmaService } from '@ogma/nestjs-module';
import { ExpressParser } from '@ogma/platform-express';
import { createReadStream } from 'fs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestLoggerModule } from './test-logger/test-logger.module';

@Module({
  imports: [
    OgmaModule.forRoot({
      service: {
        color: true,
        json: true,
        application: 'NestJS-Ogma',
        WriteStream: createReadStream('info.log'),
      },
      interceptor: {
        http: ExpressParser,
        ws: false,
        gql: false,
        rpc: false
      }
    }),
    TestLoggerModule
  ],
  controllers: [AppController],
  providers: [AppService,OgmaService,{
    provide: APP_INTERCEPTOR,
    useClass: OgmaInterceptor
  }],
})
export class AppModule {}

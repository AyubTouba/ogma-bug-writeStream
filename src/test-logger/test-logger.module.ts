import { Module } from '@nestjs/common';
import { OgmaModule } from '@ogma/nestjs-module';
import { TestLoggerController } from './test-logger.controller';
import { TestLoggerService } from './test-logger.service';

@Module({
  imports: [OgmaModule.forFeature(TestLoggerService.name)], // or OgmaModule.forFeature(MyService.name)
  providers: [TestLoggerService],
  controllers: [TestLoggerController]
})
export class TestLoggerModule {}

import { Controller, Get } from '@nestjs/common';
import { TestLoggerService } from './test-logger.service';

@Controller('test')
export class TestLoggerController {

    constructor(private readonly testLoggerService: TestLoggerService) {}

    @Get()
    getHello(): string {
      return this.testLoggerService.getHello();
    }
  
  
    @Get('test')
    getTest(): string {
      return this.testLoggerService.test();
    }
}

import { Injectable } from '@nestjs/common';
import { OgmaLogger, OgmaService } from '@ogma/nestjs-module';

@Injectable()
export class TestLoggerService {
    constructor(
         @OgmaLogger(TestLoggerService.name) private readonly logger: OgmaService // or @OgmaLogger(MyService.name)
        ) {}
        getHello(): string {
          this.logger.error('ERROR CF','TESTo','APP SERVICE')
          return 'Hello World!';
        }
      
        test(): string {
          this.logger.debug('DEBUG TES','DEBUG')
          return 'test!';
        }
}

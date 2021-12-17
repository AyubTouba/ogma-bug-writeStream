import { Test, TestingModule } from '@nestjs/testing';
import { TestLoggerController } from './test-logger.controller';

describe('TestLoggerController', () => {
  let controller: TestLoggerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestLoggerController],
    }).compile();

    controller = module.get<TestLoggerController>(TestLoggerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Controller, Get } from '@nestjs/common';

@Controller('demo')
export class DemoController {
  @Get()
  getDemo() {
    return {
      message: 'Hello World!',
      time: new Date().getTime(),
    };
  }
}

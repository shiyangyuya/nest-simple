import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoController } from './demo/demo.controller';
import { PersonModule } from './person/person.module';

@Module({
  imports: [PersonModule],
  controllers: [AppController, DemoController],
  providers: [AppService],
})
export class AppModule {}

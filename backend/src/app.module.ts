import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RequestModule } from './request/request.module';

@Module({
  imports: [PrismaModule, RequestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

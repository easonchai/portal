import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RequestModule } from './request/request.module';
import { Web3Module } from './web3/web3.module';

@Module({
  imports: [PrismaModule, RequestModule, Web3Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

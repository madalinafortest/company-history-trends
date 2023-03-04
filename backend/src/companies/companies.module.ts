import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

ConfigModule.forRoot();

@Module({
  imports: [HttpModule],
  providers: [CompaniesService],
  controllers: [CompaniesController],
})
export class CompaniesModule {}

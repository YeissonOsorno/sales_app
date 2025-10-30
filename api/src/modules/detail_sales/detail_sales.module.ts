import { Module } from '@nestjs/common';
import { DetailSalesService } from './detail_sales.service';
import { DetailSalesController } from './detail_sales.controller';

@Module({
  controllers: [DetailSalesController],
  providers: [DetailSalesService],
})
export class DetailSalesModule {}

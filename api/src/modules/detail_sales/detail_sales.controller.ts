import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetailSalesService } from './detail_sales.service';
import { CreateDetailSaleDto } from './dto/create-detail_sale.dto';
import { UpdateDetailSaleDto } from './dto/update-detail_sale.dto';

@Controller('detail-sales')
export class DetailSalesController {
  constructor(private readonly detailSalesService: DetailSalesService) {}

  @Post()
  create(@Body() createDetailSaleDto: CreateDetailSaleDto) {
    return this.detailSalesService.create(createDetailSaleDto);
  }

  @Get()
  findAll() {
    return this.detailSalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detailSalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetailSaleDto: UpdateDetailSaleDto) {
    return this.detailSalesService.update(+id, updateDetailSaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detailSalesService.remove(+id);
  }
}

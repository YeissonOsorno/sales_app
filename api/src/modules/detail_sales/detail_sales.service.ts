import { Injectable } from '@nestjs/common';
import { CreateDetailSaleDto } from './dto/create-detail_sale.dto';
import { UpdateDetailSaleDto } from './dto/update-detail_sale.dto';

@Injectable()
export class DetailSalesService {
  create(createDetailSaleDto: CreateDetailSaleDto) {
    return 'This action adds a new detailSale';
  }

  findAll() {
    return `This action returns all detailSales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detailSale`;
  }

  update(id: number, updateDetailSaleDto: UpdateDetailSaleDto) {
    return `This action updates a #${id} detailSale`;
  }

  remove(id: number) {
    return `This action removes a #${id} detailSale`;
  }
}

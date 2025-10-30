import { Injectable , Inject} from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { DataSource, Repository } from 'typeorm';
import { Sales } from '../../common/models/sale.entity';
@Injectable()
export class SalesService {
  private salesRepo: Repository<Sales>;
  constructor(
    @Inject("DATA_SOURCE") private dataSource: DataSource
  ) {
    this.salesRepo = this.dataSource.getRepository(Sales);
  }
 
  create(createSaleDto: CreateSaleDto) {
    return 'This action adds a new sale';
  }

  findAll() {
    return this.salesRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} sale`;
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return `This action updates a #${id} sale`;
  }

  remove(id: number) {
    return `This action removes a #${id} sale`;
  }
}

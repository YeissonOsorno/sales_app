import { Injectable , Inject} from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { DataSource, Repository } from 'typeorm';
import { Client } from 'src/common/models/client.entity';
@Injectable()
export class ClientsService {
  private clientRepo: Repository<Client>;
  constructor(
    @Inject("DATA_SOURCE") private dataSource: DataSource
  ) {
    this.clientRepo = this.dataSource.getRepository(Client);
  }

  async create(createClientDto: CreateClientDto) {
    const client = this.clientRepo.create(createClientDto);
    return this.clientRepo.save(client);    
  }

  findAll() {
    return this.clientRepo.find();
  }

  findOne(id: number) {
    return this.clientRepo.findOneBy({id});
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
     await this.clientRepo.update(id, updateClientDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.clientRepo.delete(id);
  }
}

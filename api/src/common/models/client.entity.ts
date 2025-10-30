
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { Phone } from './phone.entity';
import { on } from 'events';
import { Sales } from './sale.entity';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rut: string;
  
  @Column()
  name: string;

  @Column({nullable: true})
  address: string;

  @OneToMany(() => Phone, (phone) => phone.client)
  phone: Phone[];

  @OneToMany(() => Sales, (sale) => sale.client_id)
  sales_id: Sales[];
}
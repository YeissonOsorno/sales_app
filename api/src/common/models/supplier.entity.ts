import { Column, Entity, ManyToOne,OneToMany,PrimaryGeneratedColumn } from 'typeorm';
import {Product} from './product.entity'
@Entity('suppliers')
export class Supplier {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nit: string;

    @Column()
    name: string;

    @Column()
    address: string;

    @OneToMany(() => Product, product => product.supplier)
    product: Product[];
}

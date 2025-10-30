import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Sales } from './sale.entity';
import { Product } from './product.entity';

@Entity('detail_sales')
export class DetailSale {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Sales, sale => sale.detailSales)
    sale_id: Sales; 

    @ManyToOne(() => Product, product => product.detail_sales)
    product_id: Product;

    @Column("decimal", { precision: 10, scale: 2 })
    price: number; // En tu diagrama era 'product_value', pero 'price' está bien
    
    @Column()
    quantity: number;

    
}
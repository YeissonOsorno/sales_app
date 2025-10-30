import { Column, PrimaryGeneratedColumn, Entity, OneToMany, ManyToOne ,JoinColumn} from 'typeorm';
import { Category } from './category.entity';
import { Supplier } from './supplier.entity';
import { DetailSale } from './detail_sale.entity';

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("decimal", { precision: 10, scale: 2 })    
    price: number;

    @Column()
    stock: number;

    @Column({ name: 'category_id', nullable: false })
    category_id: number;

    @Column({ name: 'supplier_id', nullable: false })
    supplier_id: number;

    @ManyToOne(() => Category, category => category.product)
    @JoinColumn({ name: 'category_id' })
    category: Category;

    @ManyToOne(() => Supplier, supplier => supplier.product)
    @JoinColumn({ name: 'supplier_id' })
    supplier: Supplier;

    @OneToMany(() => DetailSale, detailSale => detailSale.product_id)
    detail_sales: DetailSale[];
}
